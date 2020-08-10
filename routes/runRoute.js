const express = require("express");

const router = express.Router();

const run = require("../controllers/runController.js");

//router.post("/run", run.create);

router.get("/run", run.read);

// router.delete("/run/:id", run.delete);

router.put("/run/:id", run.update);

module.exports = router;
