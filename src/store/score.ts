import Firebase from "../api/firebase";
import { IAction, IScoreState, IUser } from "../interfaces";

const initialState: IScoreState = {
    users: null,
};

export const ActionCreator = {
    GET_USERS: (data: Array<IUser>) => ({
        type: ActionType.GET_USERS,
        payload: data,
    }),
};

export const ThunkCreator = {
    getUsers: () => async (dispatch: any) => {
        const users = await Firebase.getUsers();
        dispatch(ActionCreator.GET_USERS(users as Array<IUser>));
    },
};

export const ActionType = {
    GET_USERS: "GET_USERS",
};

const reducer = (
    state: IScoreState = initialState,
    { type, payload }: IAction
) => {
    switch (type) {
        case ActionType.GET_USERS:
            const users = payload;
            return { ...state, users };
        default:
            return state;
    }
};

export default reducer;
