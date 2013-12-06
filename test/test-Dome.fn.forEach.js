test("Dome.fn.forEach() test", 1,function () {
  var result = [];
  
  var body = dome.selectAll("body");
  
  body.map(function (d, i) {
    result.push(d.tagName);
  });

  deepEqual(result, ["BODY"], "get tag names use Dome.fn.map()");
  
});