FROM debian:bullseye-slim

RUN apt update && \
apt install -y --no-install-recommends curl openjdk-17-jdk && \
curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
apt install -y --no-install-recommends nodejs && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*

RUN npm install -g firebase-tools
