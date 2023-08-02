import PropTypes from 'prop-types';

import Button from '../Button';
import { FormGroup } from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { ButtonContainer, Form } from './styles';

export function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>

            <FormGroup>
                <Input placeholder="E-mail" />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>

            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
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
