const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

// HTTP
// app.use(morgan("combined"));

// template enigne
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

// local host -- Hosting
// action -> dispatcher --> function handle

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.render("search");
});

app.get("/trang-chu", (req, res) => {
  res.send(`<h1>Quang</h1>`);
});

app.listen(port, () => {
  console.log(`Exmple app listening on port ${port}`);
});
