const Issue = require("../models/Issue");

exports.getIssues = (req, res) => {
  Issue.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.createIssue = (req, res) => {
  Issue.create(req.body, err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Issue created" });
  });
};

exports.updateIssueStatus = (req, res) => {
  Issue.updateStatus(req.params.id, req.body.status, err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Status updated" });
  });
};
