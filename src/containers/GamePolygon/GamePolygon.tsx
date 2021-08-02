import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICard } from "../../interfaces";
import { ActionCreator, ThunkCreator } from "../../store";

import Card from "../../components/card";
import Portal from "../../components/Portal";
import Timer from "../../components/timer";

const GamePolygon = () => {
    const { timer, polygon, settings, message } = useSelector(
        ({ game, user }: any) => ({
            timer: game.timer,
            polygon: game.gamePolygon,
            settings: user.settings,
            message: game.message,
        })
    );
    const dispatch = useDispatch();
    useEffect(() => {
        const timerId = setInterval(() => {
            dispatch(ActionCreator.INCREMENT_TIMER());
        }, 1000);
        dispatch(ActionCreator.SAVE_TIMER(timerId));
        return () => {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (timer.time <= 0) {
            dispatch(ActionCreator.NO_TIME());
            // dispatch(ActionCreator.END_GAME());
        }
    }, [timer]);

    const cardClickHandler = (value: number) => {
        dispatch(ActionCreator.ADD_TO_LINE(value));
    };

    const closeHandler = () => {
        dispatch(ThunkCreator.END_GAME());
    };

    return (
        <>
            <section className="game">
                <div className="game__timer">
                    <Timer time={timer.time} />
                </div>
                <div
                    className={`game__inner game__inner--${settings.difficulty}`}
                >
                    {polygon!.map((data: ICard, index: number) => (
                        <Card
                            card={settings.cards}
                            placeholder={settings.placeholder}
                            data={data}
                            handler={cardClickHandler}
                            key={data + " " + index}
                        />
                    ))}
                </div>
            </section>
            {message && (
                <Portal>
                    <div className={`popup popup--open`}>
                        <div
                            className="popup__overflow"
                            onClick={closeHandler}
                        ></div>
                        <div className="popup__inner">{message}</div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default GamePolygon;
