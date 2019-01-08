import React, { ChangeEvent } from 'react'

export interface PropsFromState {
    value: number
}

export interface PropsFromDispatch {
    update: (n: number) => void
}

export interface OwnProps { }

export type Props = PropsFromState & PropsFromDispatch & OwnProps

export class AddendOnePage extends React.Component<Props> {
    onChange = ({ target }: { target: { name: string, value: string } }) => {
        this.props.update(parseInt(target.value))
    }

    render() {
        return (
            <div>
                <h1>Addend One</h1>
                <label>Addend one</label>
                <input type="text" value={this.props.value} onChange={this.onChange} />
            </div>
        )
    }
}


