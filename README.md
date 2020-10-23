## DEMO
### Rails側
https://github.com/orcainc/homeup/pull/28481

### Nginx設定
- nginx install
```
brew install nginx
sudo vi /usr/local/etc/nginx/nginx.conf

events {
    worker_connections  16;
}

http {
    server {
        listen       4000;
        server_name  homeup.local;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $http_host;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-Server $host;
            proxy_set_header Origin http://$http_host;
            proxy_redirect off;
            proxy_ssl_session_reuse off;
            proxy_pass http://homeup.local:3000;
        }

        location /new_cms {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $http_host;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-Server $host;
            proxy_set_header Origin http://$http_host;
            proxy_redirect off;
            proxy_ssl_session_reuse off;
            proxy_pass http://homeup.local:9000;
        }

    }
}

```

- `/etc/hosts`の設定
```
127.0.0.1 homeup.local
127.0.0.1 localhost
```

### DEMOする
- rails

```
bundle
rails s
```

- node

```
yarn
yarn dev -p 9000
```

- nginx

```
sudo nginx
```

- 結果
  - `homeup.local:4000`にアクセスすると、Railsのページを表示される
  - `homeup.local:4000/new_cms`にアクセスすると、Nodeのページを表示される
    - Railsにログインした時
      - `homeup.local:4000/new_cms/pages/page1`にアクセスすると、正常に表示される
    - Railsにログインしない時
      - `homeup.local:4000/new_cms/pages/page1`にアクセスすると、401エラーになります。

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
