import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';

const fieldTypes = [
  'Text Field',
  'Dropdown',
  'Date Picker',
  'Checkbox',
  'Radio Group',
  'File Upload',
];

const FormBuilder: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Advanced Form Builder
      </Typography>
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, minHeight: 400 }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              Field Types
            </Typography>
            <List>
              {fieldTypes.map((type) => (
                <ListItem key={type} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={type} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        {/* Main Canvas */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, minHeight: 400 }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              Form Canvas
            </Typography>
            <Box sx={{ minHeight: 300, border: '1px dashed #b2dfdb', borderRadius: 2, p: 2 }}>
              {/* Drag-and-drop area (to be implemented) */}
              <Typography color="text.secondary">Drag fields here to build your form.</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Live Preview */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, minHeight: 400 }} elevation={2}>
            <Typography variant="h6" gutterBottom>
              Live Preview
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* Live preview area (to be implemented) */}
            <Typography color="text.secondary">Preview your form here.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormBuilder; 