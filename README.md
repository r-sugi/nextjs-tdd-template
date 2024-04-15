## frontend
```
npm ci
```

http://localhost:3000 にアクセスする


## Hasura server
### db setup
```
docker-compose up
```

http://localhost:8080/console にアクセスする

### db schema export
手動でdbのスキーマを変更したのちに実行する。
スキーマをコードとして出力する。
```
hasura CLI をインストールしておく

ディレクトリへ移動する
cd /db

エクスポートする
hasura metadata export
```
