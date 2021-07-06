import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Firebase from "../api/firebase";

type user = {
    userName: string;
    userId: string;
    score: number;
};

interface state {
    users: Array<user> | null;
}

const getUsers = createAsyncThunk("score/getUsers", async () => {
    const users = await Firebase.getUsers();
    return users as Array<user>;
});

const initialState: state = {
    users: null,
};

const score = createSlice({
    name: "score",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export { getUsers };

export default score.reducer;
