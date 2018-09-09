const AWSMqtt = require('aws-mqtt-client')
const API = require('./api.class.js')
const myApi = new API()

// Insert variables
const IOT_ENDPOINT = ''
const AWS_REGION = ''
const USERNAME = ''
const PASSWORD = ''

const main = async () => {
  try {
    await myApi.login({
      username: USERNAME,
      password: PASSWORD
    })

    // Implement me!
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
