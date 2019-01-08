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

function stoi(s: string) {
    const n = parseInt(s)
    if (n > 0) return n;
    return undefined
}

const mapDispatch: MapDispatchToProps<DispatchProps, OwnProps> =
    (dispatch: any, props: OwnProps) => ({
        update: (s: string) => dispatch(MultiNumberAction(props.id, stoi(s))),
    })

export default connect<StateProps, DispatchProps, OwnProps, MyReduxState>
    (mapState, mapDispatch)
    (Number);
