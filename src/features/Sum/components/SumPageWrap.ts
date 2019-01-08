import {SumPage, Props} from "./SumPage"
import { connect, MapStateToProps } from 'react-redux';
import { MultiNumberModel } from "../../MultiNumber/redux/MultiNumberModel";
import { AddendOneModel } from "../../AddendOne/redux/AddendOneModel";

interface MyReduxState {
    AddendOne: AddendOneModel,
    MultiNumber: MultiNumberModel,
}

const mapState: MapStateToProps<Props, {}, MyReduxState> =
    (state: MyReduxState) => {
        let sum = state.AddendOne && state.AddendOne.value || 0;
        const l = state.MultiNumber || {};
        for (const x of Object.keys(l)) {
            sum += l[x] || 0
        }
        return { sum, } 
    }

export default connect<Props, {}, {}, MyReduxState>
    (mapState, {})
    (SumPage);
