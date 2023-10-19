import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactService from '../../services/ContactService';

export function NewContact() {
    async function handleSubmit(formData) {
        try {
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };

            const response = await ContactService.createContact(contact);

            console.log(response);
        } catch (err) {
            console.log(err);

            const event = new CustomEvent('addtoast');

            console.log(event);
            document.addEventListener('');
        }
    }

    return (
        <>
            <PageHeader
                title="Novo contato"
            />

            <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
        </>
    );
}
