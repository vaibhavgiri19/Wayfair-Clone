import { combineReducers, legacy_createStore } from "redux";
import { privateRouteReducer } from "./Reducers/privateRouteReducer";
import { authReducer } from "./Reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    authentication: privateRouteReducer,
});

export const store = legacy_createStore(rootReducer);
