import React, { ChangeEvent } from 'react'
import { PositiveIntegerInput } from '../../../shared/PositiveIntegerInput';

export interface PropsFromState {
    value?: number
}

export interface PropsFromDispatch {
    onNumberChange: (value?: number) => void,
}

export interface OwnProps { }

export type Props = PropsFromState & PropsFromDispatch & OwnProps

export class AddendOnePage extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Addend One</h1>
                <label>Addend one</label>
                <PositiveIntegerInput
                    value={this.props.value}
                    onNumberChange={this.props.onNumberChange}
                />
            </div>
        )
    }
}


