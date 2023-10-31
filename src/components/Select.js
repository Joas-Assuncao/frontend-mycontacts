import styled from 'styled-components';

export default styled.select`
    height: 52px;
    width: 100%;

    background: #FFF;

    padding: 0 16px;

    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: 2px solid #FFF;
    
    outline: none;
    transition: border-color 0.2s ease-in;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }

    &[disabled] {
        background: ${({ theme }) => theme.colors.gray[100]};
        border-color: ${({ theme }) => theme.colors.gray[200]};
    }
`;
