import React, { Component } from "react";
import TitleInput from "./title";

class Container extends Component {
    titleRef = React.createRef();

    onClickButton() {
        this.titleRef.current.focus();
    }
    render() {
        return (
            <div>
                <TitleInput ref={this.titleRef} />
                <button onClick={() => this.onClickButton()}>
                    Click me to focus title
                </button>
            </div>
        );
    }
}
export default Container;
