import React, { Component } from "react";
import "./NewTourForm.css";

class NewTourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTourName: "",
      newTourDate: "",
      newTourDuration: "",
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
  handleTourDuration = (e) => {
    this.setState({
      newTourDuration: e.target.value,
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
    this.props.addTour(
      this.state.newTourName,
      this.state.newTourDate,
      this.state.newTourDuration,
      this.state.newTourSeats
    );

    // Set newTourName back t≤o an empty string.
    this.setState({
      newTourName: "",
      newTourDate: "",
      newTourDuration: "",
      newTourSeats: "",
    });
  };

  render() {
    return (
      <div className="inputformWrapper">
        <input
          type="text"
          className="noteInput"
          placeholder="Add tour name"
          value={this.state.newTourName}
          onChange={this.handleUserInput}
        />
        <div className="inputParamsWrapper">
          <input
            type="date"
            className="dateInput"
            value={this.state.newTourDate}
            onChange={this.handleDateInput}
          />
          <input
            type="datetime"
            className="dateInput"
            placeholder="hrs"
            value={this.state.newTourDuration}
            onChange={this.handleTourDuration}
          />
          <input
            type="number"
            className="dateInput"
            placeholder="pax"
            value={this.state.newTourSeats}
            onChange={this.handleTourSeats}
          />
          <button className="noteButton" onClick={this.writeNote}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default NewTourForm;
