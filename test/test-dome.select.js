test("dome.select() test", 2,function () {
  var body,
    html;
  body = dome.select("body");
  equal(body.length, 1, "dome.selectAll('body') return <body> wrapped in Dome");
  
  html = dome.select("html");
  equal(html.length, 1, "dome.selectAll('html') return <html> wrapped in Dome");
});