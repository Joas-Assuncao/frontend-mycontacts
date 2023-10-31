import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { ButtonContainer, Form } from './styles';

import { useErrors } from '../../hooks/useErrors';
import { formatPhone } from '../../utils/formatPhone';
import { isEmailValid } from '../../utils/isEmailValid';
import CategoriesService from '../../services/CategoriesService';
import { delay } from '../../utils/delay';

export function ContactForm({ buttonLabel, onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        errors,
        setError,
        removeError,
        getErrorMessageByFieldName,
    } = useErrors();

    useEffect(() => {
        setIsLoadingCategories(true);

        async function loadCategories() {
            try {
                await delay(1500);
                const categoriesList = await CategoriesService.listCategories();

                setCategories(categoriesList);
                // eslint-disable-next-line no-empty
            } catch (err) { } finally {
                setIsLoadingCategories(false);
            }
        }

        loadCategories();
    }, []);

    const isFormValid = (name && errors.length === 0);

    function handleNameChange(event) {
        const nameFromInput = event.target.value;
        setName(nameFromInput);

        if (!nameFromInput) {
            setError({
                field: 'name',
                message: 'Nome é obrigatório',
            });
        }

        if (nameFromInput) {
            removeError('name');
        }
    }

    function handleEmailChange(event) {
        const emailFromInput = event.target.value;
        setEmail(emailFromInput);

        if (emailFromInput && !isEmailValid(emailFromInput)) {
            setError({
                field: 'email',
                message: 'E-mail não é válido.',
            });
        } else {
            removeError('email');
        }
    }

    function handlePhoneChange(event) {
        setPhone(formatPhone(event.target.value));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);

        await onSubmit({
            name, email, phone, categoryId,
        });

        setCategoryId('');
        setName('');
        setEmail('');
        setPhone('');

        setIsSubmitting(false);
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)} noValidate>
            <FormGroup
                error={getErrorMessageByFieldName('name')}
            >
                <Input
                    placeholder="Nome *"
                    value={name}
                    error={getErrorMessageByFieldName('name')}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup
                error={getErrorMessageByFieldName('email')}
            >
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    error={getErrorMessageByFieldName('email')}
                    onChange={handleEmailChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="Telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="15"
                />
            </FormGroup>

            <FormGroup isLoading={isLoadingCategories}>
                <Select
                    value={categoryId}
                    onChange={(event) => setCategoryId(event.target.value)}
                    disabled={isLoadingCategories}
                >
                    <option value="">No category</option>

                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
