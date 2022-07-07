import axios from 'axious';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const data = getAsyncData();

function getPosts() {
    axios.get(apiUrl)
        .then(response => console.log('Posts', response.data)
            .catch(err => console.log('Error:', err)));
      };

    getPosts();


    async function getPostsAsync() {
        try {
            const response = await axios.get(apiUrl);
            console.log('Users using async/await:', response.data[0])
        } catch (err) {
            console.log('Error:', err);
        }
    }
    getPostsAsync();


    function resolveAfter2Seconds() {
        return new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved('Resolved');
            }, 2000)
        });
    }

    resolveAfter2Seconds().then(date => console.log('Resolve after 2 seconds:', data));

    async function getAsyncData() {
        const data = await resolveAfter2Seconds();
        console.log('Getting asynce data:', data);
    }