var express = require("express");
var router = express.Router();
var ownerController = require("../../controllers/ownerController.js");

/*
 * GET
 */
router.get("/", ownerController.list);

/*
 * GET
 */
router.get("/:id", ownerController.show);

/*
 * POST
 */
router.post("/", ownerController.create);

/*
 * PUT
 */
router.put("/:id", ownerController.update);

/*
 * DELETE
 */
router.delete("/:id", ownerController.remove);

module.exports = router;
