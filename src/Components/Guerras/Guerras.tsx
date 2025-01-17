import React, { Fragment, useEffect, useState } from 'react';
import './Guerras.scss';
import cocapi from '../../Services/cocapi';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';

const Guerras: React.FC = () => {
   const [currentWar, setCurrentWar] = useState<any>({});
   const [wars, setWars] = useState<any[]>([]);

   useEffect(() => {
      cocapi.wars()
         .then(res => setWars(res.items))
         .catch(err => console.log(err));

      cocapi.currentWar()
         .then(res => setCurrentWar(res))
         .catch(err => console.log(err))
   }, []);

   return (
      <Fragment>
         <Typography variant="h5" style={{ display: (currentWar.state ? '' : 'none'), marginBottom: 25 }}>
            Guerra Actual
         </Typography>

         <Paper style={{ display: (currentWar.state ? '' : 'none'), marginBottom: 25 }}>
            <Box display="flex" p={1}>
               <Box width="50%" className="card-war">
                  <Box display="flex" p={1}>
                     <Box className="card-flag">
                        <img src={currentWar.clan?.badgeUrls?.medium} alt="clash of clans league" loading="lazy" />
                     </Box>

                     <Box width="100%">
                        <Typography variant="body1">
                           {currentWar.clan?.name}
                           <br />
                           <Typography variant="caption">
                              <a href={"/clan/" + encodeURIComponent(currentWar.clan?.tag)}>
                                 {currentWar.clan?.tag}
                              </a>
                           </Typography>
                        </Typography>
                     </Box>
                  </Box>
                  <Chip className="card-war-result" label={'Lvl ' + currentWar.clan?.clanLevel} />
                  <hr />
                  <Typography variant="body1">ESTRELLAS: {currentWar.clan?.stars}</Typography>
                  <hr />
                  <Typography variant="body1">ATAQUES: {currentWar.clan?.attacks}</Typography>
                  <hr />
                  <Typography variant="body1">PORC. DESTRUCCIÓN: {String(currentWar.clan?.destructionPercentage).slice(0, 5)}</Typography>
               </Box>

               <Box alignSelf="center">
                  <Typography variant="h4" align="center">VS</Typography>
                  <Typography variant="h6" align="center">{currentWar.state !== 'warEnded' ? 'EN PROCESO' : 'TERMINADA'}</Typography>
               </Box>

               <Box width="50%" className="card-war" alignContent="right" alignItems="right" textAlign="right">
                  <Box display="flex" p={1}>
                     <Box width="100%">
                        <Typography variant="body1" align="right">
                           {currentWar.opponent?.name}
                           <br />
                           <Typography variant="caption">
                              <a href={"/clan/" + encodeURIComponent(currentWar.opponent?.tag)}>
                                 {currentWar.opponent?.tag}
                              </a>
                           </Typography>
                        </Typography>
                     </Box>

                     <Box className="card-flag">
                        <img src={currentWar.opponent?.badgeUrls?.medium} alt="clash of clans league" loading="lazy" />
                     </Box>
                  </Box>
                  <Chip className="card-war-result" label={'Lvl ' + currentWar.opponent?.clanLevel} />
                  <hr />
                  <Typography variant="body1" align="right">ESTRELLAS: {currentWar.opponent?.stars}</Typography>
                  <hr />
                  <Typography variant="body1" align="right">ATAQUES: {currentWar.opponent?.attacks}</Typography>
                  <hr />
                  <Typography variant="body1" align="right">PORC. DESTRUCCIÓN: {String(currentWar.opponent?.destructionPercentage).slice(0, 5)}</Typography>
               </Box>
            </Box>
         </Paper>

         <Typography variant="h5">
            Guerras del Clan
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
                        <Paper className="card-war withHover">
                           <Box display="flex" p={1}>
                              <Box className="card-flag">
                                 <img src={item.opponent.badgeUrls.small} alt="clash of clans league" loading="lazy" />
                              </Box>

                              <Box width="100%">
                                 <Typography variant="body1">
                                    {item.opponent.name}
                                    <br />
                                    <Typography variant="caption">
                                       <a href={"/clan/" + encodeURIComponent(item.opponent.tag)}>
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

export default Guerras;
