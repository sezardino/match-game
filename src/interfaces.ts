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
