# Web - CMS

This repository contains the code for the CMS or Content Management System to serve manageable content to be rendered by the [web-frontend](https://github.com/starpep-web/web-frontend).

## Requirements

In order to develop for this repository you need:

* [Node.js v20.18.0](https://nodejs.org/en) (but any `v20` should work fine)
* [Docker](https://www.docker.com/products/docker-desktop/)

## Development

First, clone this repository:

```bash
git clone https://github.com/starpep-web/web-cms
```

Install the dependencies:

```bash
npm install
```

Create an `.env` file with the following contents:

```text
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified

DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=tobemodified
```

Run the `develop` script:

```bash
npm run develop
```

And done, the service should be reachable at `http://localhost:1337/admin`.

### First Time Setup

The first time you start the Strapi development server you will be prompted to create an account. Once you have one set up, you should head over to `Settings` > `API Tokens` and create a new `Read-only` token with no expiration. This token should be used to connect Strapi to [web-frontend](https://github.com/starpep-web/web-frontend). For more information, check out the instructions for that repo to understand where to use the generated API key. 

## Building

If you're developing this on your local machine, consider building the Docker image with the following command:

```bash
docker build -t local-starpep/web-cms:latest .
```

You can create a new container to try it out with the following command:

```bash
docker run -it --rm -p 1337:1337 local-starpep/web-cms:latest
```

And done, the service should be reachable at `http://localhost:1337/admin`.

## Production

Consider checking this [docker-compose.yml](https://github.com/starpep-web/env-production/blob/main/docker-compose.yml) for an example on how to run this image in production.
