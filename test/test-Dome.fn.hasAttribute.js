test("Dome.fn.hasAttribute() test", 2,function () {
  var span = dome.create("span");
  
  span.setAttribute("data-name", "qiu");
  
  equal(span.hasAttribute("data-name"), true, 
    "test attribute with Dome.fn.hasAttribute()");
    
  span.removeAttribute("data-name");
  deepEqual(span.hasAttribute("data-name"), false, 
    "test attribute with Dome.fn.hasAttribute()");  
  
  
});