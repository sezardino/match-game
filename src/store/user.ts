import Firebase from "../api/firebase";
import { defaultSettings } from "../helpers/consts";
import {
    createUserArgs,
    IAction,
    ISettings,
    IUser,
    IUserState,
} from "../interfaces";

export const ActionType = {
    CREATE_USER: "CREATE_USER",
    UPDATE_SCORE: "UPDATE_SCORE",
    UPDATE_USER: "UPDATE_USER",
};

export const ActionCreator = {
    CREATE_USER: (data: IUser) => ({
        type: ActionType.CREATE_USER,
        payload: data,
    }),
    UPDATE_SCORE: (data: any) => ({
        type: ActionType.UPDATE_SCORE,
        payload: data,
    }),
    UPDATE_USER: (data: any) => ({
        type: ActionType.UPDATE_USER,
        payload: data,
    }),
};

export const ThunkCreator = {
    createUser:
        ({ userName }: createUserArgs) =>
        async (dispatch: any, getState: any) => {
            const {
                user: { settings },
            } = getState();
            const data = await Firebase.createUser({ userName, settings });
            dispatch(ActionCreator.CREATE_USER(data));
        },
    updateScore:
        ({ userId, score }: { userId: string; score: number }) =>
        async (dispatch: any) => {
            const data = await Firebase.updateScore(userId, score);
            dispatch(ActionCreator.UPDATE_SCORE(data));
        },
    updateUser:
        (settings: ISettings) => async (dispatch: any, getState: any) => {
            const { user } = getState();
            if (user.user) {
                const { userId } = user.user;
                await Firebase.saveSettings(userId, settings);
            }
            dispatch(ActionCreator.UPDATE_USER(settings));
        },
};

const initialState: IUserState = {
    user: null,
    settings: defaultSettings,
};

const reducer = (
    state: IUserState = initialState,
    { type, payload }: IAction
) => {
    let user;
    switch (type) {
        case ActionType.CREATE_USER:
            user = payload;
            return { ...state, user };
        case ActionType.UPDATE_SCORE:
            const score = payload;
            return { ...state, user: { ...state.user, score } };
        case ActionType.UPDATE_USER:
            const settings = payload;
            user = state.user;
            if (user) {
                return { ...state, user: { ...user, ...settings } };
            } else {
                return { ...state, settings };
            }
        default:
            return { ...state };
    }
};

export default reducer;
