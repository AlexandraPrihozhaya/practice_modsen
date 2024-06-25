import {configureStore, combineReducers} from '@reduxjs/toolkit';
import geoObjects from "./reducers/geoObjects";
import userSlice from './reducers/userSlice';

const rootReducer = combineReducers({
    geoObjectsReducer: geoObjects,
    userReducer: userSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];