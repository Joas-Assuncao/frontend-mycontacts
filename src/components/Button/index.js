import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';
import { StyledButton } from './styles';

export function Button({
    type,
    isLoading,
    disabled,
    children,
    danger,
    onClick,
}) {
    return (
        <StyledButton
            type={type}
            disabled={disabled || isLoading}
            danger={danger}
            onClick={onClick}
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
    danger: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    isLoading: true,
    disabled: false,
    danger: false,
    onClick: undefined,
};
