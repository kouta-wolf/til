-- q39
SELECT
  title AS "映画タイトル",
  rental_rate AS "レンタル料金",
  RANK() OVER (ORDER BY rental_rate DESC) AS "料金が高い順の順位"
FROM
  film
;

-- q40
SELECT
  rating AS "レーティング",
  length AS "上映時間",
  RANK() OVER (PARTITION BY rating ORDER BY length DESC) AS "上映時間が長い順"
FROM
  film
;

-- q41
SELECT
  customer_id,
  SUM(amount) OVER (PARTITION BY customer_id ORDER BY payment_date)
FROM
  payment
;
