import React, { useState } from "react";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { defaultSettings, settingsFormData } from "../helpers/consts";
import { doSomething } from "../helpers/functions";
import { ThunkCreator } from "../store";

const Settings = () => {
    const [cards, setCards] = useState(defaultSettings.cards);
    const [placeholder, setPlaceholder] = useState(defaultSettings.placeholder);
    const [difficulty, setDifficulty] = useState(defaultSettings.difficulty);
    const dispatch = useDispatch();

    const handlers = {
        cards: setCards,
        placeholder: setPlaceholder,
        difficulty: setDifficulty,
    };

    const submitHandler = (evt: FormEvent) => {
        evt.preventDefault();
        const settings = { cards, placeholder, difficulty };
        dispatch(ThunkCreator.updateUser(settings));
    };
    return (
        <section className="settings">
            <h1 className="hidden">Settings</h1>
            <div className="settings__form">
                <form className="settings-form" onSubmit={submitHandler}>
                    {settingsFormData.map(({ label, slug, options }) => (
                        <label className="settings-form__label" key={slug}>
                            <span className="settings-form__label-text">
                                {label}
                            </span>
                            <select
                                name={slug}
                                id={slug}
                                className="settings-form__select"
                                onChange={(evt) =>
                                    doSomething({
                                        obj: handlers,
                                        property: slug!,
                                    })(evt.target.value)
                                }
                            >
                                {options.map(({ label, value }) => (
                                    <option value={value} key={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    ))}
                    <button className="button button--primary settings-form__button">
                        Save
                    </button>
                    <span className="form-settings__suc hidden">
                        Your data has been successfully saved
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Settings;
