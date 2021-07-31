# GCP 基本環境建置

## PHP
```
1. sudo apt update

2. sudo apt upgrade -y

3. sudo apt install ca-certificates apt-transport-https -y 

4. wget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -

5. echo “deb https://packages.sury.org/php/ stretch main” | sudo tee /etc/apt/sources.list.d/php.list

6. sudo apt update

7. sudo apt-get install ca-certificates apt-transport-https -y

8. sudo apt-get install php7.2 php7.2-fpm php7.2-cli php7.2-common php7.2-opcache php7.2-mbstring php7.2-mysql php7.2-zip php7.2-xml -y

9. sudo systemctl start php7.2-fpm

10. sudo systemctl enable php7.2-fpm
```

[PHP架設參考1](https://www.linuxbabe.com/ubuntu/install-lemp-stack-nginx-mariadb-php7-2-ubuntu-18-04-lts)
[PHP架設參考2](https://www.rosehosting.com/blog/how-to-install-php-7-2-on-debian-9/)

## Nginx
* 部分系統會有Nginx剛裝完就跑不動，原因是Apache卡port
  
解決方式 先停用Apache 和 完整刪除Nginx
```
1. sudo systemctl stop apache2.service
2. sudo systemctl disable apache2.service
3. sudo apt-get --purge remove nginx -y
4. sudo apt-get autoremove -y
5. dpkg --get-selections|grep nginx
6. sudo apt-get --purge remove nginx
7. sudo apt-get --purge remove nginx-common -y
8. sudo apt-get --purge remove nginx-core -y

* sudo fuser -k 80/tcp // 刪除80Port的Proccess指令

9. sudo systemctl start nginx
10. nginx 設定檔 ( 註一 ) 寫入 /etc/nginx/sites-enabled/default

```

## NodeJS
```
1. sudo apt update

2. sudo apt install nodejs

3. sudo apt update

4. sudo apt install curl

5. cd ~

6. curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

7. sudo bash nodesource_setup.sh

8. sudo apt install nodejs

```

## MySQL
```
1. sudo apt install mariadb-server mariadb-client

2. sudo systemctl start mariadb

3. sudo systemctl enable mariadb

4. sudo mysql_secure_installation
全部Y

5. sudo mysql

6. CREATE DATABASE wp_db;

7. CREATE USER 'reynold'@'localhost' IDENTIFIED BY '55660123';
localhost 是只開放給本機外連
可以給特定的 內部IP 或 外部IP 或 %=全部

8. GRANT ALL PRIVILEGES ON *.* TO 'reynold'@'localhost' WITH GRANT OPTION;

10. FLUSH PRIVILEGES;

```
## Mysql常用指令
```
* 進入Mysql
1. mysql -u root -p

連進特定IP
2. mysql --host=10.126.192.3 --user=developer --password

* 匯入匯出
3. mysqldump -u root -p chinapost > /var/www/chinapost_t.sql
4. mysqldump -h 35.194.175.118 -u petsmao -p Petsmao > /var/www/Petsmao.sql

5. mysql -u root -p babyou_t < /var/www/babyou_t.sql

* Sql 指令
查看所有使用者的權限
1. SELECT User, Host FROM mysql.user;

變更指定使用者的權限
2. UPDATE user SET host='%' WHERE User='developer';

部分Mysql預設會被裝插件 導致登入Root不用密碼
3. update mysql.user set plugin=null where user='root';
flush privileges;

更改使用者密碼
4. SET PASSWORD FOR 'dev-holywater'@'localhost' = PASSWORD('xO7mjOy3()Z%');

重啟 Mysql
5. sudo service mysql restart

```
[更高效的匯入匯出方式參考1](https://www.itread01.com/content/1547765858.html)

## Git

```
sudo apt install git
```

## Wordpress 

```
1. sudo cd /tmp

2. wget http://wordpress.org/latest.tar.gz

3. sudo tar -xvzf latest.tar.gz -C /var/www/html

4. sudo chown www-data: /var/www/html/wordpress/ -R

```
## Wordpress 相關問題
```
**Wordpress上Git**

一般會濾掉備份檔 和 媒體庫 和 快取
tar cvf bobee.tar --exclude=bobee.nownews.com/wp-content/uploads --exclude=bobee.nownews.com/wp-content/uploads2 bobee.nownews.com

.gitignore 也需要濾掉
wp-content/uploads
wp-content/uploads2
wp-content/cache
wp-content/ai1wm-backups
*.txt

* Wordpress 搬家
1.搬家如果網址會更換
需要在 wp-config.php增加
define('WP_SITEURL', 'https://domain.com');
define('WP_HOME', 'http://domain.com');

2. root密碼不見
設定的密碼必須是MD5格式
UPDATE wp_users SET user_pass = '21232f297a57a5a743894a0e4a801fc3' WHERE user_login = 'admin';

3.啟用 Wp-json
設定-固定連結-只要不要用預設網址就能啟用

4. 外掛需要FTP權限
sudo chown -R www-data:www-data /var/www/wordpress/wp-content/
再不行 就在wp-config.php增加
define('FS_METHOD', 'direct');


```

* Nginx 設定檔

```
server {
listen 80 default_server;
server_name _;
return 301 https://$host$request_uri;
}

server {
	listen 443 ssl http2;
	listen [::]:443 ssl http2;

	#如果是放cf 可以略過
	#ssl_certificate /etc/nginx/ssl/xxx.crt;
	#ssl_certificate_key /etc/nginx/ssl/xxx.key;

	server_name example.com;
	root /var/www/wordpress-test/wordpress-init;
	index index.php index.html index.htm index.nginx-debian.html;

location / {
	try_files $uri $uri/ /index.php$is_args$args;
	#打開cors
	add_header Access-Control-Allow-Origin *;
	add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
	add_header Access-Control-Allow-Headers 'DNT,X-Mx-	ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
	if ($request_method = 'OPTIONS') {
		return 204;
	}
}
location ~ \.php$ {
	include snippets/fastcgi-php.conf;
	fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
location ~ /\.ht {
deny all;
}
	if (!-e $request_filename) {
		rewrite ^.*$ /index.php last;
	}
}

#NodeJS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    
    ssl_certificate /etc/nginx/ssl/linxnote-club.crt;
    ssl_certificate_key /etc/nginx/ssl/linxnote-club.key;

    server_name line-chatbot.linxnote.club;

 location / {
  proxy_pass http://127.0.0.1:8080;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
 }

}

```