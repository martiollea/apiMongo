const { Router } = require("express");
const userControllers = require("./user.controllers");

const router = Router();

router.get("/", userControllers.findMany);
router.post("/", userControllers.createOne);

module.exports = router;
