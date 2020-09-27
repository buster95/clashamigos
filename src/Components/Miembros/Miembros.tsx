import React from 'react';
import './Miembros.css';

// import cocapi from '../../Services/cocapi';
import clashApi from 'clash-of-clans-api';

const Miembros = () => {
  // let members =
  // cocapi.members().then(res => console.log(res));
  // console.log(members);
  let client = clashApi({
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBkNWZhZDA4LTBjMWItNDhmYi05OGZiLWU2YWE3NDkwMWFmYSIsImlhdCI6MTYwMTE3NDIwMSwic3ViIjoiZGV2ZWxvcGVyLzkyMGUyZDg3LTFjNDMtMDQ2YS0zYzJiLTZlMzcxM2RjYzIzMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4xNDMuMjQ2LjExNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.k3mI8Pbe9Ygl0fQInHLBUl6W4sPN0_W_YMom5EUoBPuCpMG36j6o1Y6Xk3lsA4avDetjB7i_WmmcK6jfeiwkHQ'
  });

  client.clanByTag('#PGJ9JCV2')
    .then(response => console.log(response))
    .catch(err => console.log(err));

  return (
    <div className="Miembros">
      Miembros Component
    </div>
  );
}



export default Miembros;
