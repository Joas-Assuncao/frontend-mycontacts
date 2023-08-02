import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function NewContact() {
    return (
        <>
            <PageHeader
                title="Novo contato"
            />

            <ContactForm buttonLabel="Cadastrar" />
        </>
    );
}
