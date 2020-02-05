const dotenv = require("dotenv");
const fetch = require("node-fetch");
const fs = require("fs");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const redirect_uri = "http://localhost:5000/callback";
var my_client_id = null;
var my_client_secret = null;
var access_token = null;
var refresh_token = null;

exports.general = (req, res, next) => {
  my_client_id = process.env.Client_ID;
  my_client_secret = process.env.Client_Secret;
  fs.readFile("./config/tokens.json", (err, data) => {
    data = JSON.parse(data);
    // console.log(JSON.parse(data));
    access_token = data.access_token;
    refresh_token = data.refresh_token;
    next();
  });
};

exports.login = (req, res, next) => {
  // console.log(process.env.Client_ID);

  var scopes = "user-read-private user-read-email";
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
          res.redirect("http://localhost:4200");
        }
      );
    })
    .catch(err => console.error(err));

  // console.log(header);
  // res.status(200).json({ success: true });
};
