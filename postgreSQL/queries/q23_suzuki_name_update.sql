INSERT INTO practice.students (name, score) VALUES ('鈴木一郎', 50);

BEGIN;

UPDATE practice.students SET name = '鈴木次郎', score = 80 WHERE name = '鈴木一郎';

SELECT * FROM practice.students;

COMMIT;
-- ROLLBACK
