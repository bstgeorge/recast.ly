import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYoutube.js';

const { useState, useEffect } = React;

var Search = ({ setVideos }) => {
  const [value, setValue] = useState('');

  var searchEvery500 = _.debounce(() => {
    searchYouTube(value, (data) => {
      setVideos(data);
    });
  }, 500);

  useEffect(() => {
    searchEvery500();

    return () => {
      searchEvery500.cancel();
    };
  }, [value]);


  return (
    <div className="search-bar form-inline">
      <input className="form-control"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn hidden-sm-down"
        onClick={(evt) => {
          evt.preventDefault();
          // perform api call with input value
          searchYouTube(value, (data) => {
            console.log(data);
            setVideos(data);
          });
        }}
      >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
