import styled, { css } from 'styled-components';

export default styled.input`
    height: 52px;
    width: 100%;

    background: #FFF;

    padding: 0 16px;

    border: 2px solid #FFF;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    outline: none;

    transition: border-color 0.2s ease-in;
    appearence: none;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }

    ${({ theme, error }) => (
        error && css`
            color: ${theme.colors.danger.main};
            border-color: ${theme.colors.danger.main} !important;
        `
    )}
`;
