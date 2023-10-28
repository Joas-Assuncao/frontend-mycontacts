import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactService from '../../services/ContactService';
import { toast } from '../../utils/toast';

export function NewContact() {
    async function handleSubmit(formData) {
        console.log(formData);
        try {
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };

            await ContactService.createContact(contact);

            toast('success', 'Contato salvo com sucesso!');
        } catch (err) {
            console.log(err);

            toast('danger', 'Ocorreu um erro ao salvar contato!');
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
