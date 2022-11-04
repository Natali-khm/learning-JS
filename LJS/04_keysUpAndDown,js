function runOnKeys(func, ...code) {
  let set = new Set();

  function keyDown() {
    set.add(event.code);

    if (
      JSON.stringify(Array.from(set).sort()) === JSON.stringify(code.sort())
    ) {
      func();
      set.clear();
    }
  }

  function keyUp() {
    set.clear();
  }

  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
}
runOnKeys(() => alert("Привет!"), "KeyQ", "KeyW", "F10");
