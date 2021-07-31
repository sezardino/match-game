export const defaultSettings = {
    cards: "bear",
    placeholder: "canyon",
    difficulty: "easy",
};

// export const settingsFormData = {
//     cards: ["bear", "dog", "nature"],
//     placeholder: ["canyon", "city", "forest", "mounts", "shine"],
//     difficulty: ["easy", "normal", "insane", "god"],
// };

export const settingsFormData = [
    {
        label: "Game Cards",
        slug: "cards",
        options: [
            { label: "Bear", value: "bear" },
            { label: "Dog", value: "dog" },
            { label: "Nature", value: "nature" },
        ],
    },
    {
        label: "Card Placeholder",
        slug: "placeholder",
        options: [
            { label: "Canyon", value: "canyon" },
            { label: "City", value: "city" },
            { label: "Forest", value: "forest" },
            { label: "Mounts", value: "mounts" },
            { label: "Shine", value: "shine" },
        ],
    },
    {
        label: "Difficulty",
        slug: "difficulty",
        options: [
            { label: "Easy", value: "easy" },
            { label: "Normal", value: "normal" },
            { label: "Insane", value: "insane" },
            { label: "God!", value: "god" },
        ],
    },
];

export const DIFFICULTY: { [key: string]: number } = {
    easy: 16,
    normal: 36,
    insane: 48,
    god: 60,
};

export const initialTimer = 360;

export const MESSAGES = {
    LOSE: "you are lose",
    WIN: "you are won",
};

export const points: { [key: string]: number } = {
    easy: 2,
    normal: 3,
    insane: 4,
    god: 5,
};
