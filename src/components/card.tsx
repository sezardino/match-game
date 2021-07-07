import React from "react";
import { useEffect } from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ICard } from "../interfaces";

const Card = (props: {
    card: string;
    placeholder: string;
    data: ICard;
    handler: (value: number) => void;
}) => {
    const {
        card,
        placeholder,
        data: { value, guessed },
        handler,
    } = props;
    const [open, setOpen] = useState(false);

    const clickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        setOpen(true);
        handler(value);
    };

    useEffect(() => {
        let intervalId: any;
        if (open) {
            intervalId = setInterval(() => setOpen(false), 3000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [open]);
    // useEffect(() => {
    //     const guess = guessed.find((item: number) => item === value);
    //     if (open && !guess) {
    //         setInterval(() => setOpen(false), 3000);
    //     }
    // }, [open]);

    return (
        <button
            className={`play-card play-card--${placeholder} ${
                open ? "play-card--open" : ""
            } ${guessed ? "play-card--valid play-card--open" : ""}`}
            onClick={clickHandler}
        >
            {value}
            <div className="play-card__image-wrapper">
                <img
                    src={`../cards/${card}/${value}.svg`}
                    alt="card"
                    className="play-card__image"
                />
            </div>
        </button>
    );
};

export default Card;
