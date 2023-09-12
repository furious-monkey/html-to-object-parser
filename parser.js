import fs from "fs";
import process from "process";
import markup2json from "markup2json";

function getText(file) {
  let str = fs.readFileSync(file, "utf8");
  str = str.replace(/(\r\n|\n|\r)/gm, "");
  console.log(markup2json(str));
}

const file = process.argv[2];
getText(file);
