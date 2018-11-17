var express = require("express");
var router = express.Router();
var vetController = require("../../controllers/vetController.js");

/*
 * GET
 */
router.get("/", vetController.list);

/*
 * GET
 */
router.get("/:id", vetController.show);

/*
 * POST
 */
router.post("/", vetController.create);

/*
 * PUT
 */
router.put("/:id", vetController.update);

/*
 * DELETE
 */
router.delete("/:id", vetController.remove);

module.exports = router;