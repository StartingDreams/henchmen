// Express
var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    favicon = require("serve-favicon"),
    app = express(),
    port = process.env.PORT || 3000;

// Settings
var publicPath = path.join(__dirname, "../public");

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(publicPath));

// Routers
var indexRouter = express.Router();

// Index Routes
indexRouter.route("/")
    .get(function(req, res) {
        res.sendFile(path.join(publicPath + "/index.html"));
    });

// Routes
app.use("*", indexRouter);

// Start Server
app.listen(port, function() {
    console.log("Running on port:" + port);
});

module.exports = app;
