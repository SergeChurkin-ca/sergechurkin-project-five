import React, { Component } from "react";
import firebase from "./firebase";
import NoteForm from "./NoteForm/NewTourForm.jsx";
import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>
      <span className="stats"> Total tours: {props.totalTours} </span>
      <ul>
        <li> Tour Name </li>
        <li> Date </li>
        <li> Duration </li>
        <li> Seats Total </li>
      </ul>
    </header>
  );
};

class App extends Component {
  constructor() {
    super();
    this.database = firebase.database().ref();
    this.state = {
      tours: [],
    };
  }

  // **************************
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      // checking changes in db
      console.log(snapshot.val());

      const data = snapshot.val();

      const newToursAarray = [];

      for (let inventoryName in data) {
        const toursObject = {
          id: inventoryName,
          tours: data[inventoryName],
          name: data[inventoryName].name,
          seats: data[inventoryName].seats,
          date: data[inventoryName].date,
          duration: data[inventoryName].duration,
        };
        newToursAarray.push(toursObject);
      }

      console.log("there are updates in database", newToursAarray);

      this.setState({
        tours: newToursAarray,
      });
    });
  }

  // **********REMOVING ADN ADDING TOURS****************
  handleRemoveTour = (id) => {
    this.database.child(id).remove();
  };

  addTour = (
    toursObjectName,
    toursObjectDate,
    toursObjectDuration,
    toursObjectSeats
  ) => {
    // console.log(toursObject);
    this.database.push().set({
      name: toursObjectName,
      date: toursObjectDate,
      duration: toursObjectDuration,
      seats: toursObjectSeats,
    });
  };

  render() {
    return (
      <div className="tourlist">
        <Header title="Tour Inventory" totalTours={this.state.tours.length} />
        {this.state.tours.map((toursObject) => {
          return (
            <ul className="inventoryItem" key={toursObject.id}>
              <li>
                <button onClick={() => this.handleRemoveTour(toursObject.id)}>
                  X
                </button>
                {toursObject.name}
              </li>
              <li>{toursObject.date}</li>
              <li>{toursObject.duration} hrs</li>
              <li>{toursObject.seats}</li>
            </ul>
          );
        })}
        <NoteForm addTour={this.addTour} />
      </div>
    );
  }
}

export default App;
