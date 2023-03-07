export default {
    name: 'TheLoginComponent',

    template: 
    `
    <section class="container">
      <div class="jumbotron">
          <h1>Welcome to Flashblack!</h1>
          <p class="lead">
          Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
          </p>
      </div>
  
      <section class="log-in">
        <label class="sr-only" for="inlineFormInputName">Name</label>
        <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
  
        <label class="sr-only" for="inlineFormPassword">Name</label>
        <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
      </section>
  
      <button
          type="submit" 
          class="btn btn-primary login-submit"
          @click="tryLogIn"
        >Go!
      </button>
    </section>
  `,

  data() {
    return {
      username: '',
      password: '',
      authenticated: false
    }
  },

  methods: {
    tryLogIn() {
      debugger;
    }
  }
}