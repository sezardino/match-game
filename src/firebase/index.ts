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
}

export default new Firebase();
