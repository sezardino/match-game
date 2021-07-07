import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkCreator } from "../store";
import Popup from "./popup";

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value);
    };

    const submitHandler = async (evt: FormEvent) => {
        evt.preventDefault();
        const args = { userName: name };

        await dispatch(ThunkCreator.createUser(args));
        setName("");
    };

    return (
        <>
            <Popup triggerLabel="Add User">
                <section className="register-user">
                    <h2 className="register-user__title">Add User</h2>
                    <p className="register-user__paragraph">
                        If you wont to save your settings and play the game, you
                        must enter your name
                    </p>
                    <form
                        className="register-user__form form form--register"
                        onSubmit={submitHandler}
                    >
                        <label className="form__label">
                            <span className="form__label-text">Name</span>
                            <input
                                required
                                type="text"
                                name="name"
                                value={name}
                                onChange={changeHandler}
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
