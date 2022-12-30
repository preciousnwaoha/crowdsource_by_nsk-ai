import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {contributedUserType } from "../../../lib/users"

type propTypes = {
  usersList: contributedUserType[]
}

export default function LeaderboardList({usersList}: propTypes) {

  const rearrangedUsersList = [...usersList].sort((a, b) => {
    return b.contribution.points - a.contribution.points
  })


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', overflowY: "auto" }}>
      
      {rearrangedUsersList.map((user, index) => {
        return (
          
      <React.Fragment key={user.address}>
      <ListItem  alignItems="flex-start"  sx={{
        py: 2,
      }}>
        <Typography sx={{
          fontWeight: 500,
          mr: 2,
          mt: 1,
        }}>{index}</Typography>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="body1" component="h6" sx={{
            fontWeight: 500,
            fontSize: "1rem",
          }}>
            {!!user.username? user.username : user.address}
          </Typography>}
          secondary={
           
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user.contribution.points} points
              </Typography>
              
          }
        />
      </ListItem>
      <Divider  component="li" sx={{
        width: "100%",
      }} />
      </React.Fragment>
        )
      })}
    </List>
  );
}