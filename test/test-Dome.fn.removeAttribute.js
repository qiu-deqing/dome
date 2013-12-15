test("Dome.fn.removeAttribute() test", 2,function () {
  var span = dome.create("span");
  
  span.setAttribute("data-name", "qiu");
  
  equal(span[0].getAttribute("data-name"), "qiu", 
    "set attribute with Dome.fn.setAttribute()");
    
  span.removeAttribute("data-name");
  deepEqual(span[0].getAttribute("data-name"), null, 
    "remove attribute with Dome.fn.removeAttribute()");  
  
  
});