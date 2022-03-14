import React from 'react';
import VideoInfo from './videoInfo';
import './videoInfoSection.css';
import VideoInfoList from './videoInfoList';

const VideoInfoSection = (props) => (
  <section>
    <VideoInfo videoInfo={props.videoInfo} />
    <VideoInfoList
      videoItems={props.videoItems}
      onVideoClick={props.onVideoClick}
    />
  </section>
);

export default VideoInfoSection;
