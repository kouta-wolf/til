docker compose exec postgres dropdb -U practice dvdrental
docker compose exec postgres createdb -U practice dvdrental
docker compose exec postgres pg_restore -U practice -d dvdrental /tmp/data/dvdrental_backup.tar
