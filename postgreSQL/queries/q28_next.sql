SELECT
  *
FROM
  practice.customer_payments
WHERE
  "支払金額" > 5
ORDER BY
  "支払金額",
  "顧客名"
;
