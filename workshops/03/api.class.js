'use strict';
const AWS = require('aws-sdk');
const axios = require('axios');

// Config
const API_URL = '';
const API_KEY = '';

module.exports = class API {
  constructor () {
    // Create an Axios instance
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        // Attach required 'x-api-key' header with every request
        'x-api-key': API_KEY
      }
    });
    this.credentials = null;
    this.AWS = AWS;
  }

  async login ({ username, password }) {
    try {
      let response = await this.api({
        method: 'post',
        url: '/auth/login',
        data: {
          userName: username,
          password: password
        }
      });
      this.credentials = response.data.credentials;

      // Add credentials headers for consecutive API calls
      this.api.defaults.headers.common['Authorization'] = this.credentials.token;
      this.api.defaults.headers.common['identityId'] = this.credentials.identityId;

      return true;
    } catch (e) {
      throw e;
    }
  }

  async createCognitoIdentity (token) {
    try {
      this.AWS.config.region = AWS_REGION
      this.AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: AWS_IDENTITY_POOL,
        Logins: {
          [`cognito-idp.${AWS_REGION}.amazonaws.com/${AWS_USER_POOL}`]: token
        }
      })
      await this.AWS.config.credentials.getPromise()

      return this.AWS.config.credentials
    } catch (e) {
      throw e;
    }
  }

  logout () {
    // Clear credentials and headers
    this.credentials = null;
    this.api.defaults.headers.common['Authorization'] = null;
    this.api.defaults.headers.common['identityId'] = null;
  }

  async invoke (options) {
    try {
      // Pipe options to the Axios instance
      return await this.api(options);
    } catch (e) {
      // TODO: refresh token if expired and retry
      throw e;
    }
  }
}
