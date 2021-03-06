const dotenv = require("dotenv");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
// const asyncHandler = require("../middleware/async");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// const redirect_uri = "http://localhost:5000/callback";                 // for development
const redirect_uri = "https://us-spotify-browser.herokuapp.com/callback"; // for production
var access_token = null;
var refresh_token = null;

fs.readFile("./config/tokens.json", (err, data) => {
  data = JSON.parse(data);
  // console.log(JSON.parse(data));
  access_token = data.access_token;
  refresh_token = data.refresh_token;
  next();
});

function refresh() {
	const params = new URLSearchParams();
	params.append('refresh_token', refresh_token);
	params.append('grant_type', 'refresh_token');

	var headers = {
		'Content-Type':'application/x-www-form-urlencoded',
		'Authorization': 'Basic ' + Buffer.from(process.env.Client_ID + ':' + process.env.Client_Secret).toString('base64')
	};

	return fetch('https://accounts.spotify.com/api/token', {method: 'POST', body: params, headers: headers}).then(response => {
		if(response.ok) {
			return response.json();
		} else {
			throw "Error refreshing token";
		}
	}).then(json => {
		access_token = json.access_token;
		refresh_token = json.refresh_token;
		fs.writeFile('./config/tokens.json', JSON.stringify({access_token: access_token, refresh_token: refresh_token}), () => {
			return Promise.resolve();
		});
	}).catch(err => console.error(err));
}

function makeAPIRequest(url, res) {
	var headers = {
		'Content-Type':'application/x-www-form-urlencoded',
		'Authorization': 'Bearer ' + access_token
	};

	fetch(url, {method: 'GET', headers: headers}).then(response => {
		if(response.ok) {
      // console.log(access_token);
      // console.log(response);
			return response.json();
		} else {
			if(response.status == 401) {
				refresh().then(() => {
					return fetch(url, {method: 'GET', headers: headers}).then(response => {
						if(response.ok) {
							return response.json();
						} else {
							// console.log(response);
							res.status(response.status).end();
						}
					});
				});
			} else {
				// console.log(response);
				res.status(response.status).end();
      }
			return null;
		}
	}).then(json => {
    // console.log(json);
		res.status(200).json({
      success: true,
      data: json
    });
	}).catch(err => {
		console.error(err);
	});
}

exports.general = (req, res, next) => {
  // console.log("HELLO")
  
  // fs.readFile("./config/tokens.json", (err, data) => {
  //   data = JSON.parse(data);
  //   // console.log(JSON.parse(data));
  //   access_token = data.access_token;
  //   refresh_token = data.refresh_token;
  //   next();
  // });
};

exports.login = (req, res, next) => {
  // console.log(process.env.Client_ID);

  // 1. user-read-private: Read access to user’s subscription details
      // endpoints: Search for an Item, Get Current User's Profile.
  // 2. user-read-email: Read access to user’s email address
      // endpoints: Get Current User's Profile
  // 3. user-top-read: Read access to a user's top artists and tracks.
      // endpoints: Get a User's Top Artists and Tracks.
  // 4. user-follow-read: Read access to the list of artists and other users that the user follows.
      // endpoints: Check if Current User Follows Artists or Users, Get User's Followed Artists
  // 5. playlist-read-private: Read access to user's private playlists
      // endpoints: Check if Users Follow a Playlist, Get a List of Current User's Playlists, Get a List of a User's Playlists
  // 6. user-library-read: Read access to a user's "Your Music" library
      // endpoints: Check User's Saved Albums, Check User's Saved Tracks, Get Current User's Saved Albums, Get a User's Saved Tracks
  var scopes = "user-read-private user-read-email user-top-read user-follow-read playlist-read-private user-library-read";
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      process.env.Client_ID +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
};

exports.callBack = (req, res, next) => {
  const error = req.query.error || null;
  const code = req.query.code || null;

  if (error) {
    console.log(error);
    return next();
  }

  const params = new URLSearchParams();
  // console.log(req.query.code);
  params.append("code", code);
  params.append("redirect_uri", redirect_uri);
  params.append("grant_type", "authorization_code");

  var headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " +
      Buffer.from(
        process.env.Client_ID + ":" + process.env.Client_Secret
      ).toString("base64")
  };

  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: params,
    headers: headers
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response);
        // res.redirect("http://localhost:4200"); // redirect user to client landing page
        res.redirect("https://us-spotify-browser.herokuapp.com"); // redirect user to client landing page
      }
    })
    .then(json => {
      // console.log(json);
      access_token = json.access_token;
      refresh_token = json.refresh_token;
      // console.log(access_token, refresh_token)
      fs.writeFile(
        "./config/tokens.json",
        JSON.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }),
        () => {
          // res.redirect("http://localhost:4200/me"); // for development
          res.redirect("https://us-spotify-browser.herokuapp.com/me"); // for production
          // res.sendFile(
          //   path.resolve(
          //     __dirname,
          //     "spotify-client",
          //     "dist",
          //     "Spotify-Client",
          //     "index.html"
          //   )
          // );
          // res.status(200).json({ success: true });
        }
      );
    })
    .catch(err => console.error(err));

  // console.log(header);
  // res.status(200).json({ success: true });
};

// Get Info About Logged in User
// https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
exports.aboutMe = (req, res, next) => {
  fs.readFile("./config/tokens.json", (err, data) => {
    data = JSON.parse(data);
    // console.log(JSON.parse(data));
    access_token = data.access_token;
    refresh_token = data.refresh_token;
    next();
  });
  makeAPIRequest("https://api.spotify.com/v1/me", res);
}

// Get User's Top Artists 
// https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
exports.topArtists = (req, res, next) => {
  makeAPIRequest("https://api.spotify.com/v1/me/top/artists", res);
}

// Get User's Top Tracks
// https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
exports.topTracks = (req, res, next) => {
  makeAPIRequest("https://api.spotify.com/v1/me/top/tracks?limit=10", res);
}

// Get Followed Artists
// https://developer.spotify.com/console/get-following/?type=artist&after=&limit=20
exports.followedArtists = (req, res, next) => {
  makeAPIRequest("https://api.spotify.com/v1/me/following?type=artist&limit=20", res);
}

// Get a List of Current User's Playlists
// https://developer.spotify.com/console/get-current-user-playlists/?limit=&offset=
exports.getUserPlaylists = (req, res, next) => {
  // next variable contains endpoint that requests the next 20 playlists.
  const query = req.params.query || '';

  // res.json({
  //     success: true,
  //     data: query
  //   })
  if (query === 'none') {
    makeAPIRequest("https://api.spotify.com/v1/me/playlists", res);
  } else {
    makeAPIRequest(query, res);
  }
  // var params = new URLSearchParams();
  // params.append('limit', limit);
  // makeAPIRequest("https://api.spotify.com/v1/me/playlists?" + params, res);
}

// Get Current User's Saved Tracks
// https://developer.spotify.com/console/get-current-user-saved-tracks/
exports.getUserSavedTracks = (req, res, next) => {
  const query = req.params.query || '';
  // console.log(query);
  if (query === 'none') {
    makeAPIRequest("https://api.spotify.com/v1/me/tracks", res);
  } else {
    makeAPIRequest(query, res);
  }
}

// Get Recommendations Based on Seeds
// https://developer.spotify.com/console/get-recommendations/?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US
exports.getRecommendations = (req, res, next) => {
  var artist_seed = req.params.artist;
  var track_seed = req.params.track;
  makeAPIRequest("https://api.spotify.com/v1/recommendations", res);
}

// Search for an Item
// https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-search
exports.search = (req, res, next) => {
  var query = req.params.query || '';
  // console.log(query);
  var params = new URLSearchParams();
	params.append('q', query);
  params.append('type', "track,artist,album,playlist");
  params.append('limit', 10);
  // res.json({
  //     success: true,
  //     data: String(params)
  //   })
  makeAPIRequest("https://api.spotify.com/v1/search?" + params, res);
}

// Search for artist, track, or album using Id
exports.getSingle = (req, res, next) => {
  const id = req.params.id || '';
  const type = req.params.type || '';

  // res.json({
  //   success: true,
  //   data:  type + "/" + id
  // });
  
  makeAPIRequest("https://api.spotify.com/v1/" + type + "/" + id, res);
}

exports.getArtistTopTracks = (req, res, next) => {
  const id = req.params.id || '';

  makeAPIRequest("https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=US", res);
}