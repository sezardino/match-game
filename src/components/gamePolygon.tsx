import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../store";

import Card from "./card";
import Timer from "./timer";

const GamePolygon = () => {
    const { timer, polygon, settings } = useSelector(({ game, user }: any) => ({
        timer: game.timer,
        polygon: game.gamePolygon,
        settings: user.settings,
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        const timerId = setInterval(() => {
            dispatch(ActionCreator.INCREMENT_TIMER);
        }, 1000);
        dispatch(ActionCreator.SAVE_TIMER(timerId));
    }, []);

    useEffect(() => {
        if (timer.time <= 0) {
            dispatch(ActionCreator.STOP_TIMER());
            dispatch(ActionCreator.END_GAME());
        }
    }, [timer]);

    const cardClickHandler = (value: number) => {
        // dispatch(addToLine(value));
    };

    return (
        <section className="game">
            <div className="game__timer">
                <Timer time={timer.time} />
            </div>
            <div className={`game__inner game__inner--${settings.difficulty}`}>
                {polygon!.map((data: any, index: number) => (
                    <Card
                        card={settings.cards}
                        placeholder={settings.placeholder}
                        value={data as number}
                        handler={cardClickHandler}
                        key={data + " " + index}
                    />
                ))}
            </div>
        </section>
    );
};

export default GamePolygon;
