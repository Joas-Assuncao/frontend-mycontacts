import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: "Sora", sans-serif;

        background: transparent;
        
        border: none;

        box-sizing: border-box;

        outline: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.gray[900]};

        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
