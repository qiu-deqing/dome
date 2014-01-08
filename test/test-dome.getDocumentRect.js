test("dome.getDocumentRect() test", 2,function () {
  var rect = dome.getDocumentRect();
  ok(rect.width > 1, "get width");
  ok(rect.height > 1, "get height");
});