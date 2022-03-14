import React, { Component } from 'react';
import Video from './video';
import './videos.css';

class Videos extends Component {
  render() {
    return (
      <ul>
        {this.props.videoItems.map((videoItem) => (
          <Video
            key={
              typeof videoItem.id == 'string'
                ? videoItem.id
                : videoItem.id.videoId
            }
            thumbnailUrl={videoItem.snippet.thumbnails.medium.url}
            videoTitle={videoItem.snippet.title}
            channelTitle={videoItem.snippet.channelTitle}
            videoItem={videoItem}
            onVideoClick={this.props.onVideoClick}
          />
        ))}
      </ul>
    );
  }
}

export default Videos;
