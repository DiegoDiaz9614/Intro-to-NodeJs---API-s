const express = require("express");
const cors = require("cors");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app
.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) =>{
  if(err) {
    console.log("Database init failed",err);
    return;
  } else{
    app.listen(PORT);
    console.log(
      "\x1b[34m%\x1b[0m",
      `Connected to DB and listening on ${PORT}`
    );
  }
})