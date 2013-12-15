test("Dome.fn.setAttribute() test", 1,function () {
  var span = dome.create("span");
  span.setAttribute("data-name", "qiu");
  
  equal(span[0].getAttribute("data-name"), "qiu", 
    "set attrbute with Dome.fn.setAttribute()");
});