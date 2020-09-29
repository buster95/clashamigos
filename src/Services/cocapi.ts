import axios from 'axios';

let clanTag = "%23PGJ9JCV2";

var http = axios.create({
    baseURL: 'https://apis-gateway.herokuapp.com/cocapi',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg4NGNlM2U1LTVlMzMtNDEzNy1hNzU0LWQyMGM1Y2E4NmUzMSIsImlhdCI6MTYwMTM5ODY0Mywic3ViIjoiZGV2ZWxvcGVyLzkyMGUyZDg3LTFjNDMtMDQ2YS0zYzJiLTZlMzcxM2RjYzIzMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3My4yNTQuMjMyLjM5Il0sInR5cGUiOiJjbGllbnQifV19.ud_WrHS8EJxCwitXuSarCKF5DgKPq1y9w4s6c_fMZZAclilOCm-tn2UVCn5Qw_wTe0XM9loTzlgCziQQOu1X9A'
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