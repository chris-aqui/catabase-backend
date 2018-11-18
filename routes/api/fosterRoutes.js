var express = require("express");
var router = express.Router();
var fosterController = require("../../controllers/fosterController.js");

/*
 * GET
 */
router.get("/", fosterController.list);

/*
 * GET
 */
router.get("/:id", fosterController.show);

/*
 * POST
 */
router.post("/", fosterController.create);

/*
 * PUT
 */
router.put("/:id", fosterController.update);

/*
 * DELETE
 */
router.delete("/:id", fosterController.remove);

module.exports = router;
