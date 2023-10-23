import { useEffect, useState } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
    const [messages] = useState([
        { id: Math.random(), type: 'default', text: 'Default text' },
        { id: Math.random(), type: 'danger', text: 'Danger text' },
        { id: Math.random(), type: 'success', text: 'Success text' },
    ]);

    useEffect(() => {
        document.addEventListener('addtoast', (event) => {
            console.log('addtoastListener', event);
        });
    }, []);

    return (
        <Container>
            {messages.map(({ id, text, type }) => (
                <ToastMessage key={id} message={text} type={type} />
            ))}
        </Container>
    );
}
