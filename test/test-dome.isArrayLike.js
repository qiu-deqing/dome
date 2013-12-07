test("dome.isArrayLike() test", 7,function () {
  var a1 = [],
    a2 = {},
    a3 = function () {},
    a4 = 1,
    a5 = "1",
    a6 = true,
    a7 = {},
    i;
  

  equal(dome.isArrayLike(a1), true, "a1 is array like");
  equal(dome.isArrayLike(a2), false, "a2 is not array like");
  equal(dome.isArrayLike(a3), false, "a3 is not array like");
  equal(dome.isArrayLike(a4), false, "a4 is not array like");
  equal(dome.isArrayLike(a5), false, "a5 is not array like");
  equal(dome.isArrayLike(a6), false, "a6 is not array like");

  for (i = 0; i < 5; ++i) {
    a7[i] = i;
  } // end for
  a7.length = 5;
  equal(dome.isArrayLike(a7), true, "a7 is  array like");
});