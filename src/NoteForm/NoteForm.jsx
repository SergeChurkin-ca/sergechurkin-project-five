import React, { Component } from "react";
import "./NoteForm.css";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTourName: "",
      newTourDate: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
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

  writeNote() {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addTour(this.state.newTourName);

    // Set newTourName back t≤o an empty string.
    this.setState({
      newTourName: "",
      newTourDate: "",
    });
  }

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
        <button className="noteButton" onClick={this.writeNote}>
          Add
        </button>
      </div>
    );
  }
}

export default NoteForm;
