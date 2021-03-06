import React, { Component } from 'react';
//import logo from './logo.svg';
import './Track.css';


class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack = () => {
    this.props.onAdd(this.props.track);
  }

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  }

  renderAction = () => {
    if (this.props.isRemoval === true) {
      return '-';
    } else {
      return '+';
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          {/*the () calls the function, otherwise it just references it
            Below is a ternary operator! Fancy that*/}
          <a className="Track-action" onClick = {this.props.isRemoval ? this.removeTrack : this.addTrack} >{this.renderAction()}</a>

        </div>
    );
  }
}

export default Track;
