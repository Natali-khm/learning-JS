function score(dice) {
  let count = 0;
  let obj = {};

  let amount = {
    1: { 1: 100, 2: 200, 3: 1000, 4: 1100, 5: 1200 },
    2: { 1: 0, 2: 0, 3: 200, 4: 200, 5: 200 },
    3: { 1: 0, 2: 0, 3: 300, 4: 300, 5: 300 },
    4: { 1: 0, 2: 0, 3: 400, 4: 400, 5: 400 },
    5: { 1: 50, 2: 100, 3: 500, 4: 550, 5: 600 },
    6: { 1: 0, 2: 0, 3: 600, 4: 600, 5: 600 },
  };

  for (let numb of dice) {
    if (!obj[numb]) obj[numb] = 1;
    else obj[numb]++;
  }

  for (let numb in obj) {
    count += amount[numb][obj[numb]];
  }

  return count;
}
