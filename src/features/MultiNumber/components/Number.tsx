import React from "react";
import { PositiveIntegerInput } from "../../../shared/PositiveIntegerInput";

export interface OwnProps {
    id: string,
}

export interface StateProps {
    value?: number,
}

export interface DispatchProps {
    onNumberChange: (value?: number) => void,
}

type Props = DispatchProps & StateProps & OwnProps

export class Number extends React.Component<Props> {
    render() {
        return <div>
            <label>{this.props.id}</label>
            <PositiveIntegerInput
                value={this.props.value}
                onNumberChange={this.props.onNumberChange}
            />
        </div>
    }
}
