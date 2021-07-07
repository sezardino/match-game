import React from "react";
import { formatTime } from "../helpers/functions";

const Timer = ({ time }: { time: number }) => {
    const { min, sec } = formatTime(time);

    return (
        <div className="timer">
            <p className="timer__count">
                <span className="timer__minutes">{min}</span>:
                <span className="timer__seconds">{sec}</span>
            </p>
        </div>
    );
};

export default Timer;
