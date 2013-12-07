test("dome.selectAll() test", 2,function () {
  var body,
    html;
  body = dome.selectAll("body");
  equal(body.length, 1, "dome.selectAll('body') return <body> wrapped in Dome");
  
  html = dome.selectAll("html");
  equal(html.length, 1, "dome.selectAll('html') return <html> wrapped in Dome");
});