import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import EcoIcon from '@mui/icons-material/Eco';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GroupIcon from '@mui/icons-material/Group';

const stats = [
  { label: 'Active Forms', value: 42, icon: <AssignmentTurnedInIcon color="success" /> },
  { label: 'Pending Approvals', value: 8, icon: <TrendingUpIcon color="primary" /> },
  { label: 'Registered Institutions', value: 12, icon: <GroupIcon color="secondary" /> },
  { label: 'Paper Saved (kg)', value: 128, icon: <EcoIcon color="success" /> },
];

const activity = [
  'Form "Account Opening" approved by John Doe',
  'New institution "Green Bank" registered',
  'Submission received for "Loan Application"',
  'User Jane Smith assigned as Approver',
];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom color="primary">
        Pepe DDMS Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, idx) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 3 }}>
              <Box sx={{ mr: 2 }}>{stat.icon}</Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5">{stat.value}</Typography>
                <Typography color="text.secondary">{stat.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activity.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" href="/forms">
          Go to Forms
        </Button>
        <Button variant="outlined" color="success" href="/institutions">
          Manage Institutions
        </Button>
        <Button variant="outlined" color="secondary" href="/submissions">
          View Submissions
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard; 