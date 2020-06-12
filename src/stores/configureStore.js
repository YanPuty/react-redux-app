import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools  } from "redux-devtools-extension";

// Reducers
import rootReducer from "../reducers";

const configureStore = (initailState) => {
  const middlewares = [];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  middlewares.push(thunk);
  const store = createStore(
    rootReducer,
    initailState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;