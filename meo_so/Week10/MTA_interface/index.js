const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const MTA = require("./MTA");

const server = express();
server.use(express.static("public"));
server.set("view-engine", ejs);

const PORT = 1337;

server.get("/", (req, res) => {
  const trainLines = MTA.MTA.trainLines;
  res.render("home.ejs", { trainLines });
});

server.get("/tripDetail", (req, res) => {
  console.log(req.query);
  const detail = req.query;

  const result = MTA.MTA.planTrip(
    detail.startLine,
    detail.startStation,
    detail.endLine,
    detail.endStation
  );
  console.log(result);
  res.render("showTrip.ejs", { result });
});

server.listen(PORT, () => {
  console.log(`Now serving on http://localhost:${PORT}/`);
});
