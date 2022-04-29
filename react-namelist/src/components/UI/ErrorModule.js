import React from 'react';
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styled from "./ErrorModule.module.css"


const Backdrop = props => {
    return <div className={styled.backdrop} onClick={props.onErrorHandler}/>
}

const ModalOverlay = props => {
    return (
        <Card className={styled.modal}>
            <header className={styled.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styled.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styled.actions}>
                <Button onClick={props.onErrorHandler}>Okay</Button>
            </footer>
        </Card>
    )
}


const ErrorModule = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onErrorHandler={props.onErrorHandler}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onErrorHandler={props.onErrorHandler}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};
export default ErrorModule;
