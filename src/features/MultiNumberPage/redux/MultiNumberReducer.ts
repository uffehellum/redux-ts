import { Reducer } from 'redux'
import { MultiNumberModel } from './MultiNumberModel';
import { Action } from '../../../core/redux/Action';
import { ActionType } from '../../../core/redux/ActionType';
import { MultiNumberPayload } from './MultiNumberPayload';

export const MultiNumberDefault: MultiNumberModel = {
}

export const MultiNumberReducer: Reducer<MultiNumberModel, Action> = (state = MultiNumberDefault, action: Action) => {
    switch (action.type) {
        case ActionType.MultiNumber:            
            const p = action.payload as MultiNumberPayload
            return {
                ...state,
                [p.name]: p.value,
            }
        default:
            return state
    }
}
