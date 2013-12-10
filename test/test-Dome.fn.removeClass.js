test("Dome.fn.remove() test", 3,function () {

  var span;
  
  span = dome.create("span");
  
  ok(span[0].className.search("hello") === -1, "element has no class hello before addClass");
  
  span.addClass("hello");
  
  ok(span[0].className.search("hello") !== -1, "add class with addClass");
  
  span.removeClass("hello");
  
  ok(span[0].className.search("hello") === -1, "element has no class hello after removeClass");

});