import { Number, StateProps, DispatchProps, OwnProps } from "./Number"
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { MultiNumberAction } from '../redux/MultiNumberAction';
import { MultiNumberModel } from "../redux/MultiNumberModel";

interface MyReduxState {
    MultiNumber: MultiNumberModel,
}

const mapState: MapStateToProps<StateProps, OwnProps, MyReduxState> =
    (state: MyReduxState, props: OwnProps) => ({
        value: state.MultiNumber[props.id],
    })

const mapDispatch: MapDispatchToProps<DispatchProps, OwnProps> =
    (dispatch: any, props: OwnProps) => ({
        onNumberChange: (value?: number) => dispatch(MultiNumberAction(props.id, value)),
    })

export default connect<StateProps, DispatchProps, OwnProps, MyReduxState>
    (mapState, mapDispatch)
    (Number);
