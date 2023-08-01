import styled from 'styled-components';

export const Container = styled.div`
    a {
        text-decoration: none;
        
        span {
            color: ${({ theme }) => theme.color.primary.main};
            font-weight: bold;
        }

        img {
            margin-right: 8px;
            transform: rotate(-90deg);
        }
    }

    h1 {
        font-size: 24px;
    }
`;
