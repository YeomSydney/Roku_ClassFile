export default {
    name: 'TheKidsHomePageComponent',

    template:
    `
    <section>
        <h1>This is the kids home page!</h1>
    </section>
    `,

    created() {
        // fetch('hit the IMDb API using the reference video I gave you last semester')
        // This will load video content, your video thumbnail, etc.

        // Go to rapidAPI(https://rapidapi.com/), get a key, find the IMDb API and start exploring.
        // Follow the video: https://www.youtube.com/watch?v=ytNyibPQFhw
        
        // fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=a%20e%20i', options)
	    //     .then(response => response.json())
        //     .then(data => {
        //         const list = data.d;

        //         list.map((item) => {
        //             // console.log(item)

        //             const name = item.l;
        //             const poster = item.i.imageUrl;
        //             const released = item.y;
        //             const movie = 
        //             `<li class="each-movie">
        //                 <img src="${poster}">
        //                 <h2>${name}</h2>
        //                 <h3>${released}</h3>
        //             </li>`
        //             document.querySelector('.movie-list').innerHTML += movie;
        //         })
        //     })
        //     .catch(err => console.error(err));
    }
}

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd66fcf92e0mshd306243da2a84f1p185adajsn6d81fb446ed8',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };