SELECT
  *
FROM
  practice.students
WHERE
  score > (SELECT AVG(score) FROM practice.students)
;

