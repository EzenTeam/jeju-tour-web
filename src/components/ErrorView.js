/**
 * @Filename: ErrorView.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 에러 화면 컴포넌트
 */
import React from 'react';

const ErrorView = ({error}) => {
    return (
        <div>
            <h1>Oops~~!! {error.code} Error</h1>
            <hr />
            <p> {error.message} </p>
        </div>
    );
};

export default React.memo(ErrorView);