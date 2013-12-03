test("dome.extend() test", 2,function () {
  var obj = {},
    opt1 = {a: "a"},
    opt2 = {b: "b"},
    expected = {
      a: "a",
      b: "b"
    };
  dome.extend(obj, opt1, opt2);
  deepEqual(obj, expected, "extend with obj, opt1, opt2");
  dome.extend(opt1);
  deepEqual(dome.a, opt1.a, "extend Dome with one argument");
});