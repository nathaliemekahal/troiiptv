import React, { Component } from "react";
import "../styles/Button.css";

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <button className="btn-class">{this.props.btnContent}</button>;
  }
}

export default Button;
