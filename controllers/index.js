const router = require('express').Router();
const apiRoutes = require('./api');
const Metro = require("../models/User");
const Metro = require("../models/Thought");

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;