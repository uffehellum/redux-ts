import { Reducer } from 'redux'
import { Action } from '../../../core/redux/Action';
import { ActionType } from '../../../core/redux/ActionType';
import { AddendOneModel } from './AddendOneModel';

export const AddendOneDefault: AddendOneModel = {
    value: 42,
}

export const AddendOneReducer: Reducer<AddendOneModel, Action> = (state = AddendOneDefault, action) => {
    switch (action.type) {
        case ActionType.AddendOne:
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state
    }
}
