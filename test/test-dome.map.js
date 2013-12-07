test("dome.map() test", 1,function () {
  var scores = [1, 1, 1, 1],
    users = [
      {score: 1},
      {score: 1},
      {score: 1},
      {score: 1}
    ],
    result;
  
  result = dome.map(users, function (d, i) {
    return d.score;
  });

  deepEqual(result, scores, "map score from user with dome.map()");
  
});