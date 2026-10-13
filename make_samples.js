const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "samples");
fs.mkdirSync(out, { recursive: true });

const alphabet = "abcdefghijklmnopqrstuvwxyz \n";
for (let i = 1; i <= 15; i++) {
  const length = 40 + Math.floor(Math.random() * 3961);
  let text = "";
  for (let n = 0; n < length; n++) {
    text += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  const name = `sample_${String(i).padStart(2, "0")}.txt`;
  fs.writeFileSync(path.join(out, name), text, "utf8");
}

console.log(`Wrote 15 files in ${out}`);
