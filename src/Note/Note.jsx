import React, { Component } from "react";
// import "./Note.css";
import PropType from "prop-types";

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
  }
  render(props) {
    return (
      <div className="note fade-in">
        <p className="noteContent">{this.noteContent} </p>
      </div>
    );
  }
}
Note.propTypes = {
  noteContent: PropType.string,
};
export default Note;
