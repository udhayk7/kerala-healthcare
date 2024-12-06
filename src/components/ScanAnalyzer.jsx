import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';
import axios from 'axios';

const ScanAnalyzer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file (JPEG, PNG, or DICOM)');
        return;
      }
      setSelectedFile(file);
      setError(null);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file to upload');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('scan', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/api/scans/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setAnalysis(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error analyzing scan');
    } finally {
      setLoading(false);
    }
  };

  const renderAnalysisResults = () => {
    if (!analysis) return null;

    return (
      <Paper elevation={3} sx={{ mt: 3, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Analysis Results
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Condition Detected"
              secondary={analysis.condition}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Confidence Score"
              secondary={`${(analysis.confidence * 100).toFixed(2)}%`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Recommendations"
              secondary={analysis.recommendations}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Suggested Specialists"
              secondary={analysis.specialists.join(', ')}
            />
          </ListItem>
        </List>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => {/* Navigate to appointment booking */}}
        >
          Book Appointment with Specialist
        </Button>
      </Paper>
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Medical Scan Analysis
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Upload your medical scans (X-rays, CT scans, or lab reports) for AI-powered analysis.
        Our system can help detect various conditions and provide preliminary assessments.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  border: '2px dashed #ccc',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
                onClick={() => document.getElementById('scan-upload').click()}
              >
                <input
                  type="file"
                  id="scan-upload"
                  hidden
                  accept="image/*,.dcm"
                  onChange={handleFileSelect}
                />
                <UploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  Upload Scan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click to upload or drag and drop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Supported formats: JPEG, PNG, DICOM
                </Typography>
              </Box>

              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}

              {preview && (
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <img
                    src={preview}
                    alt="Scan preview"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '300px',
                      objectFit: 'contain'
                    }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<AssessmentIcon />}
                    onClick={handleUpload}
                    disabled={loading}
                    sx={{ mt: 2 }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Analyze Scan'
                    )}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          {renderAnalysisResults()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScanAnalyzer;
