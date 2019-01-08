import React from "react";

export interface Props {
    sum: number,
}

export class SumPage extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Sum</h1>
                <div>{this.props.sum}</div>
            </div>
        )
    }
}
