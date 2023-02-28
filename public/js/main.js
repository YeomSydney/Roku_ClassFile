//  imports always go at the top
// import LogInPage from './components/TheLoginComponent.js';
import UsersComponent from './components/TheUsersComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';

const { createApp } = Vue;
// import the createApp method from the Vue library

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
        // the vue router will try to match these routes
        // this is what you put in the location bar in the browser
        // when you get a match, vue will render the specified component
        // { 
        //     path: '/', //browser location bar looks like this
        //     name: 'login', // for programmatic navigation
        //     component: LogInPage // the component to render
        // },

        { 
            path: '/', //browser location bar looks like this
            name: 'allusers', // for programmatic navigation
            component: AllUsersPage // the component to render
        },

        { 
            path: '/users', //browser location bar looks like this
            name: 'users', // for programmatic navigation
            component: UsersComponent // the component to render
        },
        // put a catch-all for broken routes at the very bottom of your routes stack
        // if vue router can't match a given route, it'll display a generic error component

        // { 
        //     path: '/:pathMatch(.*)*', //browser location bar looks like this
        //     name: 'error', // for programmatic navigation
        //     component: ErrorPage // the component to render
        // }

    ], // short for `routes: routes`
})

  // 5. Create and mount the root instance.
const app = Vue.createApp({
        methods: {
            tryRouterPush() {
                this.$router.push({
                    name: 'home'
                })
            } 

        }
})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
app.use(router)
app.mount('#app');