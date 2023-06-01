import VideoListEntry from './VideoListEntry.js';

// const { useEffect, useState } = React;

var VideoList = ({ videos, setVideo }) => {
  return (
    <div className="video-list">
      {videos.map(videoElement => (
        <VideoListEntry video = {videoElement} setVideo = {setVideo} />
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


//const [listEntryArray, setListEntryArray] = useState([]);
// useEffect(() => {
//   var updatedListEntryArray = [];
//   console.log(`using effect!: ${videos}`);
//   for (var i = 0; i < videos.length; i++) {
//     updatedListEntryArray.push(<VideoListEntry videoEntry={ videos[i] } setVideo={ setVideo } />);
//   }
//   setListEntryArray(updatedListEntryArray);
// }, [videos]);