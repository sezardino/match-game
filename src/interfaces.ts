export interface IUser {
    userName: string;
    userId: string;
    score: number;
}

export interface ISettings {
    cards: string;
    placeholder: string;
    difficulty: string;
}

export interface IUserState {
    user: IUser | null;
    settings: ISettings;
}

export interface createUserArgs {
    userName: string;
    settings?: ISettings;
}

interface obj {
    [key: string]: any;
}

export interface doSomethingArgs {
    obj: obj;
    property: keyof obj;
}

export interface IAction {
    type: string;
    payload: any;
}

export interface IGameState {
    game: Boolean;
    gamePolygon: any[] | null;
    moves: any;
    guessed: any;
    timer: { id: any | null; time: number };
    message: string;
}

export interface IUser {
    userName: string;
    userId: string;
    score: number;
}

export interface IScoreState {
    users: Array<IUser> | null;
}
