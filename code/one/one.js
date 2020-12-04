const fs = require("fs");

const entries = {};

fs.readFile("code/one/input.txt", "utf-8", (err, data) => {
  if (data) {
    data.split("\n").map((entry) => {
      entries[entry] = 2020 - entry;
    });
  }

  // Part 1
  Object.keys(entries).forEach((entry) => {
    if (entries[entries[entry]]) {
      console.log("Part 1 : Found it");
      console.log(entries[entry] * entries[entries[entry]]);
    }
  });

  // Part 2
  Object.keys(entries).forEach((entry1) => {
    Object.keys(entries).forEach((entry2) => {
      const remaining = 2020 - entry1 - entry2;
      if (remaining > 0 && entries[remaining]) {
        console.log("Part 2 : Found it");
        // entry1 and entry2 are strings. Don't multiply them before converting...
        console.log(remaining * Number(entry1) * Number(entry2));
      }
    });
  });
});
