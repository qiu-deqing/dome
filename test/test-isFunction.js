test("dome.isFunction() test", 6,function () {
  var a1 = [],
    a2 = {},
    a3 = function () {},
    a4 = 1,
    a5 = "1",
    a6 = true;
  equal(dome.isFunction(a1), false, "a1 is not function");
  equal(dome.isFunction(a2), false, "a2 is not function");
  equal(dome.isFunction(a3), true, "a3 is function");
  equal(dome.isFunction(a4), false, "a4 is not function");
  equal(dome.isFunction(a5), false, "a5 is not function");
  equal(dome.isFunction(a6), false, "a6 is not function");
});