test("dome.create() test", 3,function () {
  var div,
    p,
    span;
  
  div = dome.create("div");
  equal(div.length, 1, "create <div> with dome.create()");
  p = dome.create("p");
  equal(p.length, 1, "create <p> with dome.create()");
  span = dome.create("span");
  equal(span.length, 1, "create <span> with docme.create()");
  
});