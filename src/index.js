import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore, compose} from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


let storeTodos={
    activeFilter: 'ALL',
    todos:[]
};

if(localStorage.getItem('mytodolist')) {
  const currState = JSON.parse(localStorage.getItem('mytodolist'));
  if(currState) {
    storeTodos = currState;
  }
}

// function logger({getState, dispatch}) {
//   console.log('MIDDLEWARE CHIAMATO')
//   return function (next) {
//     console.log('PRIMA DELLA CHIAMATA ', getState());
//     return function(action) {
//       console.log('AZIONE ', action);
//       console.log('PRIMA DELL\'AZIONE ', getState());
//       let result = next(action);
//       console.log('DOPO L\'AZIONE ', getState());
//       console.log('RESULT ', result);
//       return result;
//     }
//   }
// }

// const logger2 = ({getState, dispatch}) => next => action => {
//   console.log('AZIONE2 ', action);
//   let result = next(action);
//   console.log('RESULT2 ', result);
//   return result;
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(storeReducer, { ...storeTodos},
  composeEnhancers(applyMiddleware(logger, promise))
  //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  );

// store.dispatch(
//   {
//     type:'TODOS',
//     payload: axios.get('http://localhost:3004/todos')
//   }
// )

store.subscribe(()=>{
  const currState = JSON.stringify(store.getState());
  localStorage.setItem('mytodolist', currState);
  console.log(store.getState())
})

ReactDOM.render(<Provider store={store}><App/></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
