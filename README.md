## Summary
やること
- できるだけ単体テストを書く
- テストを書きやすい設計にする（特にアプリケーションロジック）

やらないこと
- デザイン

## frontend
### vscode debugger
docker起動後にpackageを一部書き換える（npm iの後に毎回）
```
npm run patch:debug:port
```

## Hasura server
### db setup
```
docker-compose up
```

```
$ npm run db:console
http://localhost:9695/

docer compose up（ローカルでDockerをつかってHasuraを利用した時）
docker composeで立ち上げた時に自動で起動されるconsoleは
http://localhost:8080/

コマンド hasura consoleで立ち上げた時に出来るconsole
http://localhost:9695/
この２つは別物です。

たとえば、データベースのテーブルを作ってみます
Hasura console でテーブルを作成すると
/hasura/migrations
とディレクトリに書き込まれます。

http://localhost:9695/
で作るとマイグレーションファイル等に反映されます。

http://localhost:8080/
で作るとマイグレーションファイル等には反映されません
```

## firebase
### firebase認証する
```
docker compose run --rm firebase firebase login --no-localhost
```
