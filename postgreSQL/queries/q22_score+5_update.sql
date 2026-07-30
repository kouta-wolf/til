BEGIN;

UPDATE practice.students SET score = score + 5 WHERE score < 80;

SELECT * FROM practice.students;

COMMIT;
-- ROLLBACK;
