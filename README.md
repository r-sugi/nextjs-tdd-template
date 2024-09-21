## Summary
やること
- できるだけ単体テストを書く
- テストを書きやすい設計にする（特にアプリケーションロジック）

やらないこと
- デザイン

## frontend
### 開発サーバー
初回起動時のみ、Download処理が走る
```
app_dev  |  ✓ Starting...
app_dev  |    Downloading swc package @next/swc-linux-arm64-gnu...
app_dev  |    Downloading swc package @next/swc-linux-arm64-musl...
```

### npm i時
(npm i or docker compose build)後、node_modulesをスクリプトで一部書き換える
```
下記のようなエラーが出たら
app_dev  | For help, see: https://nodejs.org/en/docs/inspector
app_dev  |    the --inspect option was detected, the Next.js router server should be inspected at port 0.
```
↓
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
