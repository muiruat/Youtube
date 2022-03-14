import React, { Component } from 'react';
import './videoInfo.css';

class VideoInfo extends Component {
  render() {
    return (
      <div className="video-info">
        <div className="video-player">
          <iframe
            type="text/html"
            width="640"
            height="360"
            src={`http://www.youtube.com/embed/${
              typeof this.props.videoInfo.id == 'string'
                ? this.props.videoInfo.id
                : this.props.videoInfo.id.videoId
            }`}
            frameBorder="0"
          ></iframe>
        </div>
        <h1>{this.props.videoInfo.snippet.title}</h1>
        <h2>{this.props.videoInfo.snippet.channelTitle}</h2>
        <h3>{this.props.videoInfo.snippet.description}</h3>
      </div>
    );
  }
}

export default VideoInfo;
