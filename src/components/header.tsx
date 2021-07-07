import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/svg/logo.svg";
import about from "../assets/svg/about.svg";
import score from "../assets/svg/best.svg";
import settings from "../assets/svg/settings.svg";
import AddUserForm from "./addUserForm";
import { useDispatch, useSelector } from "react-redux";
import Button from "./button";
import { ActionCreator } from "../store";

const Header = () => {
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(ActionCreator.START_GAME(user.settings.difficulty));
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="game logotype" className="logo" />
            </div>
            <div className="header__nav">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink
                                to="/"
                                exact
                                className="nav__link"
                                activeClassName="nav__link--current"
                            >
                                <img
                                    className="nav__link-img"
                                    src={about}
                                    alt="about"
                                />
                                <span className="nav__link-text">
                                    About Game
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="score"
                                className="nav__link"
                                activeClassName="nav__link--current"
                            >
                                <img
                                    className="nav__link-img"
                                    src={score}
                                    alt="score"
                                />
                                <span className="nav__link-text">
                                    Best Score
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                to="settings"
                                className="nav__link"
                                activeClassName="nav__link--current"
                            >
                                <img
                                    className="nav__link-img"
                                    src={settings}
                                    alt="settings"
                                />
                                <span className="nav__link-text">
                                    Game Settings
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__user">
                {!user.user && <AddUserForm />}
                {user.user && (
                    <Button
                        handler={startGameHandler}
                        extraClass="form__button form__submit button button--primary button--uppercase"
                    >
                        Start Game
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
