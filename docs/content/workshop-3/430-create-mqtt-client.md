---
title: Create MQTT Client
url: workshop-3/create-mqtt-client/
weight: 430
menu:
  main:
    parent: "Workshop 3: MQTT Realtime"
    identifier: Create MQTT Client
---

We now have all the necessary info to actually create the MQTT client. We'll use a package called `aws-mqtt-client` which works both in the browser and Node.js. You can find the full documentation for the [aws-mqtt-client package here](https://github.com/jimmyn/aws-mqtt-client).

Continue by adding code to `index.js`, after we've logged in:

```javascript
// Instantiate a new MQTT client with configurations
let MQTTClient = new AWSMqtt({
  region: AWS_REGION,
  accessKeyId: myApi.credentials.accessKeyId,
  secretAccessKey: myApi.credentials.secretAccessKey,
  sessionToken: myApi.credentials.sessionToken,
  endpointAddress: IOT_ENDPOINT,
  maximumReconnectTimeMs: 8000,
  protocol: 'wss'
})
```

You can see here that we're using `AWS_REGION` and `IOT_ENDPOINT` from the previous page in addition to `accessKeyId`, `secretAccessKey` and `sessionToken` from our HTTP API client.

## Complete Code

```javascript
const AWSMqtt = require('aws-mqtt-client').default
const API = require('./api.class.js')
const myApi = new API()

// Insert variables
const IOT_ENDPOINT = 'a3k7odshaiipe8.iot.eu-west-1.amazonaws.com'
const AWS_REGION = 'eu-west-1'
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'

const main = async () => {
  try {
    await myApi.login({
      username: USERNAME,
      password: PASSWORD
    })

    // Instantiate a new MQTT client with configurations
    let MQTTClient = new AWSMqtt({
      region: AWS_REGION,
      accessKeyId: myApi.credentials.accessKeyId,
      secretAccessKey: myApi.credentials.secretAccessKey,
      sessionToken: myApi.credentials.sessionToken,
      endpointAddress: IOT_ENDPOINT,
      maximumReconnectTimeMs: 8000,
      protocol: 'wss'
    })
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```
