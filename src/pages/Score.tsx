import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import { RootState } from "../store";
import { getUsers } from "../store/score";

const Score = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const list = useSelector((state: RootState) => state.score.users);
    useEffect(() => {
        setLoading(true);
        dispatch(getUsers());
        setLoading(false);
    }, []);
    console.log(list);
    return (
        <section className="shore">
            <h2 className="shore__title">Best players</h2>
            {loading && <Loader />}
            {!loading && list && (
                <ul className="shore__list">
                    {list.map(({ userId, userName, score }) => (
                        <li className="shore__item" key={userId}>
                            <div className="user-shore">
                                <div className="user-shore__wrapper">
                                    <p className="user-shore__name">
                                        {userName}
                                    </p>
                                </div>
                                <p className="user-shore__data">
                                    Score:
                                    <span className="user-shore__count">
                                        {score}
                                    </span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Score;
