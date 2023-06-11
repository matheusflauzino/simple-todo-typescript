import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.use("/api/tasks", require("./routes/task-routes"));

app.listen(PORT, () => {
  console.log("Server is up");
});
