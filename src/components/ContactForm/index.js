import PropTypes from 'prop-types';
import { useState } from 'react';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { ButtonContainer, Form } from './styles';

import { isEmailValid } from '../../utils/isEmailValid';
import { useErrors } from '../../hooks/useErrors';
import { formatPhone } from '../../utils/formatPhone';

export function ContactForm({ buttonLabel, onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');

    const {
        errors,
        setError,
        removeError,
        getErrorMessageByFieldName,
    } = useErrors();

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

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit({
            name, email, phone, category,
        });
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
                    // type="email"
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

            <FormGroup>
                <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Category</option>
                    <option value="instagram">Instagram</option>
                    <option value="discord">Discord</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button disabled={!isFormValid}>
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
