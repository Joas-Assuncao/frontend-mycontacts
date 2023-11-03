import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react';
import { Link } from 'react-router-dom';

import {
    Card, Container, ErrorContainer, Header, InputSearchContainer, ListHeader
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/icons/sad.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';

import { delay } from '../../utils/delay';
import { toast } from '../../utils/toast';
import { formatPhone } from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';

export function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);

    const filteredContacts = useMemo(() => (
        contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ), [contacts, searchTerm]);

    const loadContacts = useCallback(async () => {
        try {
            setIsLoading(true);
            await delay(1500);

            const contactsList = await ContactsService.listContacts(orderBy);

            setHasError(false);

            setContacts(contactsList);
        } catch (err) {
            console.error(err);
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }, [orderBy]);

    useEffect(() => {
        loadContacts();
    }, [orderBy, loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
        );
    }

    function handleChangeSearchTerm(event) {
        const valueSearchTerm = event.target.value;

        setSearchTerm(valueSearchTerm);
    }

    function handleTryAgain() {
        loadContacts();
    }

    function handleDeleteContact(contact) {
        setIsDeleteModalVisible(true);

        setContactBeingDeleted(contact);
    }

    function handleCloseDeleteModal() {
        setIsDeleteModalVisible(false);
        setContactBeingDeleted(null);
    }

    async function handleConfirmDeleteContact() {
        try {
            setIsLoadingDelete(true);

            await ContactsService.deleteContact(contactBeingDeleted.id);

            setContacts((prevState) => (
                prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
            ));

            toast({
                type: 'success',
                text: 'Contato deletado com sucesso!',
                duration: 1000,
            });

            handleCloseDeleteModal();
        } catch (err) {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao deletar o contato!',
                duration: 3000,
            });
        } finally {
            setIsLoadingDelete(false);
        }
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />

            <Modal
                danger
                confirmLabel="Deletar"
                visible={isDeleteModalVisible}
                onCancel={handleCloseDeleteModal}
                isLoading={isLoadingDelete}
                onConfirm={handleConfirmDeleteContact}
                title={`Tem certeza que deseja deletar o contato "${contactBeingDeleted?.name}"?`}
            >
                <p>Esta ação não poderá ser desfeita!</p>
            </Modal>
            <InputSearchContainer>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Pesquise pelo nome..."
                    onChange={handleChangeSearchTerm}
                />
            </InputSearchContainer>

            <Header hasError={hasError}>
                {
                    !hasError && (
                        <strong>
                            {filteredContacts.length}
                            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
                        </strong>
                    )
                }
                <Link to="/new">
                    Novo contato
                </Link>
            </Header>

            {
                hasError && (
                    <ErrorContainer>
                        <img src={sad} alt="Sad" />
                        <div className="details">
                            <strong>Ocorreu um erro ao obter seus contatos!</strong>
                            <Button type="button" onClick={handleTryAgain}>
                                Tentar novamente
                            </Button>
                        </div>
                    </ErrorContainer>
                )
            }

            {
                !hasError && (
                    <>
                        {
                            filteredContacts.length > 0 && (
                                <ListHeader orderBy={orderBy}>
                                    <button
                                        type="button"
                                        className="sort-button"
                                        onClick={handleToggleOrderBy}
                                    >
                                        <span>Nome</span>
                                        <img src={arrow} alt="Arrow" />
                                    </button>
                                </ListHeader>
                            )
                        }

                        {
                            filteredContacts.map((contact) => (
                                <Card key={contact.id}>
                                    <div className="info">
                                        <div className="contact-info">
                                            <strong>{contact.name}</strong>
                                            {contact.category_name && (
                                                <small>{contact.category_name}</small>
                                            )}
                                        </div>
                                        <span>{contact.email}</span>
                                        <span>{formatPhone(contact.phone)}</span>
                                    </div>

                                    <div className="actions">
                                        <Link to={`/edit/${contact.id}`}>
                                            <img src={edit} alt="Editar" />
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteContact(contact)}
                                        >
                                            <img src={trash} alt="Deletar" />
                                        </button>
                                    </div>
                                </Card>
                            ))
                        }
                    </>
                )

            }
        </Container>
    );
}
