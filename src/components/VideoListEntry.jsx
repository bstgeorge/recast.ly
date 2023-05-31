var VideoListEntry = ({ videoEntry, setCurrentVideo }) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object"
        src= {videoEntry.snippet.thumbnails.default.url}
        alt=""
        onClick={(evt) => setCurrentVideo(videoEntry)}
      />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={(evt) => setCurrentVideo(videoEntry) }>Video Title</div>
      <div className="video-list-entry-detail">Video Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  videoEntry: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
