import React from "react";

const Home = () => {
    return (
        <section className="game-info">
            <h2 className="game-info__title">How to play?</h2>
            <ol className="game-info__list">
                <li className="game-info__list-item">
                    <div className="game-info__item-wrapper">
                        <p className="game-info__item-text">Add new user</p>
                    </div>
                    <div className="game-info__img"></div>
                </li>
                <li className="game-info__list-item">
                    <div className="game-info__item-wrapper">
                        <p className="game-info__item-text">
                            If you won't Configure your game settings
                        </p>
                    </div>
                    <div className="game-info__img"></div>
                </li>
                <li className="game-info__list-item">
                    <div className="game-info__item-wrapper">
                        <p className="game-info__item-text">
                            Start you new game! Remember card positions and
                            match it before times up.
                        </p>
                    </div>
                    <div className="game-info__img"></div>
                </li>
            </ol>
        </section>
    );
};

export default Home;
