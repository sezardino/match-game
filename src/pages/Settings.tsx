import React from "react";

const Settings = () => {
    return (
        <section className="settings">
            <h1 className="hidden">Settings</h1>
            <div className="settings__form">
                <form className="settings-form">
                    <label className="settings-form__label">
                        <span className="settings-form__label-text">
                            Game Cards
                        </span>
                        <select
                            name="cards"
                            id="cards"
                            className="settings-form__select"
                        >
                            <option value="bear">Bear</option>
                            <option value="dog">Dog</option>
                            <option value="nature">Nature</option>
                        </select>
                    </label>
                    <label className="settings-form__label">
                        <span className="settings-form__label-text">
                            Card Placeholder
                        </span>
                        <select
                            name="placeholders"
                            id="placeholders"
                            className="settings-form__select"
                        >
                            <option value="canyon">Canyon</option>
                            <option value="city">City</option>
                            <option value="forest">Forest</option>
                            <option value="mounts">Mounts</option>
                            <option value="shine">Shine</option>
                        </select>
                    </label>
                    <label className="settings-form__label">
                        <span className="settings-form__label-text">
                            Difficulty
                        </span>
                        <select
                            name="difficulty"
                            id="difficulty"
                            className="settings-form__select"
                        >
                            <option value="easy">Easy</option>
                            <option value="normal">Normal</option>
                            <option value="insane">Insane</option>
                            <option value="god">God!</option>
                        </select>
                    </label>
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
