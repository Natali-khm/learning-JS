function askForMissingDetails(list) {
  let newArr = [];
  for (let obj of list) {
    for (let feat in obj) {
      if (obj[feat] === null) {
        obj.question = `Hi, could you please provide your ${feat}.`;
        newArr.push(obj);
      }
    }
  }
  return newArr;
}
