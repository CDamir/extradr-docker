// import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import app from "./express";
import mongoose from "mongoose";
import config from "./config/config";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`MongoDB Connected`))
  .catch((err) => console.log(`Database connection error ${err}`));

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app
  .listen(5000, () => {
    console.log("Api listening on port 5000");
  })
  .on("error", (err) => console.log(`API server error ${err}`));
