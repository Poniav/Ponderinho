import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './app/store/reducers'
import Root from './root'
import Wrapper from './components/wrapper'
import reportWebVitals from './reportWebVitals'

const store: Store = createStore(AppReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper>
        <Root />
      </Wrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
