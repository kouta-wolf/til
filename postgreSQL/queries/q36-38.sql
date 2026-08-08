-- q36
SELECT first_name FROM customer
UNION
SELECT first_name FROM staff
;

-- q37
SELECT first_name FROM customer
UNION ALL
SELECT first_name FROM staff
;

-- q36とq37の比較
SELECT COUNT(*) FROM
(SELECT first_name FROM customer
UNION
SELECT first_name FROM staff)
; -- 591

SELECT COUNT(*) FROM
(SELECT first_name FROM customer
UNION ALL
SELECT first_name FROM staff)
; -- 601

-- q38
SELECT customer_id FROM customer
EXCEPT
SELECT customer_id FROM payment
; -- Nodata
