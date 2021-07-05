import firebase from "firebase/app";

interface FirebaseInterface {
    register: (email: string, password: string) => void;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

class Firebase implements FirebaseInterface {
    async register(email: string, password: string) {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
        } catch (error) {
            throw error;
        }
    }

    async signIn(email: string, password: string) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            throw error;
        }
    }

    async signOut() {
        await firebase.auth().signOut();
    }

    async createUser(userName: string) {
        const userId = firebase.database().ref("/users").push().key;
        const userData = {
            userName: userName,
            userId: userId!,
            score: 0,
        };
        await firebase.database().ref(`/users/${userId}`).set(userData);

        return userData;
    }

    async updateScore(userId: string, score: number) {
        await firebase.database().ref(`/users/${userId}`).update(score);
    }
}

export default new Firebase();
