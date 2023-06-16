const express = require("express");
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes");

//ESTAS SON LAS CONSTANTES
const app = express();

//ESTAS SON LAS MIDDLEWARE
app.use(
  cors({
    origin: "https://blue-house-frontend.vercel.app/",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("App listening on port " + listener.address().port);
});
