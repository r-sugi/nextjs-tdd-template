# ベースイメージとしてNode.js 18.19.0-slimを使用
FROM node:20.17.0-slim

# 作業ディレクトリを設定
WORKDIR /app

# アプリケーションファイルをすべてコピー
COPY app .

# 依存関係をインストール
RUN npm install -g npm@latest

RUN npm ci

# シェルを使用して複数コマンドを実行する npm run dev
CMD ["npm", "run", "dev"]
