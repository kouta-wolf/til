FROM php:8.4-cli

RUN docker-php-ext-install pdo_mysql

RUN apt-get update && apt-get install -y msmtp-mta && rm -rf /var/lib/apt/lists/*

COPY ./msmtprc /etc/msmtprc

CMD ["/usr/local/bin/php", "--server", "0.0.0.0:8000", "--docroot", "/my-work"]
