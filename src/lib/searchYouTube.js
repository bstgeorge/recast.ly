import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  // $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
  //   youtube_api_key: YOUTUBE_API_KEY,
  //   q: query
  // })
  //   .done((items) => {
  //     if (callback) {
  //       callback(items);
  //       console.log(items);
  //     }
  //   })
  //   .fail(({ responseJSON }) => {
  //     responseJSON.error.errors.forEach((err) =>
  //       console.error(err)
  //     );
  //   });

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      youtube_api_key: YOUTUBE_API_KEY
    },
    contentType: 'application/json',
    success: (data) => { callback(data); },
    error: (error) => { console.error(`SearchYoutube: Failed to get data ${error}`); }
  });

  // $.ajax({
  //   url: `https://api-hrsei-api.herokuapp.com/api/recastly/videos/?q=${query}&youtube_api_key=${YOUTUBE_API_KEY}`,
  //   type: 'GET',
  //   // data: {
  //   //   'part': 'snippet',
  //   //   'q': query,
  //   //   'youtube_api_key': YOUTUBE_API_KEY,
  //   // },
  //   contentType: 'application/json',
  //   success: callback,
  //   error: function(error) {
  //     console.error(`SearchYoutube: Failed to get data: query: ${query} `, error);
  //   }
  // });
  // jQuery.get( 'https://api-hrsei-api.herokuapp.com/api/recastly/videos' [, data ] [, success ] [, dataType ] )
  // for video search results:  https://www.googleapis.com/youtube/v3
  // GET https://www.googleapis.com/youtube/v3/search
};

export default searchYouTube;
