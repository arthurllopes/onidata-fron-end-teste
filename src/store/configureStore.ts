import {combineReducers, configureStore} from '@reduxjs/toolkit'
import User from './User'

const reducer = combineReducers({User})
const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;

export default store;