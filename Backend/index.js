import express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Your app is working.");
});


mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App is connectec to the database.")
    app.listen(PORT, () => {
        console.log("Your app is working.");
      });
          
  })
  .catch((error) => {
    console.log(error);
  });
