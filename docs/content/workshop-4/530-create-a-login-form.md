---
title: Create a Login Form
url: workshop-4/create-a-login-form/
weight: 530
menu:
  main:
    parent: "Workshop 4: Vue.js"
    identifier: Create a Login Form
---

With the Cognito Vuex Module in place, let's continue with creating a login form.

Open `mic-workshops/workshops/04/src/components/Login.vue`.

There's already a `template` and a `script` section setup. We'll continue on the `script` section.

```javascript
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    form: false,
    username: undefined,
    password: undefined,
    loading: false,
    isError: false
  }),
  computed: mapGetters('Cognito', ['isLoggedIn']),
  methods: {
    async login () {
      // Implement me!
    },
    async logout () {
      // Implement me!
    }
  }
}
```

We'll start to implement the `login()` method. To do this we need the `signInUser()` action from the Cognito Vuex Module. We'll utilize the [mapActions](https://vuex.vuejs.org/api/#mapactions) Vuex helper to inject the required action into our Login-component:

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser']), // Inject 'signInUser' from Cognito module into our component
  async login () {
    // Implement me!
  },
  async logout () {
    // Implement me!
  }
}
```

Next, call the method in `login()`:

```javascript
methods: {
  ...mapActions('Cognito', ['signInUser']), // Inject 'signInUser' from Cognito module into our component
  async login () {
    this.loading = true
    this.isError = false
    try {
      // Call 'signInUser' to login our user
      await this.signInUser({
        username: this.username,
        password: this.password
      })
    } catch (e) {
      this.isError = true
    } finally {
      this.loading = false
    }
  }
}
```