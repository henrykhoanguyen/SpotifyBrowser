# SpotifyBrowser

> **Spotify Browser** is web redesign interface for Spotify web application that allows you to find your favorite albums, tracks, and artists. 

## Quick Start
```
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the Angular client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

In config folder, you will need to create a file named `config.env`. Inside, you will need to create 2 variables. 

- `Client_ID= <your client id>`

- `Client_Secret= <your client secret>`

The value for these variables can be found after you create a Spotify Developer account. It is required to set up the Express server. Create a Spotify Dev account or log in at https://developer.spotify.com/dashboard/ and follow the instructions to create a client id. Name the app and description whatever you'd like. Make sure that the purpose of the app is for non-commercial use only since we're all here to learn! :D

You will also need to create `token.json` file in the config folder that will hold `access_token` and `refresh_token`. These two variables will be set to null. Once the access token and refresh token are retrieved, the file will be overwritten. Set the json file as follow.
```
{
  "access_token": null,
  "refresh_token": null
}
```
