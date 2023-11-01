import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        height: 3.125rem;
        width: 100%;

        background: ${({ theme }) => theme.colors.white.lighter};

        padding: 0 1rem;

        border: none;
        border-radius: 1.5625rem;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

        &::placeholder {
            color: ${({ theme }) => theme.colors.white.medium};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary.main};
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};

    margin-top: 2rem;
    padding-bottom: 16px;

    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

    strong {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.gray[900]};
    }

    a {
        padding: .5rem 1rem;

        color: ${({ theme }) => theme.colors.primary.main};

        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;

        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        border-radius: .25rem;

        transition: all .5s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: ${({ theme }) => theme.colors.white.lighter};
        }
    }
`;

export const ListHeader = styled.header`
    margin-top: 1.5rem;
    margin-bottom: .5rem;

        button.sort-button {
            display: flex;
            align-items: center;
            
            background: transparent;
            
            border: none;

            span {
                margin-right: .5rem;
                
                color: ${({ theme }) => theme.colors.primary.main};
                
                font-size: 1rem;
                font-weight: bold;
            }

            img {
                transform: ${({ orderBy }) => (
        orderBy === 'asc' ? 'rotateX(180deg)' : 'rotateX(0deg)'
    )};

                transition: transform .2s ease-in;
            }
        }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.colors.white.lightner};

    padding: 1rem;

    border-radius: .25rem;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, .04);

    & + & {
        margin-top: 1rem;
    }

    div.info {

        div.contact-info {
            display: flex;
            align-items: center;

            strong {
                font-size: 1rem;
                color: ${({ theme }) => theme.colors.gray[900]}
            }

            small {
                background: ${({ theme }) => theme.colors.white.medium};
                color: ${({ theme }) => theme.colors.primary.main};

                font-size: .75rem;
                font-weight: bold;
                text-transform: uppercase;

                padding: .25rem;
                margin-left: .5rem;

                border-radius: .25rem;
            }
        }

        span {
            display: block;
            font-size: .875rem;

            color: ${({ theme }) => theme.colors.gray[200]}
        }
    }

    div.actions {
        display: flex;
        align-items: center;

        button {
            margin-left: .5rem;
        }
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;

    margin-top: 16px;

    .details {
        margin-left: 24px;

        strong {
            display: block;
            
            font-size: 22px;
            color: ${({ theme }) => theme.colors.danger.main};

            margin-bottom: 8px;
        }
    }
`;
