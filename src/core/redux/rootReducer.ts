import { combineReducers } from 'redux'
import { AddendOneReducer } from '../../features/AddendOne/redux/AddendOneReducer'
import { MultiNumberReducer } from '../../features/MultiNumber/redux/MultiNumberReducer';

export const rootReducer = combineReducers({
    AddendOne: AddendOneReducer,
    MultiNumber: MultiNumberReducer,
})
