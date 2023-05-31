import VideoListEntry from './VideoListEntry.js';

const { useEffect, useState } = React;

var VideoList = ({ listOfVideo, setCurrentVideo }) => {
  const [listEntryArray, setListEntryArray] = useState([]);

  // useEffect(() => {
  //   listEntryArray = listOfVideo.map((elements, i) => {
  //     return
  //   });
  // }, [listOfVideo]);

  useEffect(() => {
    var updatedListEntryArray = [];

    for (var i = 0; i < listOfVideo.length; i++) {
      updatedListEntryArray.push(<VideoListEntry videoEntry={ listOfVideo[i] } setCurrentVideo={ setCurrentVideo } />);
    }

    setListEntryArray(updatedListEntryArray);
  }, [listOfVideo]);

  return (
    <div className="video-list">
      {listEntryArray}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  listOfVideo: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// <h5><em>videoListEntry</em> view goes here</h5>
/* <div><VideoListEntry /></div>
<div><VideoListEntry /></div>
<div><VideoListEntry /></div>
<div><VideoListEntry /></div>
<div><VideoListEntry /></div> */
