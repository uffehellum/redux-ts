import {Number, StateProps, DispatchProps, OwnProps} from "./Number"
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { MultiNumberAction } from '../redux/MultiNumberAction';
import { MultiNumberModel } from "../redux/MultiNumberModel";

interface MyReduxState {
    MultiNumber: MultiNumberModel,
}

const mapState: MapStateToProps<StateProps, OwnProps, MyReduxState> =
    (state: MyReduxState, props: OwnProps) => ({
        ...props,
        value: state.MultiNumber[props.id] || 0,
    })

const mapDispatch: MapDispatchToProps<DispatchProps, OwnProps> =
    (dispatch: any, props: OwnProps) => ({
        ...props,
        update: (n: number) => dispatch(MultiNumberAction(props.id, n))
    })

export default connect<StateProps, DispatchProps, OwnProps, MyReduxState>
    (mapState, mapDispatch)
    (Number);
