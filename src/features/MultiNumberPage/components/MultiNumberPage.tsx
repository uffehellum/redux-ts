import React from "react";
import Number from "./NumberWrap"

export class MultiNumberPage extends React.Component {
    render() {
        return (
            <div>
                <h1>MultiNumber</h1>
                <Number id="a"/>
                <Number id="b"/>
                <Number id="c"/>
            </div>
        )
    }
}
