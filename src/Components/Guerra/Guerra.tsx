import React, { Fragment, useEffect, useState } from 'react';
import './Guerra.scss';
import cocapi from '../../Services/cocapi';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';

const Guerra: React.FC = () => {
   const [wars, setWars] = useState([]);

   useEffect(() => {
      cocapi.wars()
         .then(res => setWars(res.items))
         .catch(err => console.log(err));
   }, []);

   return (
      <Fragment>
         <Typography variant="h5">
            Guerras del Clan
            <a href="/wars/current" className="enlace-current">
               <Chip label="Current" />
            </a>
         </Typography>
         <br />
         <div style={{ display: (wars.length > 0 ? 'none' : 'flex'), justifyContent: 'center', marginTop: 20 }}>
            <CircularProgress size={60} />
         </div>

         <div style={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
               {
                  wars.map((item: any, index) => (
                     <Grid item key={index} xs={6} sm={4} md={3}>
                        <Paper className="card-war">
                           <Box display="flex" p={1}>
                              <Box className="card-flag">
                                 <img src={item.opponent.badgeUrls.small} alt="clash of clans league" loading="lazy" />
                              </Box>

                              <Box width="100%">
                                 <Typography variant="body1">
                                    {item.opponent.name}
                                    <br />
                                    <Typography variant="caption">
                                       <a target="_blank" rel="noopener noreferrer" href={"/clan/" + item.opponent.tag}>
                                          {item.opponent.tag}
                                       </a>
                                    </Typography>
                                 </Typography>
                              </Box>
                           </Box>
                           <Chip className={"card-war-result " + item.result} label={item.result === 'win' ? 'GANADA' : item.result === 'lose' ? 'PERDIDA' : 'DESC.'} />
                           <Chip className="card-war-result" label={'Lvl ' + item.opponent.clanLevel} />
                           <hr />

                           <Typography variant="body1">ATAQUES</Typography>
                           <Typography variant="body2">
                              Ours: <small>{item.clan.attacks}</small> | Opponent: <small>{item.opponent.attacks}</small>
                           </Typography>
                           <hr />

                           <Typography variant="body1">ESTRELLAS</Typography>
                           <Typography variant="body2">
                              Ours: <small>{item.clan.stars}</small> | Opponent: <small>{item.opponent.stars}</small>
                           </Typography>
                           <hr />

                           <Typography variant="body1">PORC. DESTRUCCIÓN</Typography>
                           <Typography variant="body2">
                              Ours: <small>{String(item.clan.destructionPercentage).slice(0, 5)}</small> | Opponent: <small>{String(item.opponent.destructionPercentage).slice(0, 5)}</small>
                           </Typography>
                        </Paper>
                     </Grid>
                  ))
               }
            </Grid>
         </div>
         <br />
         <br />
      </Fragment>
   );
}

export default Guerra;
