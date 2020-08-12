import React, { Component } from "react";
import "./NewTourForm.css";

class NewTourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTourName: "",
      newTourDate: "",
      newTourSeats: "",
    };
  }

  // getting the value from text input box
  handleUserInput = (e) => {
    this.setState({
      newTourName: e.target.value,
    });
  };
  // getting the value from text input box
  handleDateInput = (e) => {
    this.setState({
      newTourDate: e.target.value,
    });
  };

  handleTourSeats = (e) => {
    this.setState({
      newTourSeats: e.target.value,
    });
  };

  writeNote = () => {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addTour(this.state.newTourName, this.state.newTourDate);

    // Set newTourName back t≤o an empty string.
    this.setState({
      newTourName: "",
      newTourDate: "",
      newTourSeats: "",
    });
  };

  render() {
    return (
      <div className="formWrapper">
        <input
          type="text"
          className="noteInput"
          placeholder="Add tour name"
          value={this.state.newTourName}
          onChange={this.handleUserInput}
        />
        <input
          type="date"
          className="dateInput"
          value={this.state.newTourDate}
          onChange={this.handleDateInput}
        />
        <input
          type="number"
          className="dateInput"
          value={this.state.newTourSeats}
          onChange={this.handleTourSeats}
        />
        <button className="noteButton" onClick={this.writeNote}>
          Add
        </button>
      </div>
    );
  }
}

export default NewTourForm;
