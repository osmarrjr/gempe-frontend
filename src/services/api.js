import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzZiMDU5ODA1ZTBhMzZmODA2ODU3YiIsImlhdCI6MTYxNDI2MDg0MSwiZXhwIjoxNjE0NTIwMDQxfQ.2yf-qWSqaWnvScRQ508YNHLa5B-wxXy8MhHzM8pbwnM',
        'Content-Type': 'application/json'
    }
});


// async function teste() {
//     let result = await api.post('/people', {
//         name: "Mayara Ribeieqwqewroeqeqwqwewqweqweeqwqweeqweqwqweqweqwe",
//         email: "may.rqweqweqweqeqeqweqweqwqweqweweqwqeweqwweqweqweqweqweeqwwqeqwew@hotmail.com",
//         phone: "45988329983"
//     }).then(teste => console.log(teste.data.message)).catch(err => console.log(err.response.data.message))
// }

export default api;