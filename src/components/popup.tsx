import React, { useState } from "react";
import Button from "./button";
import Portal from "./Portal";

type PopupProps = {
    children: JSX.Element;
    triggerLabel: string;
};

const Popup = ({ children, triggerLabel }: PopupProps) => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    };
    const closeHandler = () => {
        setOpen(false);
    };
    return (
        <>
            <Button extraClass="button--primary" handler={openHandler}>
                {triggerLabel}
            </Button>
            <Portal>
                <div className={`popup ${open ? "popup--open" : ""}`}>
                    <div
                        className="popup__overflow"
                        onClick={closeHandler}
                    ></div>
                    <div className="popup__inner">{children}</div>
                </div>
            </Portal>
        </>
    );
};

export default Popup;
