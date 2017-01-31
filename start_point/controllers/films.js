//since we don't have a database we'll use our front end models at the moment
var Films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require("express");
var filmRouter = express.Router();

//Index
filmRouter.get("/api/films", function(req, res){
  res.json(Films)
});

//Show
filmRouter.get("/api/films/:id", function(req, res){
  res.json({data: Films[req.params.id]})
});

//Create
filmRouter.post("/api/films", function(req, res){
  Films.push(req.body.film);
  res.json({data: Films})
});

//Update
filmRouter.put("/api/films/:id", function(req, res){
  Films[req.params.id] = req.body.film
  res.json({ data: Films });
});

//Delete
filmRouter.delete("/api/films/:id", function(req, res){
  Films.splice(req.params.id, 1)
  res.json({ data: Films })
});

module.exports = filmRouter;