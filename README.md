# Docker Visits Web Express 
Docker container express app, which can easily be deployed to anywhare.

## Docker CMD

```sh
npm init
npm i
touch index.js

nodemon
```

## Docker CMD

```sh
docker build .
docker build -t pritamkhose/visits .

docker run -p 8080:8080 pritamkhose/visits
docker run -p 8080:8080  --platform linux/amd64 pritamkhose/visits

docker run -entrypoint="/bin/bash" -p 8080:8080  -i pritamkhose/visits


docker push pritamkhose/visits
docker pull pritamkhose/visits

docker run -it pritamkhose/visits sh

docker logs b6c2555db0ef
docker stop b6c2555db0ef
docker start b6c2555db0ef
docker rmi Image b6c2555db0ef
docker rm b6c2555db0ef
```

## docker-compose CMD

```sh
docker-compose --version
docker-compose ps

docker-compose build

docker-compose up
docker-compose up -d

docker-compose down
```

* [Docker restart policy](https://docs.docker.com/config/containers/start-containers-automatically/)


## Redis CMD
* [Install redis on Mac OS](https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/)
* [npm redis](https://www.npmjs.com/package/redis)

```sh
brew install redis
redis-cli --version
redis-server

brew services start redis
brew services info redis
brew services stop redis

redis-cli
lpush demos redis-macOS-demo
rpop demos
exit

```
