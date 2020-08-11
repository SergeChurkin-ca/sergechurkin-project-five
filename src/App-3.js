import React, { Component } from "react";
import firebase from "./firebase";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";
import "firebase/database";

import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1> {props.title} </h1>{" "}
      <span className="stats"> Total tours: {props.totalTours} </span>{" "}
    </header>
  );
};

// LISTING THE TOUR WITH DETAILS
const Tour = (props) => {
  return (
    <div className="player">
      <span className="name">
        <button className="remove-tour"> x </button> {props.name}{" "}
      </span>{" "}
      <span className="date"> {props.date} </span>{" "}
      <span className="seats"> {props.seats} </span> <Dates />{" "}
      {/* <Counter /> */}{" "}
    </div>
  );
};

const Dates = (props) => {
  return (
    <div className="date">
      <span className="date"> {props.date} </span>{" "}
    </div>
  );
};

// class Counter extends Component {
//   state = {
//     score: 0,
//   };

//   render() {
//     return (
//       <div className="counter">
//         <span className="counter-score"> {this.state.score} </span>
//       </div>
//     );
//   }
// }

// initial state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      tours: [],
      notes: [
        // { id: 1, noteConent: "note 1" },
        // { id: 2, noteConent: "note 2" },
      ],
    };
  }

  componentDidMount = () => {
    const dbRef = firebase.database().ref();

    //   db changes snapshot
    dbRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      const data = snapshot.val();
      const newToursAarray = [];

      for (let inventoryName in data) {
        newToursAarray.push(data[inventoryName]);
      }
      console.log("there are updates in database", newToursAarray);
      this.setState({
        tours: newToursAarray,
      });
    });
  };

  //   render() {
  //     return (
  //       <div className="tourlist">
  //         <Header title="Tour Inventory" totalTours={this.state.tours.length} />

  //         {this.state.tours.map((tours) => {
  //           return (
  //             <li>
  //               <div className="notesBody">
  //                 {this.state.notes.map((note) => {
  //                   return (
  //                     <Note
  //                       noteContent={note.noteConent}
  //                       noteId={note.id}
  //                       key={note.id}
  //                     />
  //                   );
  //                 })}
  //               </div>

  //               {/* <Tour
  //                 name={tours.name}
  //                 date={tours.date}
  //                 seats={tours.seats}
  //                 key={tours.id}
  //               /> */}
  //             </li>
  //           );
  //         })}
  //         <div className="notesFooter">
  //           <NoteForm addNote={this.addNote} />
  //         </div>
  //       </div>
  //     );
  //   }
  render() {
    return (
      <div className="tourlist">
        <div className="notesHeader">
          <Header title="Tour Inventory" totalTours={this.state.notes.length} />{" "}
        </div>{" "}
        <div className="notesBody">
          {" "}
          {this.state.notes.map((note) => {
            return (
              <Note
                noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
                removeNote={this.removeNote}
              />
            );
          })}{" "}
        </div>{" "}
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />{" "}
        </div>{" "}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
