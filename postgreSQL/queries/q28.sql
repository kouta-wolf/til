CREATE VIEW practice.customer_payments AS
SELECT
  CONCAT(first_name, ' ', last_name) AS "顧客名",
  payment.amount AS "支払金額"
FROM
  payment
INNER JOIN
  customer
ON
  payment.customer_id = customer.customer_id
;
