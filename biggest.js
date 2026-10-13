const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "samples");
const ranked = fs
  .readdirSync(folder)
  .map((name) => {
    const full = path.join(folder, name);
    return { name, size: fs.statSync(full).size, file: fs.statSync(full).isFile() };
  })
  .filter((row) => row.file)
  .sort((a, b) => b.size - a.size)
  .slice(0, 3);

for (const row of ranked) {
  console.log(`${row.name}  ${row.size} bytes`);
}
