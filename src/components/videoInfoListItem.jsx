import React, { Component } from 'react';
import './videoInfoListItem.css';

class VideoInfoListItem extends Component {
  onVideoClick = () => {
    this.props.onVideoClick(this.props.videoItem);
  };

  render() {
    return (
      <li className="video2" onClick={this.onVideoClick}>
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

export default VideoInfoListItem;
