var express = require("express");
var router = express.Router();
var catController = require("../../controllers/catController.js");

/*
 * GET
 */
router.get("/", catController.list);

/*
 * GET
 */
router.get("/:id", catController.show);

/*
 * POST
 */
router.post("/", catController.create);

/*
 * PUT
 */
router.put("/:id", catController.update);

/*
 * DELETE
 */
router.delete("/:id", catController.remove);

module.exports = router;
