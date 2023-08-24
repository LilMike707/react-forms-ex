import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      backgroundColor: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBox = {
      width: parseInt(this.state.width),
      height: parseInt(this.state.height),
      backgroundColor: this.state.backgroundColor,
    };
    this.props.addBox(newBox);
    this.setState({
      width: "",
      height: "",
      backgroundColor: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          name="width"
          id="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          name="height"
          id="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="backgroundColor">Background Color: </label>
        <input
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <button>Add Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
