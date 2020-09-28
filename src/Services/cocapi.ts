import axios from 'axios';

let clanTag = "%23PGJ9JCV2";

var http = axios.create({
    baseURL: 'https://apis-gateway.herokuapp.com/cocapi',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4NjUyMjk4LTU2NTMtNGZmZS1iY2I5LWJmMGYzOTdiNGVmNCIsImlhdCI6MTYwMTI2MzQ2OCwic3ViIjoiZGV2ZWxvcGVyLzkyMGUyZDg3LTFjNDMtMDQ2YS0zYzJiLTZlMzcxM2RjYzIzMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjMuODkuMTA1LjEzNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.xr57M1oU3cGUJejDrtWR0gB10S-KsxUb74yxSOQtJfTFE3HKNbG7b4j8YIN22IkJxF-qGkHxxX-UhQfL0iYy8g'
    }
});

export default {
    currentWar: async () => {
        try {
            const res = await http.get(`/clans/${clanTag}/currentwar`);
            return res.data;
        } catch (err) {
            return err.response.data;
        }
    },
    members: async () => {
        try {
            const res = await http.get(`/clans/${clanTag}/members`);
            return res.data;
        } catch (err) {
            return err.response?.body;
        }
    }
};