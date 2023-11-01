import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';
import { PageHeader } from '../../components/PageHeader';

import ContactsService from '../../services/ContactsService';
import { delay } from '../../utils/delay';
import { toast } from '../../utils/toast';

export function EditContact() {
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] = useState('');

    const contactFormRef = useRef(null);

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function loadContact() {
            setIsLoading(true);

            try {
                await delay(1500);
                const contactData = await ContactsService.getContactById(id);

                contactFormRef.current.setFieldValues(contactData);

                setIsLoading(false);
                setContactName(contactData.name);
            } catch (err) {
                toast({
                    text: 'Contato não encontrado!',
                    type: 'danger',
                    duration: 5000,
                });
                history.push('/');
            }
        }

        loadContact();
    }, [id, history]);

    async function handleSubmit(formData) {
        await delay(1500);
        try {
            await delay(1500);
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };

            const contactUpdated = await ContactsService.updateContact(id, contact);

            setContactName(contactUpdated.name);

            toast({
                type: 'success',
                text: 'Contato editado com sucesso!',
                duration: 1000,
            });
        } catch (err) {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao editar contato!',
                duration: 3000,
            });
        }
    }

    return (
        <>
            <Loader isLoading={isLoading} />

            <PageHeader
                title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
            />

            <ContactForm
                ref={contactFormRef}
                buttonLabel="Salvar alterações"
                onSubmit={handleSubmit}
            />
        </>
    );
}
