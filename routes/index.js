const router = require("express").Router();
const myController = require("../controllers");

router.get("/", myController.awesomeFunction);
router.get("/ttech", myController.ttechMsg);

module.exports = router;
