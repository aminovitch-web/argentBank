import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import { userProfileReducer } from './reducers/userProfileSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'userProfile'], 
};

const rootReducer = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);
