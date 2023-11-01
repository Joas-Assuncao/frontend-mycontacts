import { useRef } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import { delay } from '../../utils/delay';
import { toast } from '../../utils/toast';

export function NewContact() {
    const contactFormRef = useRef(null);

    async function handleSubmit(formData) {
        try {
            await delay(1500);
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };

            await ContactsService.createContact(contact);

            contactFormRef.current.resetForm();

            toast({
                type: 'success',
                text: 'Contato salvo com sucesso!',
                duration: 1000,
            });
        } catch (err) {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao salvar contato!',
                duration: 3000,
            });
        }
    }

    return (
        <>
            <PageHeader
                title="Novo contato"
            />

            <ContactForm ref={contactFormRef} buttonLabel="Cadastrar" onSubmit={handleSubmit} />
        </>
    );
}
