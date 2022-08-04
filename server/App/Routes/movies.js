const express = require("express");
const router = express.Router();

const movies = require("../Controllers/movies");

router.get('/listmovies',movies.movielist);
router.get('/moviebyid/:movie_id',movies.moviebyid);

module.exports = router;
