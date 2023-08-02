import styled from 'styled-components';

export default styled.button`
    width: 100%;
    height: 52px;
    border: none;
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

    &:disabled {
        background: #CCC;
        cursor: default;
    }
`;
