import {
    Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>

            <Header>
                <strong>3 Contatos</strong>
                <a href="/">
                    Novo contato
                </a>
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
                        <a href="/">
                            <img src={edit} alt="Editar" />
                        </a>
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
                        <a href="/">
                            <img src={edit} alt="Editar" />
                        </a>
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
                        <a href="/">
                            <img src={edit} alt="Editar" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Deletar" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
