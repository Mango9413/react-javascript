import React from 'react';
import Card from "./Card";
import Button from "./Button";
import styled from "./ErrorModule.module.css"

const ErrorModule = (props) => {
    return (
        <div>
            <div className={styled.backdrop} onClick={props.onErrorHandler}>
                <Card className={styled.modal}>
                    <header className={styled.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styled.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styled.actions}>
                        <Button>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};
export default ErrorModule;
