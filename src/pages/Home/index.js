import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Container, ErrorContainer, Header, InputSearchContainer, ListHeader
} from './styles';

import { Button } from '../../components/Button';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/icons/sad.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Loader } from '../../components/Loader';
import ContactService from '../../services/ContactService';
// import { Modal } from '../../components/Modal';

export function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const filteredContacts = useMemo(() => (
        contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ), [contacts, searchTerm]);

    async function loadContacts() {
        try {
            setIsLoading(true);

            const contactsList = await ContactService.listContacts(orderBy);

            setHasError(false);

            setContacts(contactsList);
        } catch (err) {
            console.error(err);
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadContacts();
    }, [orderBy]);

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

    return (
        <Container>
            <Loader isLoading={isLoading} />

            {/* <Modal danger /> */}
            <InputSearchContainer>
                <input
                    value={searchTerm}
                    type="text"
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
                                    <button type="button" className="sort-button" onClick={handleToggleOrderBy}>
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
                                        <span>{contact.phone}</span>
                                    </div>

                                    <div className="actions">
                                        <Link to={`/edit/${contact.id}`}>
                                            <img src={edit} alt="Editar" />
                                        </Link>
                                        <button type="button">
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
