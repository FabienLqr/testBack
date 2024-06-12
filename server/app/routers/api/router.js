const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const personRouter = require('./person/router');

router.use("/items", itemsRouter);
router.use('/person', personRouter);

/* ************************************************************************* */

module.exports = router;
