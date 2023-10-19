import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 32px;

    background: ${({ theme }) => theme.colors.primary.main};
    color: #FFF;

    border-radius: 4px;
    box-shadow: 0 20px 20px -16px rgba(0, 0, 0, .25);

    & + & {
        margin-top: 12px;
    }

    strong {
        margin-left: 8px;
    }
`;
