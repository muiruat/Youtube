import React, { Component } from 'react';
import VideoInfoListItem from './videoInfoListItem';
import './videoInfoList.css';

class VideoInfoList extends Component {
  render() {
    return (
      <ul className="videoInfoList">
        {this.props.videoItems.map((videoItem) => (
          <VideoInfoListItem
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

export default VideoInfoList;
