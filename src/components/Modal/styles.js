import styled from 'styled-components';

export const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(5px);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    background: #FFF;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    h1 {
        font-size: 22px;
        color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])}
    }

    p {
        margin-top: 8px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-content: center;
    justify-content: flex-end;
    margin-top: 32px;

    .cancel-button {
        background: transparent;
        border: none;
        margin-right: 8px;
        color: ${({ theme }) => theme.colors.gray[200]};
    }
`;
