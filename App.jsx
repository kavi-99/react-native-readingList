import * as React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/createStore';
import { AppNavigator } from './AppNavigator'
import {useEffect} from 'react';

function App() {

  //check number of times app is rendering
  useEffect(() => {
      console.log('App rendered');
    });

  return (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <AppNavigator />
    </PersistGate>
  </Provider>
  );
}

export default App;
