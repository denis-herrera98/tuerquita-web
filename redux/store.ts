import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { summonerReducer } from "./summoner/summonerReducer";
import { chatReducer } from "./chat/chatReducer";

const reducers = combineReducers({
  summonerReducer,
  chatReducer,
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
