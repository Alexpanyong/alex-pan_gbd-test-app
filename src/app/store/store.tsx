import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import composedReducer from "./reducers/reducers";
import { pageNamesObj } from "../shared/config/pageNames";
import rootSaga from "./sagas";

const initialState: any = {
  app: {
    currentPage: pageNamesObj.Home,
  },
  data: {},
};

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, composedReducer);

export const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
