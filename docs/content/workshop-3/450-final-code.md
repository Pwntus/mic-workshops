---
title: Final Code
url: workshop-3/final-code/
weight: 450
menu:
  main:
    parent: "Workshop 3: MQTT Realtime"
    identifier: MQTT Final Code
---

```javascript
// mic-workshops/workshops/03/index.js

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

    // If an error occurs
    MQTTClient.on('error', e => {
      console.error('MQTT error:', e)
    })

    // If a reconnect happens
    MQTTClient.on('reconnect', () => {
      console.error('MQTT reconnect, check topic')
    })

    // Incoming message
    MQTTClient.on('message', (topic, message) => {
      console.log('MQTT message: ', JSON.parse(message.toString('utf-8')))
    })

    // Subscribe to a topic after connect
    MQTTClient.on('connect', () => {
      MQTTClient.subscribe('thing-update/domain/path/of/a/thing/0000123321')
    })
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```