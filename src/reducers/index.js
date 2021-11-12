import { combineReducers } from "redux";
import userReducer from "./userReducer";
import wandReducer from "./wandReducer"; 
import loginReducer from "./loginReducer";

const rootReducer = combineReducers(
    {
        user:userReducer,
        wand:wandReducer,
        login:loginReducer
    }
)
export default rootReducer