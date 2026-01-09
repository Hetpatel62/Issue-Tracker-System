const db = require("../config/db");

exports.getAll = callback => {
  db.all("SELECT * FROM issues", [], callback);
};

exports.create = (issue, callback) => {
  const { title, description, priority } = issue;
  db.run(
    "INSERT INTO issues (title, description, priority, status) VALUES (?, ?, ?, 'Open')",
    [title, description, priority],
    callback
  );
};

exports.updateStatus = (id, status, callback) => {
  db.run(
    "UPDATE issues SET status = ? WHERE id = ?",
    [status, id],
    callback
  );
};
