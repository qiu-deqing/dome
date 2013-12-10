test("Dome.fn.selectAll() test", 1,function () {

  var doc = dome.selectAll(document);
  
  var body = doc.selectAll("body");

  ok(body.length === 1, "select with Dome.fn.selectAll");
  
});