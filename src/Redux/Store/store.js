import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { studyReducer } from "../Reducers/Study.reducer";

const middleWwares = [logger];

const rootReducer = combineReducers({ study: studyReducer });

export const store = createStore(rootReducer, applyMiddleware(...middleWwares));
