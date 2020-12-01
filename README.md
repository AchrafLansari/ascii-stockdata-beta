Welcome!

## Description

API that prints out historical stock data as a basic ASCII line chart for a given stock symbol.

## Prerequisites

1. Make sure you have these installed on your machine:
    1. [Node](https://nodejs.org/en/)
    2. [Yarn](https://yarnpkg.com/en/docs/install) (optional)
    3. [Redis](https://redis.io/topics/quickstart) (recommended)
2. Follow the setup instructions below.

## Setup

1. Clone this repo to your local machine.
2. Run `yarn` (or `npm install`).
3. Run `nodemon src/index.js` to start the server in dev mode.

## Open Endpoints

Open endpoints require no Authentication.

* [Ascii](ascii.md) : `GET /ascii?symbol={symbol}&since={since}&until={until}&price={price}`

## Notes




