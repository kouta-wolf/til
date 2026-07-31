-- q35
SELECT
  title,
  length,
  CASE
    WHEN length < 90 THEN '短編'
    WHEN length < 150 THEN '標準'
    ELSE '長編'
  END AS "長さ"
FROM film
;
