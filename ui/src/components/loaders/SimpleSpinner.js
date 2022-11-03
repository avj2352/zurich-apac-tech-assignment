import React from "react";
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
    /* border: 1px solid red;     */
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    overflow: hidden;

    svg {
        width: 100px;
        height: 100px;        
}
`;

export function SimpleSpinner ({isLoading}) {    
    const content = Boolean(isLoading) ? <ContainerStyled><svg
        xmlns="http://www.w3.org/2000/svg"        
        version="1.1"        
        xmlSpace="preserve">
        <circle cx="6" cy="20" r="6" fill="#1ab3e6">
            <animateTransform
                attributeName="transform"
                begin="0.1"
                dur="1s"
                repeatCount="indefinite"
                type="translate"
                values="0 15 ; 0 -15; 0 15"></animateTransform>
        </circle>
        <circle cx="30" cy="20" r="6" fill="#1ab3e6">
            <animateTransform
                attributeName="transform"
                begin="0.2"
                dur="1s"
                repeatCount="indefinite"
                type="translate"
                values="0 10 ; 0 -10; 0 10"></animateTransform>
        </circle>
        <circle cx="54" cy="20" r="6" fill="#1ab3e6">
            <animateTransform
                attributeName="transform"
                begin="0.3"
                dur="1s"
                repeatCount="indefinite"
                type="translate"
                values="0 5 ; 0 -5; 0 5"></animateTransform>
        </circle>
    </svg></ContainerStyled> : <React.Fragment/>;
    return (content);
}

SimpleSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
};