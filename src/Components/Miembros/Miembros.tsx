import React, { useState, useCallback, useEffect, Fragment } from 'react';
import './Miembros.css';

import cocapi from '../../Services/cocapi';
import { Container } from '@material-ui/core';
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
            <Paper key={index} className="card-member" elevation={5}>
              <Box display="flex" p={1}>
                <Box>{item.name}</Box>
                <Box>Item 2</Box>
                <Box>Item 3</Box>
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
