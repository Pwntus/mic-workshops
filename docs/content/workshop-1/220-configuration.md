---
title: Configuration
url: workshop-1/configuration/
weight: 220
menu:
  main:
    parent: "Workshop 1: Login"
    identifier: Configuration
---

You should now have a clone of a stub project where we will continue to write code for our first API request.

Open `index.js`. You should see the following content:

```javascript
// mic-workshops/workshops/01/index.js

const axios = require('axios') // HTTP library

// Insert variables
const API_URL = ''
const API_KEY = ''
const USERNAME = ''
const PASSWORD = ''

// Init HTTP client
const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Attach required 'x-api-key' header with every request
    'x-api-key': API_KEY
  }
})

const main = async () => {
  // Implement me!
}

// Invoke our program
main()
```

## Configure

The first step is to find out the `API_URL` and the `API_KEY`. Every request must have at least the `x-api-key` header included in order for the API to serve the request. I'll describe later how to obtain these values, but you may use the ones listed below for now:

Variable | Value
--- | ---
API_URL | ``
API_KEY  | `< from your provider >`
USERNAME | `< your MIC username >`
PASSWORD | `< your MIC password >`

Insert the values into your program:

```javascript
const API_URL  = ''
const API_KEY  = ''
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'
```
