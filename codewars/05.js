function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";
  let obj = {};
  for (let item of listOfArt) {
    let arrItem = item.split(" ");
    if (obj[arrItem[0][0]]) obj[arrItem[0][0]] += +arrItem[1];
    else obj[arrItem[0][0]] = +arrItem[1];
  }

  let arr = listOfCat.map((categ) => {
    if (!obj[categ]) return `(${categ} : 0)`;
    else return `(${categ} : ${obj[categ]})`;
  });

  return arr.join(" - ");
}

let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B", "C", "D"];
stockList(b, c);
