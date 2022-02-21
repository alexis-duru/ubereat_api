import bodyParser from "body-parser";
import express from "express";
import { router as ordersRouter } from "./routes/orders.route.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// HOME
app.get("/", (req, res) => {
  res.send("Hello, you are in the UBEREAT-API");
});

//GET ALL
app.use("/orders", ordersRouter);

app.listen(3000, console.log("Server running on PORT 3000..."));