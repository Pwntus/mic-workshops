---
title: Final Code
url: workshop-1/final-code/
weight: 260
menu:
  main:
    parent: "Workshop 1: Creating a API Client"
    identifier: Final Code
---

```javascript
// mic-workshops/workshops/01/index.js

const axios = require('axios') // HTTP library

// Insert variables
const API_URL = ''
const API_KEY = ''
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'
let API_CREDENTIALS = null

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

    // Store login credentials for later usage
    API_CREDENTIALS = response.data.credentials

    // Make a User API GET request to the /users/{userName} endpoint
    const auth_response = await api({
      method: 'get',
      url: '/users/' + USERNAME,
      
      // Add authentication headers
      headers: {
        Authorization: API_CREDENTIALS.token,
        identityId: API_CREDENTIALS.identityId
      }
    })
    console.log('User API response:', auth_response.data)
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```
