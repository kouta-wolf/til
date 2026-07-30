CREATE VIEW practice.students_with_upscore_80 AS
SELECT 
  * 
FROM 
  practice.students
WHERE score >= 80
;
