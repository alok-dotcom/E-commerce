import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "./reducer/users";
import { composeWithDevTools } from "redux-devtools-extension";
const loggerMiddleware = createLogger();

const initialState = { products: [] };

const store = createStore(
    userReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
