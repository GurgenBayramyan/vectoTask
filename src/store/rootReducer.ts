import { combineReducers } from "redux";
import movieSlice from "./features/movieSlice";
export const rootReducer = combineReducers({
    [movieSlice.name]:movieSlice.reducer
})