import { Link } from 'react-router-dom';
import {
    Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import { Loader } from '../../components/Loader';
// import { Modal } from '../../components/Modal';

export function Home() {
    return (
        <Container>
            {/* <Loader /> */}
            {/* <Modal danger /> */}
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>

            <Header>
                <strong>3 Contatos</strong>
                <Link to="/new">
                    Novo contato
                </Link>
            </Header>

            <ListContainer>
                <header>
                    <button type="button" className="sort-button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-info">
                            <strong>Joas Assunção</strong>
                            <small>Instagram</small>
                        </div>
                        <span>joassalvior@gmail.com</span>
                        <span>(61) 9 8989-9898</span>
                    </div>

                    <div className="actions">
                        <Link to="/edit/1">
                            <img src={edit} alt="Editar" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Deletar" />
                        </button>
                    </div>
                </Card>

                <Card>
                    <div className="info">
                        <div className="contact-info">
                            <strong>Joas Assunção</strong>
                            <small>Instagram</small>
                        </div>
                        <span>joassalvior@gmail.com</span>
                        <span>(61) 9 8989-9898</span>
                    </div>

                    <div className="actions">
                        <Link to="/edit/2">
                            <img src={edit} alt="Editar" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Deletar" />
                        </button>
                    </div>
                </Card>

                <Card>
                    <div className="info">
                        <div className="contact-info">
                            <strong>Joas Assunção</strong>
                            <small>Instagram</small>
                        </div>
                        <span>joassalvior@gmail.com</span>
                        <span>(61) 9 8989-9898</span>
                    </div>

                    <div className="actions">
                        <Link to="/edit/3">
                            <img src={edit} alt="Editar" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Deletar" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
