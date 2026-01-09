const app = require("./app");
const fs = require("fs");
const db = require("./config/db");

const initSQL = fs.readFileSync("./backend/init_db.sql", "utf8");
db.exec(initSQL);

app.listen(3000, () =>
  console.log("Issue Tracker running on http://localhost:3000")
);
