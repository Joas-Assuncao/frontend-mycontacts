import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;

    bottom: 48px;
    left: 50%;
    transition: translateX(-50%);
    -moz-transform: translateX(-50%);

    z-index: 1;
`;
