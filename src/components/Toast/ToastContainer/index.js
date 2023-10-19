import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
    return (
        <Container>
            <ToastMessage message="Default toast" type="default" />
            <ToastMessage message="Error toast" type="danger" />
            <ToastMessage message="Success toast" type="success" />
        </Container>
    );
}
