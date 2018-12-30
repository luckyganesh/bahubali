const fs = require("fs");
const Table = require("cli-table");
let data = fs.readFileSync("./report.json", "utf8");
data = JSON.parse(data);
const head = [
  "UserName",
  "ShaId",
  "NoOfCommits",
  "MochaTests",
  "Coverage",
  "BahubaliTests"
];
const table = new Table({ head });

data.map(user => {
  let MochaTests = user.MochaTestsPassed + " / " + user.MochaTestsTotal;
  let BahubaliTests = user.TestsPassed + " / " + user.TotalTests;
  table.push([
    user.userName,
    user.shaID,
    user.noOfCommits,
    MochaTests,
    user.coverage,
    BahubaliTests
  ]);
});

console.log(table.toString());