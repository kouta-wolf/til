-- DELETE版だけ試す
BEGIN;
DELETE FROM practice.students; -- DELETEの方
SELECT * FROM practice.students;
ROLLBACK;
-- COMMIT;

-- truncate版だけ試す
BEGIN;
TRUNCATE TABLE practice.students; -- TRUNCATEの方
SELECT * FROM practice.students;
ROLLBACK;
-- COMMIT;
