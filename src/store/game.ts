import { initialTimer, MESSAGES } from "../helpers/consts";
import { generatePolygonData } from "../helpers/functions";
import { IAction, IGameState } from "../interfaces";

const incrementTimer = ({ time }: { time: number }) => {
    return time--;
};

const stopTimer = ({ id }: { id: number }) => {
    clearInterval(id);
};

const startGame = (state: IGameState, difficulty: string) => {
    const game = true;
    console.log(difficulty);
    const gamePolygon = generatePolygonData(difficulty);
    return { ...state, game, gamePolygon };
};

const endGame = (state: IGameState) => {
    const game = false;
    const message = MESSAGES.WIN;
    stopTimer(state.timer);
    return { ...state, game, message };
};

const initialState: IGameState = {
    game: false,
    gamePolygon: null,
    moves: [],
    guessed: [],
    timer: { id: null, time: initialTimer },
    message: "",
};

export const ActionType = {
    INCREMENT_TIMER: "INCREMENT_TIMER",
    STOP_TIMER: "STOP_TIMER",
    START_GAME: "START_GAME",
    END_GAME: "END_GAME",
    ADD_TO_LINE: "ADD_TO_LINE",
    SAVE_TIMER: "SAVE_TIMER",
};

export const ActionCreator = {
    INCREMENT_TIMER: () => ({ type: ActionType.INCREMENT_TIMER }),
    SAVE_TIMER: (payload: any) => ({ type: ActionType.SAVE_TIMER, payload }),
    STOP_TIMER: () => ({ type: ActionType.STOP_TIMER }),
    START_GAME: (payload: string) => ({ type: ActionType.START_GAME, payload }),
    END_GAME: () => ({ type: ActionType.END_GAME }),
    ADD_TO_LINE: () => ({ type: ActionType.ADD_TO_LINE }),
};

const reducer = (
    state: IGameState = initialState,
    { type, payload }: IAction
) => {
    switch (type) {
        case ActionType.SAVE_TIMER:
            const { timer } = state;
            const id = payload;
            return { ...state, timer: { ...timer, id } };
        case ActionType.INCREMENT_TIMER:
            return incrementTimer(state.timer);
        case ActionType.STOP_TIMER:
            return stopTimer(state.timer);
        case ActionType.START_GAME:
            return startGame(state, payload);
        case ActionType.END_GAME:
            return endGame(state);
        case ActionType.ADD_TO_LINE:
            console.log(1);
            return state;
        default:
            return state;
    }
};

export default reducer;
