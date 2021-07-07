import Firebase from "../api/firebase";
import { initialTimer, MESSAGES, points } from "../helpers/consts";
import { generatePolygonData } from "../helpers/functions";
import { IAction, IGameState } from "../interfaces";

const incrementTimer = (state: IGameState) => {
    const time = state.timer.time - 1;
    return { ...state, timer: { ...state.timer, time } };
};

const stopTimer = ({ timer }: IGameState) => {
    clearInterval(timer.id);
};

const startGame = (state: IGameState, difficulty: string) => {
    const game = true;
    const gamePolygon = generatePolygonData(difficulty);
    return { ...state, game, gamePolygon, difficulty };
};

const endGame = () => {
    return initialState;
};

const noTime = (state: IGameState) => {
    stopTimer(state);
    return { ...state, message: MESSAGES.LOSE };
};

const addToLine = (state: IGameState, value: number) => {
    let { moves, guessed, gamePolygon } = state;
    let guessedCards: any;
    const move = moves.find((item: any) => item.length === 1);
    if (!move) {
        moves = [...moves, [value]];
    } else if (move) {
        moves = [
            ...moves.filter((item: Array<number>) => item.length !== 1),
            [...move, value],
        ];
    }

    if (move) {
        const [first, second] = moves[moves.length - 1];
        if (first === second) {
            guessedCards = gamePolygon!
                .filter((item) => item.value === value)
                .map((item) => (item.guessed = true));
            gamePolygon = [...gamePolygon!, ...guessedCards];
            guessed = [...guessed!, value];
        }
    }

    if (!gamePolygon!.find((item) => item.guessed === false)) {
        stopTimer(state);
        return {
            ...state,
            message: MESSAGES.WIN,
        };
    }
    return {
        ...state,
        moves,
        gamePolygon: [...gamePolygon!],
        guessed,
    };
};

const initialState: IGameState = {
    difficulty: "",
    game: false,
    gamePolygon: null,
    moves: [],
    guessed: [],
    timer: { id: null, time: initialTimer },
    message: "",
};

export const ThunkCreator = {
    END_GAME: () => async (dispatch: any, getState: any) => {
        const { game, user } = getState((state: IGameState) => state);
        const score = game.guessed * points[game.difficulty];
        await Firebase.updateScore(user.user.userId, score);
        dispatch(ActionCreator.END_GAME());
    },
};

export const ActionType = {
    INCREMENT_TIMER: "INCREMENT_TIMER",
    NO_TIME: "NO_TIME",
    START_GAME: "START_GAME",
    END_GAME: "END_GAME",
    ADD_TO_LINE: "ADD_TO_LINE",
    SAVE_TIMER: "SAVE_TIMER",
};

export const ActionCreator = {
    INCREMENT_TIMER: () => ({ type: ActionType.INCREMENT_TIMER }),
    SAVE_TIMER: (payload: any) => ({ type: ActionType.SAVE_TIMER, payload }),
    NO_TIME: () => ({ type: ActionType.NO_TIME }),
    START_GAME: (payload: string) => ({ type: ActionType.START_GAME, payload }),
    END_GAME: () => ({ type: ActionType.END_GAME }),
    ADD_TO_LINE: (payload: number) => ({
        type: ActionType.ADD_TO_LINE,
        payload,
    }),
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
            return incrementTimer(state);
        case ActionType.NO_TIME:
            return noTime(state);
        case ActionType.START_GAME:
            return startGame(state, payload);
        case ActionType.END_GAME:
            return endGame();
        case ActionType.ADD_TO_LINE:
            return addToLine(state, payload);
        default:
            return state;
    }
};

export default reducer;
