import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

const { useState } = React;

var App = () => {
  const [listOfVideo, setListOfVideo] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search setListOfVideo={ setListOfVideo }/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer currentVideo={ currentVideo }/></div>
        </div>
        <div className="col-md-5">
          <div><VideoList listOfVideo={ listOfVideo } setCurrentVideo={ setCurrentVideo }/></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;