import React, { Component } from "react";
import firebase from "./firebase";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tours: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      console.log(snapshot.val());

      const data = snapshot.val();

      const newToursAarray = [];

      for (let inventoryName in data) {
        newToursAarray.push(data[inventoryName]);
      }
      console.log("this is new tours arrays", newToursAarray);

      this.setState({
        tours: newToursAarray,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Travel Agency Inventory Management </h1>{" "}
        <ul>
          {" "}
          {this.state.tours.map((tours) => {
            return (
              <li>
                {" "}
                {tours.name} {tours.date}
                seats: {tours.seats}{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
      </div>
    );
  }
}

export default App;
