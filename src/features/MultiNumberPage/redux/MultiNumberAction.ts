import { Action } from "../../../core/redux/Action";
import { ActionType } from "../../../core/redux/ActionType";

export const MultiNumberAction: (name: string, value: number) => Action = (name, value) => ({
    type: ActionType.MultiNumber,
    payload: {
        name,
        value,
    },
})
