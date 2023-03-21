export default {
    name: 'TheUserComponent',

    props: ['user'],

    template: 
    `
    <div @click="navToHomePage" class="card rounded userpanel">
        <div class="card-body text-center">
            <img :src='"images/" + user.avatar' class="rounded-circle img-fluid">
            <p>{{user.username}}</p>
        </div>
    </div>
    `,

    methods: {
        navToHomePage() {
            console.log('this user has this access level:', this.user.permissions);

            // Every user has permissions as part of their data (this is coming form the database)
            // It's set in the permissions columns /permissions field
            // We can use that data to figure out what homepage they should have access to - it's like a rating
            // if the access level is less than 3, then they're not an adult and shouldn't see the adult home page.
            // if it's GREATER than 3, then they get access to everything. Because they ARE an adult.

            // Way 1
            // let targetHome = '';
            // if(this.user.permissions < 4) {
            //     targetHome = 'kidshome';
            // } else {
            //     targetHome = 'home';
            // }

            // Way 2
            let targetHome = (this.user.permissions < 4) ? "kidshome" : "home";

            this.$router.push({ name: targetHome });
            // debugger;
        }
    }
}