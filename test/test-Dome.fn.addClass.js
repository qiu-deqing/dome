test("Dome.fn.addClass() test", 2,function () {

  var span;
  
  span = dome.create("span");
  
  ok(span[0].className.search("hello") === -1, "element has no class hello before addClass");
  
  span.addClass("hello");
  
  ok(span[0].className.search("hello") !== -1, "add class with addClass");

});