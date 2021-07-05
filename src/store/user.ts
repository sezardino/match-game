import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Firebase from "../firebase";

interface state {
    user: {
        userName: string;
        userId: string;
        score: number;
    } | null;
}

const createUser = createAsyncThunk(
    "user/createUser",
    async (userName: string) => {
        const user = await Firebase.createUser(userName);
        console.log(user);
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

const initialState: state = {
    user: null,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(updateScore.fulfilled, (state, action) => {
            state.user!.score = action.payload;
        });
    },
});

export { createUser };

export default user.reducer;
