## Set-up
#### Cloning an existing project from git
1. Clone the project files into the current folder: 
   ```git clone https://https://github.com/ikoroleva/invoicing-app.git```
2. Install vendor libraries: `composer install`
3. Make .env: `cp .env.example .env`
4. Generate application key `php artisan key:generate`

#### Virtual host configuration
5. Into the **hosts** file add a line: `127.0.0.1  www.invoicing-app.test`
6. Add configuration of the new virtual host (**vhosts.conf**):
```
<VirtualHost *:80>
    ServerName www.invoicing-app.test
    DocumentRoot "C:\web\final-project\invoicing-app\public"
    Header set Access-Control-Allow-Origin "*"
    Header set Cache-Control "no-cache, must-revalidate"
</VirtualHost>
```
#### Create a database
7. Create a database **invoicing-db** using phpMyAdmin or the command line.
8. Configure the database connection in **.env** using the DB_ settings.
`DB_DATABASE=invoicing-db`
#### Frontend compilation
9. Run `npm install`
10. Make sure to configure the APP_URL setting in **.env** with the correct URL: 
`APP_URL=http://www.invoicing-app.test`
11. Run `npm run watch`
