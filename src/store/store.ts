import { createStore, compose, applyMiddleware } from 'redux'
import { rootReduceer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { ItemsState } from './ducks/state'

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
export interface RootState {
  items: ItemsState
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReduceer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)