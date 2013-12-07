test("Dome.fn.text() test", 1,function () {

  var span;
  
  span = dome.create("span");
  
  span.text("hello");

  deepEqual(span.text(), "hello", "set and get text with Dome.fn.text()");
  
});