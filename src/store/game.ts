import { createSlice } from "@reduxjs/toolkit";

interface state {
    game: Boolean;
}

const initialState: state = {
    game: false,
};

const game = createSlice({
    name: "game",
    initialState,
    reducers: {},
});

export default game.reducer;
