const express = require("express")
const router = express.Router()

var process = require("../controllers/process.controller");

router.post("/add", process.add);
router.post("/update/:id", process.update);
router.get("/find/:id", process.find);
router.get("/all", process.all);
router.delete("/remove/:id", process.remove);

router.post("/insert-or-update", process.findOneAndUpdate);

module.exports = router