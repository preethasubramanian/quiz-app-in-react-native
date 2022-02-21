// import {createStore} from 'redux';
// import Reducers from './reducers';

// const Store = createStore(Reducers);

// export default Store;

import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/';
import thunk from 'redux-thunk';

export default function configureStore() {
  const store = createStore(appReducers, applyMiddleware(thunk));

 // const store = createStore(()=>[], {}, applyMiddleware(thunk));
  return store;
}
