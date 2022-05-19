import {createReducer} from "@reduxjs/toolkit";
import {ACTION, ACTION_WITH_WINDOW} from "./constants";

export default createReducer({[ACTION]: 0, [ACTION_WITH_WINDOW]: 0}, (builder) => {
    builder.addCase(ACTION, (state) => {
        state[ACTION]++;
    })
    builder.addCase(ACTION_WITH_WINDOW, (state) => {
        state[ACTION_WITH_WINDOW]++;
    })
})