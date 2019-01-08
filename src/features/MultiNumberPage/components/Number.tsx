import React from "react";

export interface OwnProps {
    id: string,
}

export interface StateProps {
    value: number,
}

export interface DispatchProps {
    update: (value: number) => void,
}

type Props = DispatchProps & StateProps & OwnProps

export class Number extends React.Component<Props> {
    onChange = ({ target }: { target: { name: string, value: string } }) => {
        this.props.update(parseInt(target.value))
    }

    render() {
        return <div>
            <label>{this.props.id}</label>
            <input value={this.props.value} onChange={this.onChange} />
        </div> 
    }
}
