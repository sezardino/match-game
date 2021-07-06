import { doSomethingArgs } from "../interfaces";

export const firstLetterUppercase = (string: string) =>
    string[0].toUpperCase() + string.substring(1);

export const doSomething = ({ obj, property }: doSomethingArgs) =>
    obj[property];
