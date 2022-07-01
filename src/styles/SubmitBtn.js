import React from 'react';
import styled from 'styled-components';

const SubmitBtnContainer = styled.button`
    width: 70px;
    height: 30px;
    background-color: var(--blue);
    border-radius: 5px;
    margin: 5px;
    color: white;
`;

const SubmitBtn = ({children, onClickFun}) => {
    return (
        <SubmitBtnContainer onClick={onClickFun}>
            {children}
        </SubmitBtnContainer>
    );
};

export default SubmitBtn;