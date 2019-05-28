# express-starter

This is express-starter kit.

# Getting Started

This api service architecture is Node.js, Express.js, es6.

## Prepared

### Install

- Node.JS : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Docker-for-mac : [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)
- Docker-for-Window : [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-mac/install/)

# Create development environment

```
git clone https://github.com/BBackJK/express-starter.git
cd express-starter/
npm install
```

## Start

### Start with docker

in express-starter folder..

```
// build project with docker
docker build -t express-starter .

// check images
docker images

// run api container
docker run -d -p 6000:6000 --name api express-starter

// check container
docker ps -a
```

## Other Scripts

```
npm run lint // check eslint
npm run trans // transpile babel file
```

it you want to know the api of this project, you connect http://localhost:6000/docs
