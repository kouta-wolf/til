BEGIN;

UPDATE practice.students SET score = 40 WHERE name = '田中太郎';

SELECT * FROM practice.students;

COMMIT;
-- ROLLBACK
