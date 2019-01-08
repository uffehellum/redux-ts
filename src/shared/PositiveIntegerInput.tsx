import React from "react"

interface Props {
    onNumberChange: (value?: number) => void,
    value?: number,
}

export class PositiveIntegerInput extends React.Component<Props> {
    stoi(s: string): any {
        const n = parseInt(s)
        if (n > 0) return n;
        return undefined
    }

    onChange = ({ target }: { target: { name: string, value: string } }) => {
        let n: number | undefined;
        n = this.stoi(target.value)
        this.props.onNumberChange(n)
    }

    render = () =>
        <input
            value={this.props.value}
            onChange={this.onChange}
        />
}