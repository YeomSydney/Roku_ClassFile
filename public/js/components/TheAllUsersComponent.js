import SingleUser from './TheSingleUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template: 
    `
    <section>
        <h1>All Users Should Show Up Here</h1>
        <h2>Who's using roku?</h2>

        <section>
            <ul>
                <li v-for="user in users">
                    <user :user="user"></user>
                </li>
            </ul>
        </section>
    </section>
    `,

    created() {
        // console.log('all users component is mounted');

        // This is where you should do all of your user data retrieval
        // It has to be full fetch URL
        // ums - incoming route
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Push our users into our Vue data object so we can render a component for each user
                this.users = data;
            })
        .catch(error => console.error(error));
    },

    data() {
        return {
            users: []
        }
    },

    components: {
        user: SingleUser
    }
}