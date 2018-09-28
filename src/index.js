import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { shoes } from './reducers/shoes';
import App from './app';


const reducers = combineReducers({ shoes });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function Root() {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}

ReactDOM.render(<Root />, document.querySelector('#app'));
