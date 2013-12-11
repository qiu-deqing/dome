test("dome.addClass() test", 2,function () {
  var span = document.createElement("span");

  equal(dome.hasClass(span, "hello"), false, "test class before dome.addClass()");
  
  dome.addClass(span, "hello");
  equal(dome.hasClass(span, "hello"), true, "test class after dome.addClass() ");
});