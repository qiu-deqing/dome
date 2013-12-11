test("dome.toggleClass() test", 3,function () {
  var span = document.createElement("span");

  equal(dome.hasClass(span, "hello"), false, "test class before dome.toggleClass()");
  
  dome.toggleClass(span, "hello");
  equal(dome.hasClass(span, "hello"), true, "test class after dome.toggleClass() ");
  
  dome.toggleClass(span, "hello");
  equal(dome.hasClass(span, "hello"), false, "test class after dome.toggleClass()");
});