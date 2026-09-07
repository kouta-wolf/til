# PostgreSQL 練習

Docker上のPostgreSQLに dvdrental サンプルDBを入れてSQLを練習する環境。
`queries/` に書いたクエリを蓄積している。

接続: user=practice / db=dvdrental / ホスト側ポート 5433（コンテナ内は5432）

## 起動と復元

    docker compose up -d
    docker compose exec postgres createdb -U practice dvdrental
    docker compose exec postgres pg_restore -U practice -d dvdrental /tmp/data/dvdrental_backup.tar

## リセット

    docker compose exec postgres dropdb -U practice dvdrental

そのうえで上の createdb / pg_restore をやり直す。
