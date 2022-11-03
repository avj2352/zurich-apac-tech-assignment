import React from 'react';
import styled from '@emotion/styled';


/**
 * Styled components that are reusable
 * > NOTE: Consists of purely styled components
 */
export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
p {
    text-align: center;
    width: 250px;
    flex-grow: 2;
    margin: 4px 10px 0px;
}
button {
    max-width: 250px;
    flex-grow: 1;
    margin: 4px 2px;
}
* svg {
    font-size: 1.5rem;
}

@media (max-width: 340px) {
    flex-direction: column;
}
`;