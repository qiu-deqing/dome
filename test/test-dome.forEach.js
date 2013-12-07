test("dome.forEach() test", 2,function () {
  var scores = [1, 1, 1, 1, 1],
    totalScore,
    users = [
      {score: 1},
      {score: 1},
      {score: 1},
      {score: 1}
    ],
    totalUserScore;
  
  totalScore = 0;
  dome.forEach(scores, function (d, i) {
    totalScore += d;
  });
  equal(totalScore, 5, "sum integer array with dome.forEach()");
  
  totalUserScore = 0;
  dome.forEach(users, function (d, i) {
    totalUserScore += d.score;
  });
  equal(totalUserScore, 4, "sum object array field with dome.forEach()");
});