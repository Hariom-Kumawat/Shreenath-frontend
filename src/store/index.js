import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import {saveState} from '../utility/localstorage'
// import { loadState,saveState } from "../utility/localstorage";    // close for warning only 
// import userReducers from "./reducers/userReducer";
import authReducer from "./reducers/userReducer";
import barIconReducer from "./reducers/barIconReducer";
import sortingReducer from "./reducers/sortingReducer";



// const persistedState = loadState();
const rootReducer = {
  // user: userReducers,
  user : authReducer,
  barIcon : barIconReducer,
  sorting : sortingReducer,
};
const mfunction = () => [thunk];

const store = configureStore({
  reducer: rootReducer,
  // preloadedState: persistedState,
  middleware: mfunction,
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
