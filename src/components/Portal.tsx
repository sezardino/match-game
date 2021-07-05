import React from "react";
import ReactDOM from "react-dom";

type PortalProps = {
    children: JSX.Element;
};

const Portal = ({ children }: PortalProps) => {
    const container = document.querySelector("#popup-root");

    return ReactDOM.createPortal(children, container!);
};

export default Portal;
