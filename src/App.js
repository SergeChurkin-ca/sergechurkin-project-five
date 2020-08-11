import React, { Component } from "react";
import firebase from "./firebase";

import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>
      <span className="stats"> Total tours: {props.totalTours} </span>
    </header>
  );
};

// LISTING THE TOUR WITH DETAILS
// const Tour = (props) => {
//   return (
//     <div className="player">
//       <span className="name">{props.name}</span>
//       <span className="date"> {props.date} </span>
//       <span className="seats"> {props.seats} </span>
//       <Dates />
//       <Counter />
//     </div>
//   );
// };

const Dates = (props) => {
  return (
    <div className="date">
      <span className="date"> {props.date} </span>
    </div>
  );
};

class Counter extends Component {
  state = {
    score: 0,
  };

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score"> {this.state.score} </span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

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
        const toursObject = {
          id: inventoryName,
          tours: data[inventoryName],
          name: data[inventoryName].name,
          seats: data[inventoryName].seats,
          date: data[inventoryName].date,
        };
        newToursAarray.push(toursObject);
      }

      console.log("there are updates in database", newToursAarray);

      this.setState({
        tours: newToursAarray,
      });
    });
  }

  handleRemoveTour = (id) => {
    console.log(id);
    const dbRef = firebase.database().ref();
    dbRef.child(id).remove();
  };

  render() {
    return (
      <div className="tourlist">
        <Header title="Tour Inventory" totalTours={this.state.tours.length} />
        {this.state.tours.map((toursObject) => {
          return (
            <ul key={toursObject.id}>
              <li>
                <button onClick={() => this.handleRemoveTour(toursObject.id)}>
                  X
                </button>
              </li>
              <li>{toursObject.name}</li>
              <li>{toursObject.date}</li>
              <li>{toursObject.seats}</li>
              {/* {toursObject.id} */}
            </ul>
          );
        })}
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
