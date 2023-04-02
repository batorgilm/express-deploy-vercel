import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send({ msg: "Hello world" });
});

app.listen(4000, () => {
  console.log("server running on 4000");
});
