SELECT
  *
FROM
  customer
WHERE
  customer_id NOT IN (SELECT customer_id FROM payment)
;
