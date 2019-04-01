const express = require('express');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  