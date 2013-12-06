test("Dome.fn.map() test", 1,function () {
  var result ;
  
  var body = dome.selectAll("body");
  
  result = body.map(function (d, i) {
    return d.tagName;
  });

  deepEqual(result, ["BODY"], "get tag names use Dome.fn.map()");
  
});