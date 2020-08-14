import React, { Component } from "react";

// global variable - todays date
const today = new Date().toISOString().split("T")[0];

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

  // check empty fields and fire next func to submit the form
  handleTourSeats = (e) => {
    this.setState({
      newTourSeats: e.target.value,
    });
  };

  nullValidation = () => {
    if (
      !this.state.newTourName == " " &&
      !this.state.newTourDate == " " &&
      !this.state.newTourDuration == " " &&
      !this.state.newTourSeats == " "
    ) {
      this.writeNote();
    } else {
      alert("All fields are required");
    }
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
        <form>
          <input
            type="text"
            className="noteInput"
            placeholder="Add tour name"
            value={this.state.newTourName}
            onChange={this.handleUserInput}
            maxLength="20"
            // required
          />
          <div className="inputParamsWrapper">
            <input
              type="date"
              // disabling past dates from global variable - today
              min={today}
              className="dateInput"
              value={this.state.newTourDate}
              onChange={this.handleDateInput}
              // required
            />
            <input
              type="number"
              className="dateInput"
              placeholder="hrs"
              value={this.state.newTourDuration}
              onChange={this.handleTourDuration}
              // required
            />
            <input
              type="number"
              className="dateInput"
              placeholder="pax"
              value={this.state.newTourSeats}
              onChange={this.handleTourSeats}
              // required
            />
            <button
              className="noteButton"
              onClick={() => {
                // if input is empty we check and than submit the form once all is set
                this.nullValidation();
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTourForm;
