import {createAction} from "@reduxjs/toolkit";
import {ACTION, ACTION_WITH_WINDOW} from "./constants";

export const action = createAction(ACTION)
export const actionWithWindow = createAction(ACTION_WITH_WINDOW)