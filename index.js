const express = require("express");
const app = express();
const redis = require("redis");

const client = redis.createClient({
  // host: "redis-server",
  // port: 6379,
  url: 'redis://redis-server:6379',
});
client.connect();
client.on("connect", () => console.log("Connected to redis 6379"));
client.on("error", function (error) {
  console.error("Redis Error --> ", error);
});
client.set("visits", 1);

app.get("/", async (req, res) => {
  const visits = await client.get("visits");
  res.send(
    "Hi, Time is " + new Date().toISOString() + ". No of visit : " + visits
  );
  client.set("visits", parseInt(visits) + 1);
});

app.get("/env", (req, res) => {
  res.send(process.env);
});

app.get("/stop", (req, res) => {
  process.exit(0);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
