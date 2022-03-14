const express = require("express")
const router = express.Router()

var template = require("../controllers/template.controller");

router.post("/add", template.add);
router.post("/update/:id", template.update);
router.get("/find/:id", template.find);
router.get("/all", template.all);
router.delete("/remove/:id", template.remove);

module.exports = router