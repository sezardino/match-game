import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import { ActionCreator as gameCreator, ActionType as gameType } from "./game";
import {
    ActionCreator as scoreCreator,
    ActionType as scoreType,
    ThunkCreator as scoreThunk,
} from "./score";
import {
    ActionCreator as userCreator,
    ActionType as userType,
    ThunkCreator as userThunk,
} from "./user";

import user from "./user";
import score from "./score";
import game from "./game";

export const ActionType = {
    ...gameType,
    ...scoreType,
    ...userType,
};

export const ActionCreator = {
    ...gameCreator,
    ...scoreCreator,
    ...userCreator,
};

export const ThunkCreator = {
    ...scoreThunk,
    ...userThunk,
};

const reducer = combineReducers({ user, score, game });
const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
