BEGIN;

UPDATE practice.students SET score = 90 WHERE name = '田中太郎';

SELECT * FROM practice.students WHERE name = '田中太郎';

COMMIT;
-- ROLLBACK;
