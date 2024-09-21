FROM debian:bullseye-slim

RUN apt-get update && \
apt-get install -y --no-install-recommends curl openjdk-17-jdk && \
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
apt-get install -y --no-install-recommends nodejs=20.4.0 && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*

RUN npm install -g firebase-tools@latest

# Dockerイメージのサイズ削減のための不要ファイル削除
RUN npm cache clean --force && \
    rm -rf /usr/local/share/.cache
