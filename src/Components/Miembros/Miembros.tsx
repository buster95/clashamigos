import React, { useState, useEffect, Fragment } from 'react';
import './Miembros.scss';

import cocapi from '../../Services/cocapi';
// import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import Paper from '@material-ui/core/Paper/Paper';
import Box from '@material-ui/core/Box/Box';

const Miembros = () => {
   const [members, setMembers] = useState<any[]>([]);
   const fetchMembers = async () => {
      try {
         let response = await cocapi.members();
         setMembers(response.items);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchMembers();
   }, []);

   return (
      <Fragment>
         <Typography variant="h5">Miembros del Clan</Typography>
         <br />
         {
            members.map((item, index) => {
               return (
                  <Paper key={index} className="card-member" elevation={2}>
                     <Box display="flex" p={1}>
                        <Box width="10%" className="card-league">
                           <img src={item.league.iconUrls.small} alt="clash of clans league" loading="lazy" />
                        </Box>

                        <Box width="100%">
                           <Typography variant="h6">{item.name}</Typography>
                           <Typography variant="caption">{item.tag}</Typography>
                        </Box>

                        <Box className="card-trophies">
                           <Typography variant="body1">{item.trophies}</Typography>
                           <Typography variant="body1">{item.role}</Typography>
                        </Box>
                     </Box>
                  </Paper>
               );
            })
         }
         <br />
         <br />
      </Fragment>
   );
}

export default Miembros;
