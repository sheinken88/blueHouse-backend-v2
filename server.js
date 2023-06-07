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
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

app.listen(8080, () => {
  console.log(`Server is listening at port 8080`);
});
