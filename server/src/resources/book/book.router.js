const { Router } = require("express");
const bookControllers = require("./book.controllers");

const router = Router();

router.get("/", bookControllers.findMany);
router.post("/", bookControllers.createOne);
router.put("/:id", bookControllers.updateOne);
router.delete("/:id", bookControllers.deleteOne);
router.get("/:id", bookControllers.findOne);

module.exports = router;
