BEGIN;

DELETE FROM practice.students WHERE score < 60;

SELECT * FROM practice.students;

COMMIT;
-- ROLLBACK;
