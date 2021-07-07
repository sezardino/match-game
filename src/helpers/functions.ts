import { doSomethingArgs } from "../interfaces";
import { DIFFICULTY } from "./consts";

export const firstLetterUppercase = (string: string) =>
    string[0].toUpperCase() + string.substring(1);

export const doSomething = ({ obj, property }: doSomethingArgs) =>
    obj[property];

export const getTime = (time: number): Array<number> => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return [sec, min];
};

export const formatTime = (time: number): { sec: string; min: string } => {
    const [sec, min] = getTime(time).map((number) => {
        const stringNumber = number.toString();
        return stringNumber.length > 1 ? stringNumber : "0" + stringNumber;
    });
    return { min, sec };
};

const getRandNumInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * max + min);
};

const getMathArray = (maxLength: number) => {
    const workArr = Array(maxLength / 2).fill(null);
    workArr.map((_, index) => {
        let number;
        do {
            number = getRandNumInRange(1, 30);
        } while (workArr.includes(number));
        workArr[index] = number;
    });

    let finalArray = Array(maxLength).fill(null);
    workArr.map((item) => {
        let index,
            count = 0;
        do {
            index = getRandNumInRange(0, finalArray.length);
            if (finalArray[index] === null) {
                finalArray[index] = { value: item, guessed: false };
                count++;
            }
        } while (finalArray[index] !== null && count < 2);
    });
    return finalArray;
};

export const generatePolygonData = (difficulty: string) => {
    const cardsLength = DIFFICULTY[difficulty];
    const arr = getMathArray(cardsLength);
    return arr;
};
