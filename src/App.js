import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './style/App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAJA6o0aHO1fQYzFD1KqC5Sp8Z5dnUqH4k';

//class components are used when dealing with state. otherwise use functional component. ex: video_list
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos:[], selectedVideo: null };

    this.videoSearch('surfboards');
}

  videoSearch(term){

      YTSearch({key: API_KEY, term: term}, video =>{ //data is standard, but video is more specific. can call it anything

      this.setState({
      videos: video,
      selectedVideo: video[0]
      });
    });
}

  render() {

    const videoSearch = _.debounce((term) =>{this.videoSearch(term), 300});

    return (
      <div className="App">
        <h1>YouTube Clone</h1>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
