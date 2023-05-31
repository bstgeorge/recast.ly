import exampleVideoData from '../data/exampleVideoData.js';

const { useState } = React;

// var SubmitButton = () => {
//   return (
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   );
// };

var Search = ({ setListOfVideo }) => {
  const [value, setValue] = useState('');

  return (
    <div className="search-bar form-inline">
      <input className="form-control"
        type="text"
        value = {value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn hidden-sm-down"
        onClick={(evt) => {
          evt.preventDefault();
          console.log('button test');
          // perform api call with input value
          // set video list
          setListOfVideo(exampleVideoData);
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
