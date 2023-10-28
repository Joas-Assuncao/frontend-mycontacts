import { useEffect, useState } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        function handleAddToast(event) {
            const { type, text } = event.detail;

            setMessages((prevState) => [
                ...prevState,
                { id: Math.random, type, text }
            ]);
        }

        document.addEventListener('addtoast', handleAddToast);

        return () => document.removeEventListener('addtoast', handleAddToast);
    }, []);

    return (
        <Container>
            {messages.map(({ id, text, type }) => (
                <ToastMessage key={id} message={text} type={type} />
            ))}
        </Container>
    );
}
