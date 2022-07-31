function testLogicalAnd(val) {
  if (val <= 50 && 25 <= val) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);
