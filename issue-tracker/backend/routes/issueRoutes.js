const express = require("express");
const router = express.Router();
const controller = require("../controllers/issueController");

router.get("/", controller.getIssues);
router.post("/", controller.createIssue);
router.put("/:id", controller.updateIssueStatus);

module.exports = router;
