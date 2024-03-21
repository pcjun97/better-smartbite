const fs = require("fs");
const input = fs.readFileSync("main.user.js");
const lines = input
  .toString()
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => !line.startsWith("//"));
const output = `javascript:${encodeURIComponent(lines.join("\n").trim())}`;
console.log(output);
