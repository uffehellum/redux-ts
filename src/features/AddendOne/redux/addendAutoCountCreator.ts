import { Action } from "../../../core/redux/Action";
import { ActionType } from "../../../core/redux/ActionType";
import { AddendOneModel } from "./AddendOneModel";

export const addendAutoCountCreator = (value?: number) =>
    (dispatch: any, getstate: any) => {
        const a = {
            type: ActionType.AddendOne,
            payload: value,
        }
        dispatch(a)
        for (let i = 1; i < 4; i++) {
            setTimeout(function () {
                const state = getstate().AddendOne as AddendOneModel;
                if (state && state.value == a.payload) {
                    a.payload = (a.payload || 0) + 1
                } dispatch(a)
            }, i * 1000);
        }
    }
