# ベースイメージとしてNode.js 18.19.0-slimを使用
FROM node:18.19.0-slim

# 作業ディレクトリを設定
WORKDIR /app

# パッケージリストをコピー
COPY ./app/package.json ./app/package-lock.json ./

# 依存関係をインストール
RUN npm ci

# アプリケーションファイルをすべてコピー
COPY . .

# コンテナ起動時に開発サーバーを立ち上げる
CMD ["npm", "run", "dev"]
