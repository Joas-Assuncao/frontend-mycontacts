import styled, { css } from 'styled-components';

const containerVariants = {
    default: css`background: ${({ theme }) => theme.colors.primary.main};`,
    danger: css`background: ${({ theme }) => theme.colors.danger.main};`,
    success: css`background: ${({ theme }) => theme.colors.success.main};`,
};

export const Container = styled.div`
    ${({ type }) => containerVariants[type] || containerVariants.default};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 32px;
    gap: 8px;

    color: #FFF;

    border-radius: 4px;
    box-shadow: 0 20px 20px -16px rgba(0, 0, 0, .25);

    cursor: pointer;

    & + & {
        margin-top: 12px;
    }
`;
