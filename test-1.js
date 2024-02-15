const { mkRow } = require("./rowmaker");
let arr = ["a", "b", "c", "1,200,300"];
console.log("<!-- RowMaker Test 1 -->");
console.log(mkRow(arr, "td"));
console.log("<!-- RowMaker Test 2 -->");
let jahre = [1, 2, 3, 98, 99, 100, 101, 1800, 1801, 1899, 1900];
console.log(
  mkRow(
    jahre.map((x) => {
      return x % 100 ? Math.floor(x / 100) + 1 : x / 100;
    }),
    "td",
  ),
);
