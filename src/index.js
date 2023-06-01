// TODO: Render the `App` component to the DOM
import App from './src/components/App.js';

// render React
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//const root = ReactDOM.createRoot(document.getElementByID('app'));
//root.render(<App />);

/**
 *
 * App
 *  Search - state: value, setValue
 *    input field -state: value
 *    button - props: setSearchString, value
 *  VideoList - props: all videos;
 *    VideoPlayer
 *    VideoListEntry - props: video object
 *
 */

/*
App – (props: SearchCriteria, videosList, selectedVideo)
  Search – (props: SearchCriteria)
 		Input field – (state: SearchCriteria, setSearchCriteria)
    button – (props: SearchCriteria)
  VideoList – (props: videosList, selectedVideo)
    VideoPlayer – (props: selectedVideo)
    VideoListEntry – (props: singleVideo from videosList), (state: selectedVideo, setSelectedVideo)
*/