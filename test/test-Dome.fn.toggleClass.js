test("Dome.fn.toggleClass() test", 3,function () {

  var span;
  
  span = dome.create("span");
  
  ok(span[0].className.search("hello") === -1, "element has no class hello before toggleClass");
  
  span.addClass("hello");
  
  ok(span[0].className.search("hello") !== -1, "has class after toggleClass");
  
  span.removeClass("hello");
  
  ok(span[0].className.search("hello") === -1, "element has no class hello after toggleClass");

});