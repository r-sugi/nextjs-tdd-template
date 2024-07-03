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

### db schema export
install hasura CLI on local PC
```
npm run db:meta:export
```

## firebase
### setup local emulator
install
```
npm i firebase-tools -g
```

start emulator
```
npm run fn:dev
```

watch code changes
```
npm run fn:watch
```
