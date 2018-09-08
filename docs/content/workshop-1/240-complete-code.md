---
title: Complete Code
url: workshop-1/complete-code/
weight: 240
menu:
  main:
    parent: "Workshop 1: Creating a API Client"
    identifier: Complete Code
---

```javascript
// mic-workshops/workshops/01/index.js

const axios = require('axios') // HTTP library

// Insert variables
const API_URL = ''
const API_KEY = ''
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'

// Init HTTP client
const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Attach required 'x-api-key' header with every request
    'x-api-key': API_KEY
  }
})

const main = async () => {
  try {
    // Make a Auth API POST request to the /auth/login endpoint
    const response = await api({
      method: 'post',
      url: '/auth/login',

      // Add a username/password combination as payload
      data: {
        userName: USERNAME,
        password: PASSWORD
      }
    })
    console.log('Auth API response:', response.data)
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```
