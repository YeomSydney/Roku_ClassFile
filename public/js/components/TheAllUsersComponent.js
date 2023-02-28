export default {
    name: 'TheAllUsersComponent',

    template: 
    `
    <section>
        <h1>All Users Should Show Up Here</h1>
        <h2>Who's using roku?</h2>
    </section>
    `,

    created() {
        // console.log('all users component is mounted');

        // This is where you should do all of your user data retrieval
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => console.log(data))
        .catch(error => console.error(error));
    }
}