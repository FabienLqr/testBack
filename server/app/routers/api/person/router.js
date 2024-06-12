const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/personActions");

// Route to get a list of persons
router.get("/", browse);

// Route to get a specific person by ID
router.get("/:id", read);

// Route to add a new person
router.post("/", add);

module.exports = router;
