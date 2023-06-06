import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducerFunction from './reducerFunctions.jsx'


// Redux-persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, reducerFunction);

// Create the Redux store
const store = createStore(persistedReducer);

// Create the persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };

//creating store
//const store = createStore(reducerFunction);
