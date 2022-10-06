var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var booksRouter = require("./routes/books");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log("port :" + port);
});

/* var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",
  (err, client) => {
    // Client returned
    var db = client.db("test");
  }
);

MongoClient.connect(
  "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",
  function (err, client) {
    if (err) throw err;

    var db = client.db("test");

    db.collection("test").findOne({}, function (findErr, result) {
      if (findErr) throw findErr;
      console.log(result.name);
      client.close();
    });
  }
); */

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",

  (err, client) => {
    // Client returned

    var db = client.db("test");
  }
);

MongoClient.connect(
  "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",

  async function (err, client) {
    if (err) throw err;

    var db = client.db("test");

    var db = client.db("test");

    var users = db.collection("test");

    const count = await users.countDocuments({});

    console.log(`Nombre de documents : ${count}`);

    db.collection("test")

      .find({})

      .toArray(function (err, result) {
        if (err) throw err;

        console.log(result);

        client.close();
      });
  }
);

module.exports = app;
