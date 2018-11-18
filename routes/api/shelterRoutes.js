var express = require("express");
var router = express.Router();
var shelterController = require("../../controllers/shelterController.js");

/*
 * GET
 */
router.get("/", shelterController.list);

/*
 * GET
 */
router.get("/:id", shelterController.show);

/*
 * POST
 */
router.post("/", shelterController.create);

/*
 * PUT
 */
router.put("/:id", shelterController.update);

/*
 * DELETE
 */
router.delete("/:id", shelterController.remove);

module.exports = router;
