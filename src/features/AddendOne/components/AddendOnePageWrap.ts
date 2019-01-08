import { AddendOnePage, PropsFromDispatch, PropsFromState, OwnProps } from './AddendOnePage'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { addendOneAction } from '../redux/addendOneAction';
import { AddendOneModel } from '../redux/AddendOneModel';

interface MyReduxState {
    AddendOne: AddendOneModel,
}

const mapState: MapStateToProps<PropsFromState, OwnProps, MyReduxState> =
    (state: MyReduxState, props: OwnProps) => ({
        value: state.AddendOne.value,
    })

function stoi(s: string) {
    const n = parseInt(s)
    if (n > 0) return n;
    return undefined
}

const mapDispatch: MapDispatchToProps<PropsFromDispatch, OwnProps> =
    (dispatch: any, props: OwnProps) => ({
        update: (s: string) => dispatch(addendOneAction(stoi(s))),
    })

export default connect<PropsFromState, PropsFromDispatch, OwnProps, MyReduxState>
    (mapState, mapDispatch)
    (AddendOnePage);
