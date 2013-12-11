test("dome.hasClass() test", 2,function () {
  var span;
  span = dome.create("span");
  
  span.addClass("hello");
  equal(dome.hasClass(span[0], "hello"), true, "test class of element with dome.hasClass()");
  equal(dome.hasClass(span[0], "nice"), false, "test class of element with dome.hasClass()");
});