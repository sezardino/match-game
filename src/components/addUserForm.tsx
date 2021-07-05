import React, { useState } from "react";
import Button from "./button";
import Popup from "./popup";
import Portal from "./Portal";

const Register = () => {
    return (
        <>
            <Popup triggerLabel="Add User">
                <section className="register-user">
                    <h2 className="register-user__title">Add User</h2>
                    <p className="register-user__paragraph">
                        If you wont to save your settings and play the game, you
                        must enter your name
                    </p>
                    <form className="register-user__form form form--register">
                        <label className="form__label">
                            <span className="form__label-text">Name</span>
                            <input
                                required
                                type="text"
                                name="name"
                                className="form__input"
                            />
                        </label>
                        <footer className="form__footer">
                            <button className="form__button form__submit button button--add button--uppercase">
                                Add user
                            </button>
                        </footer>
                    </form>
                </section>
            </Popup>
        </>
    );
};

export default Register;
