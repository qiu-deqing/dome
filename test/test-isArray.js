test("dome.isArray() test", 6,function () {
  var a1 = [],
    a2 = {},
    a3 = function () {},
    a4 = 1,
    a5 = "1",
    a6 = true;
  equal(dome.isArray(a1), true, "a1 is array");
  equal(dome.isArray(a2), false, "a2 is not array");
  equal(dome.isArray(a3), false, "a3 is not array");
  equal(dome.isArray(a4), false, "a4 is not array");
  equal(dome.isArray(a5), false, "a5 is not array");
  equal(dome.isArray(a6), false, "a6 is not array");
});