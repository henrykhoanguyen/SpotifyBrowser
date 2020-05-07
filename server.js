const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/errorHandler");

// Route files
const index = require("./routes/index");

const app = express();

app.use(cors());
// Body parser
app.use(express.json());

const limit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
// limit to 100 request per minute
app.use(limit);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use('/', index);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Serve static assest if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("spotify-client/dist/Spotify-Client"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "spotify-client",
        "dist",
        "Spotify-Client",
        "index.html"
      )
    );
  });
}

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
