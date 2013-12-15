test("Dome.fn.getAttribute() test", 2,function () {
  var span = dome.create("span");
  
  span.setAttribute("data-name", "qiu");
  
  equal(span.getAttribute("data-name"), "qiu", 
    "test attribute with Dome.fn.getAttribute()");
    
  span.removeAttribute("data-name");
  deepEqual(span.getAttribute("data-name"), null, 
    "test attribute with Dome.fn.getAttribute()");  
  
  
});