import axios from 'axios';

let clanTag = "%23PGJ9JCV2";

var http = axios.create({
    baseURL: 'https://api.clashofclans.com/v1',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        Origin: 'http://190.143.246.116:3000',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBkNWZhZDA4LTBjMWItNDhmYi05OGZiLWU2YWE3NDkwMWFmYSIsImlhdCI6MTYwMTE3NDIwMSwic3ViIjoiZGV2ZWxvcGVyLzkyMGUyZDg3LTFjNDMtMDQ2YS0zYzJiLTZlMzcxM2RjYzIzMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4xNDMuMjQ2LjExNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.k3mI8Pbe9Ygl0fQInHLBUl6W4sPN0_W_YMom5EUoBPuCpMG36j6o1Y6Xk3lsA4avDetjB7i_WmmcK6jfeiwkHQ'
        // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc2YWNjNTIxLThjN2MtNDI4ZC04ZmE3LWU5NjhlMDU4YTRmYiIsImlhdCI6MTYwMTA2OTE2Niwic3ViIjoiZGV2ZWxvcGVyLzkyMGUyZDg3LTFjNDMtMDQ2YS0zYzJiLTZlMzcxM2RjYzIzMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni43Ny4xMzQuMTQ0Il0sInR5cGUiOiJjbGllbnQifV19.JlHo2zLRAyXYziIaBUyMBh8WeG1sn4cyPPMJ6Aq7p-aPGAwR20-zLy7UJLsiuPD_2votk-CD_dWiiFMhSAq9Ww'
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