import styled from 'styled-components';

export const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.06);

    position: fixed;
    left: 0;
    top: 0;

    backdrop-filter: blur(5px);
`;

export const Container = styled.div`
    width: 100%;
    max-width: 450px;

    background: #FFF;

    padding: 24px;

    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    > h1 {
        font-size: 22px;
        color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])}
    }

    .modal-body {
        margin-top: 32px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-content: center;
    justify-content: flex-end;

    margin-top: 32px;

    .cancel-button {
        background: transparent;

        margin-right: 24px;

        color: ${({ theme }) => theme.colors.gray[200]};
        border: none;

        &:disabled {
            cursor: not-allowed;
        }
    }
`;
