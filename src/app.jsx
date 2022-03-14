import React, { Component } from 'react';
import Header from './components/header';
import VideoInfo from './components/videoInfo';
import VideoInfoSection from './components/videoInfoSection';
import Videos from './components/videos';

class App extends Component {
  state = {
    page: 'videoList',
    items: [],
    videoInfo: {},
  };

  // 컴포넌트가 DOM 트리에 삽입된 직후 호출
  componentDidMount() {
    // 인기 동영상 가져오기
    this.fetchYoutubeMostPopular();
  }

  // 인기 동영상 가져오기
  fetchYoutubeMostPopular = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyA06lX4aD4EPpRHHlBftWmVHlUeqe4yBmQ',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const items = result.items;
        this.setState({ items });
      })
      .catch((error) => console.log('error', error));
  };

  // 헤더에서 검색 했을 때 호출되는 콜백 메소드
  onSearch = (searchValue) => {
    // 검색 동영상 가져오기
    this.fetchYoutubeSearch(searchValue);
  };

  // 검색 동영상 가져오기
  fetchYoutubeSearch = (searchValue) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchValue}&regionCode=kr&key=AIzaSyA06lX4aD4EPpRHHlBftWmVHlUeqe4yBmQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const page = 'videoList';
        const items = result.items;
        this.setState({ page, items });
      })
      .catch((error) => console.log('error', error));
  };

  // 비디오를 클릭 했을 때 호출되는 콜백 메소드
  onVideoClick = (videoItem) => {
    const page = 'videoInfo';
    const items = [...this.state.items];
    const videoInfo = videoItem;
    this.setState({ page, items, videoInfo });
  };

  render() {
    if (this.state.page === 'videoList') {
      // 비디오 리스트 렌더링
      return (
        <>
          <Header onSearch={this.onSearch} />
          <Videos
            videoItems={this.state.items}
            onVideoClick={this.onVideoClick}
          />
        </>
      );
    } else if (this.state.page === 'videoInfo') {
      // 비디오 정보 렌더링
      return (
        <>
          <Header onSearch={this.onSearch} />
          <VideoInfoSection
            videoInfo={this.state.videoInfo}
            videoItems={this.state.items}
            onVideoClick={this.onVideoClick}
          />
        </>
      );
    }
  }
}

export default App;
