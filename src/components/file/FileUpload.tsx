import React, { useState } from 'react';
import { Box, Button, Typography, List, ListItem, ListItemText, Paper, CircularProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleUpload = async () => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    files.forEach(file => formData.append('file', file));
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setFiles([]);
        alert('Files uploaded successfully!');
      } else {
        setError('Upload failed');
      }
    } catch (err) {
      setError('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        File Upload
      </Typography>
      <Paper
        sx={{
          p: 4,
          border: '2px dashed #ccc',
          borderRadius: 2,
          textAlign: 'center',
          mb: 2,
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography>Drag and drop files here</Typography>
      </Paper>
      <List>
        {files.map((file, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={file.name} secondary={`${file.size} bytes`} />
          </ListItem>
        ))}
      </List>
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleUpload} disabled={files.length === 0 || loading}>
        {loading ? <CircularProgress size={24} /> : 'Upload'}
      </Button>
    </Box>
  );
};

export default FileUpload; 