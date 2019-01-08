import { Action } from "../../../core/redux/Action";
import { ActionType } from "../../../core/redux/ActionType";

export const addendOneAction: (value?: number) => Action = (a) => ({
    type: ActionType.AddendOne,
    payload: a,
})
