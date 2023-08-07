import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { ButtonContainer, Form } from './styles';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

export function ContactForm({ buttonLabel }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');

    const { setError, removeError, getErrorMessageByFieldName } = useErrors();

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

    function handleSubmit(event) {
        event.preventDefault();

        // console.log({
        //     name, phone, email, category,
        // });
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup
                error={getErrorMessageByFieldName('name')}
            >
                <Input
                    placeholder="Nome"
                    value={name}
                    error={getErrorMessageByFieldName('name')}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup
                error={getErrorMessageByFieldName('email')}
            >
                <Input
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
                    onChange={(event) => setPhone(event.target.value)}
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
                <Button>
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}

ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
