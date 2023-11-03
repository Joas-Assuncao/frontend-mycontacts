import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 52px;
    border: none;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.primary.main};
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #FFF;
    border-radius: 4px;

    transition: background .2s ease-in;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    ${({ theme, danger }) => (
        danger && css`
            background: ${theme.colors.danger.main};

            &:hover {
                background: ${theme.colors.danger.light};
            }

            &:active {
                background: ${theme.colors.danger.dark};
            }
        `
    )}

    &:disabled {
        background: #CCC;
        cursor: default;
    }
`;
