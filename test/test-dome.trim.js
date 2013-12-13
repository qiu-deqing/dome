test("dome.trim() test", 6,function () {
  equal(dome.trim("aaa"), "aaa", "tirm string with dome.trim()");
  equal(dome.trim("\taaa"), "aaa", "tirm string with dome.trim()");
  equal(dome.trim("aaa "), "aaa", "tirm string with dome.trim()");
  equal(dome.trim("aaa\n"), "aaa", "tirm string with dome.trim()");
  equal(dome.trim("aaa  "), "aaa", "tirm string with dome.trim()");
  equal(dome.trim("\taaa\t"), "aaa", "tirm string with dome.trim()");
});