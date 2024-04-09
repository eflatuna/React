// import {createStore} from "redux";
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";
import { todoReducer } from "./todoReducer";

// export const store = createStore(counterReducer);
const rootReducer = combineReducer({
	count: counterReducer,
	todo: todoReducer,
});
export const store = createStore(rootReducer);
