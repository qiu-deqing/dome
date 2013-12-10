test("Dome.fn.addEventListener() test", 1,function () {

  var w = dome.selectAll(document);
  
  w.addEventListener("click", function () {
    console.log("click");
  });
  ok(true, "test event listener");
});