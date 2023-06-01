import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

// this is a test of my branch.

const { useState, useEffect } = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({});

  useEffect(() => {
    searchYouTube('', (data) => {
      console.log(data[0]);
      setVideos(data);
      setVideo(data[0]);
    });
  }, []);

  if (videos.length === 0) { return (<div></div>); }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search setVideos={ setVideos }/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={ video }/></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={ videos } setVideo={ setVideo }/></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;