const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  return arr.map((el) => `<li class="text-warning">${el}</li>`);
}

const failuresList = makeList(result.failure);
