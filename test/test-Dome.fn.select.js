test("Dome.fn.select() test", 1,function () {

  var doc = dome.select(document);
  
  var body = doc.select("body");

  ok(body.length === 1, "select with Dome.fn.select");
  
});