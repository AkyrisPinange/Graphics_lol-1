import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:8080/api/"
});

// export const externalApi = axios.create({
//     baseURL: "https://americas.api.riotgames.com/lol",
// });