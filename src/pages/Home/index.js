import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import {
    Card, Container, Header, InputSearchContainer, ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Loader } from '../../components/Loader';
// import { Modal } from '../../components/Modal';

export function Home() {
    const [contacts, setContacts] = useState([]);
    const [orderBy, setOrderBy] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const filteredContacts = useMemo(() => (
        contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ), [contacts, searchTerm]);

    useEffect(() => {
        async function loadContacts() {
            try {
                setIsLoading(true);

                const response = await fetch(
                    `http://localhost:3001/contacts?orderBy=${orderBy}`,
                );

                const json = await response.json();

                setContacts(json);
            } catch(error) {
                console.error(error);
            }
            finally {
                setIsLoading(false);
            }
        }

        loadContacts();
    }, []);

    function handleToggleOrderBy() {
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
        );
    }

    function handleChangeSearchTerm(event) {
        const valueSearchTerm = event.target.value;

        setSearchTerm(valueSearchTerm);
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

            <Header>
                <strong>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
                </strong>
                <Link to="/new">
                    Novo contato
                </Link>
            </Header>

            {
                !!filteredContacts.length && (
                    <ListHeader orderBy={orderBy}>
                        <button type="button" className="sort-button" onClick={handleToggleOrderBy}>
                            <span>Nome</span>
                            <img src={arrow} alt="Arrow" />
                        </button>
                    </ListHeader>
                )
            }

            {filteredContacts.map((contact) => (
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
            ))}
        </Container>
    );
}
