import { AddendOnePage, PropsFromDispatch, PropsFromState, OwnProps } from './AddendOnePage'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { addendOneAction } from '../redux/addendOneAction';
import { AddendOneModel } from '../redux/AddendOneModel';

interface MyReduxState {
    AddendOne: AddendOneModel,
}

const mapState: MapStateToProps<PropsFromState, OwnProps, MyReduxState> =
    (state: MyReduxState, props: OwnProps) => ({
        ...props,
        value: state.AddendOne.value,
    })

const mapDispatch: MapDispatchToProps<PropsFromDispatch, OwnProps> =
    (dispatch: any, props: OwnProps) => ({
        ...props,
        update: (n: number) => dispatch(addendOneAction(n))
    })

export default connect<PropsFromState, PropsFromDispatch, OwnProps, MyReduxState>
    (mapState, mapDispatch)
    (AddendOnePage);
