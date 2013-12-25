test("dome.getViewportSize() test", 2,function () {
  var result = dome.getViewportSize(window);
  ok(result.width != 0, "window viewport width");
  ok(result.height != 0, "window viewport height");
});