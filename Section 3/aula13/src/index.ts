import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});