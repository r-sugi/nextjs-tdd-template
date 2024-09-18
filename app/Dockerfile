# ベースイメージとしてNode.js 18.19.0-slimを使用
FROM node:18.19.0-slim

# 作業ディレクトリを設定
WORKDIR /app

# アプリケーションファイルをすべてコピー
COPY app .

# 依存関係をインストール
RUN npm install -g npm@latest

RUN npm ci --ignore-scripts

# node_modulesディレクトリのアクセス権を変更
RUN chmod -R a+w node_modules

# TODO: post_installスクリプトを実行する(空振りするため一旦コメントアウト中)
# RUN sed -E -i 's/NODE_OPTIONS.*nodeDebugType.*/NODE_OPTIONS = `${NODE_OPTIONS} --${nodeDebugType}=0.0.0.0:9230`;/' node_modules/next/dist/cli/next-dev.js

# シェルを使用して複数コマンドを実行する npm run dev
CMD ["npm", "run", "dev"]
