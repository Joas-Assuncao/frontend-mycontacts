import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
    return (
        <Container>
            <ToastMessage message="Default toast" />
            <ToastMessage message="Error toast" />
            <ToastMessage message="Success toast" />
        </Container>
    );
}
