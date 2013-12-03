test("Array.prototype.forEach() test", 2,function () {
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
  scores.forEach(function (d, i) {
    totalScore += d;
  });
  equal(totalScore, 5, "sum integer array with Array.prototype.forEach");
  
  totalUserScore = 0;
  users.forEach(function (d, i) {
    totalUserScore += d.score;
  });
  equal(totalUserScore, 4, "sum object array field with Array.prototype.forEach");
});