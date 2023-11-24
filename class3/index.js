require("dotenv").config();

const express = require("express");

const app = express();

const githubData = {
  login: "raahul131",
  id: 107882121,
  node_id: "U_kgDOBm4miQ",
  avatar_url: "https://avatars.githubusercontent.com/u/107882121?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/raahul131",
  html_url: "https://github.com/raahul131",
  followers_url: "https://api.github.com/users/raahul131/followers",
  following_url:
    "https://api.github.com/users/raahul131/following{/other_user}",
  gists_url: "https://api.github.com/users/raahul131/gists{/gist_id}",
  starred_url: "https://api.github.com/users/raahul131/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/raahul131/subscriptions",
  organizations_url: "https://api.github.com/users/raahul131/orgs",
  repos_url: "https://api.github.com/users/raahul131/repos",
  events_url: "https://api.github.com/users/raahul131/events{/privacy}",
  received_events_url: "https://api.github.com/users/raahul131/received_events",
  type: "User",
  site_admin: false,
  name: "Rahul R Yadav",
  company: "Hamro Patro",
  blog: "https://rahulray.vercel.app",
  location: "Kathmandu, Nepal",
  email: null,
  hireable: null,
  bio: "Hey 👋, Learning something new everyday",
  twitter_username: "rahulRa131",
  public_repos: 27,
  public_gists: 0,
  followers: 0,
  following: 5,
  created_at: "2022-06-20T17:58:47Z",
  updated_at: "2023-11-01T06:09:06Z",
};

app.get("/", (req, res) => {
  res.send("Hello Programmer!!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter Called!!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please log in..</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Let's learn Backend!!</h2>");
});

app.get("/youtube/jon", (req, res) => {
  res.send("<h1>You are on the Jon youtube channel</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData.name);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
