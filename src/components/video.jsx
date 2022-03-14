import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  onVideoClick = () => {
    this.props.onVideoClick(this.props.videoItem);
  };

  render() {
    return (
      <li className="video" onClick={this.onVideoClick}>
        <div className="video__thumbnail">
          <img src={this.props.thumbnailUrl} alt="thumbnail" />
        </div>
        <div className="video__info">
          <span>{this.props.videoTitle}</span>
          <span>{this.props.channelTitle}</span>
        </div>
      </li>
    );
  }
}

export default Video;
