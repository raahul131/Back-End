import express from "express";

const app = express();

// middleware
// app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("server is ready to serve");
});

// get a list of five jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is joke 1st",
    },
    {
      id: 2,
      title: "joke 2",
      content: "This is joke 2nd",
    },
    {
      id: 3,
      title: "joke 3",
      content: "This is joke 3rd",
    },
    {
      id: 4,
      title: "joke 4",
      content: "This is joke 4th",
    },
    {
      id: 5,
      title: "joke 4",
      content: "This is joke 5th",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
