import React, { MouseEvent } from "react";

type ButtonProps = {
    extraClass?: string;
    children: string;
    handler?: () => void;
};

const Button = ({ extraClass, children, handler }: ButtonProps) => {
    const clickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        handler!();
    };

    return (
        <button className={`button ${extraClass}`} onClick={clickHandler}>
            {children}
        </button>
    );
};

export default Button;
