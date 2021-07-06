import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import Firebase from "../api/firebase";
import { defaultSettings } from "../helpers/consts";
import { createUserArgs, ISettings, IUserState } from "../interfaces";

const createUser = createAsyncThunk(
    "user/createUser",
    async ({ userName }: createUserArgs, { getState }) => {
        const {
            user: { settings },
        } = getState() as RootState;
        const user = await Firebase.createUser({ userName, settings });
        return user;
    }
);

const updateScore = createAsyncThunk(
    "user/updateScore",
    async ({ userId, score }: { userId: string; score: number }) => {
        await Firebase.updateScore(userId, score);
        return score;
    }
);

const updateUser = createAsyncThunk(
    "user/updateSettings",
    async (settings: ISettings, { getState }) => {
        const { user } = getState() as RootState;
        if (user.user) {
            const { userId } = user.user;
            await Firebase.saveSettings(userId, settings);
        }
        return settings;
    }
);

const initialState: IUserState = {
    user: null,
    settings: defaultSettings,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveSettings: (state, action) => {
            state.settings = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(updateScore.fulfilled, (state, action) => {
            state.user!.score = action.payload;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
            state.settings = action.payload;
        });
    },
});

export { createUser, updateUser };
export const { saveSettings } = user.actions;
export default user.reducer;
