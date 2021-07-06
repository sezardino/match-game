import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import score from "./score";
import game from "./game";

const store = configureStore({
    reducer: {
        user,
        score,
        game,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
