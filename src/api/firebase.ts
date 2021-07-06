import firebase from "firebase/app";
import { createUserArgs, ISettings } from "../interfaces";

interface FirebaseInterface {}

class Firebase implements FirebaseInterface {
    async createUser({ userName, settings }: createUserArgs) {
        const userId = firebase.database().ref("/users").push().key;
        const userData = {
            userName: userName,
            userId: userId!,
            score: 0,
            settings,
        };
        await firebase.database().ref(`/users/${userId}`).set(userData);

        return userData;
    }

    async updateScore(userId: string, score: number) {
        await firebase.database().ref(`/users/${userId}`).update(score);
    }

    async getUsers() {
        const data = await firebase.database().ref("/users/").once("value");

        return this._transformFirebaseData(data.val() || {});
    }

    async saveSettings(userId: string, settings: ISettings) {
        await firebase
            .database()
            .ref(`/users/${userId}/settings/`)
            .update(settings);
    }

    _transformFirebaseData(data: any) {
        return Object.values(data);
    }
}

export default new Firebase();
