import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from 'redux-firestore';

import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from 'react-redux-firebase';

import rootReducer from './store/reducers/rootReducer';

import fbconfig from './components/config/fbconfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbconfig, { attachAuthIsReady: true })
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions',
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
