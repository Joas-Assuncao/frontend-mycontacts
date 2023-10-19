import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import { Spinner } from '../Spinner';

export function Button({
    type, isLoading, disabled, children
}) {
    return (
        <StyledButton
            type={type}
            disabled={disabled || isLoading}
        >
            {!isLoading && children}
            {isLoading && <Spinner />}
        </StyledButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    isLoading: false,
    disabled: false,
};
