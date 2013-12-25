test("dome.getScrollOffsets() test", 1,function () {
  var offset = dome.getScrollOffsets(window);
  deepEqual(offset, {x: 0, y: 0}, " default offset: 0 0");
});