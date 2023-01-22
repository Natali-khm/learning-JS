function digitalRoot(n) {
    let result = n;
  
    while (String(result).length > 1) {
      result = [...result.toString()].map(Number).reduce((acc, el) => acc + el);
    }
  
    return +result;
  }
  
  console.log(digitalRoot(444673));