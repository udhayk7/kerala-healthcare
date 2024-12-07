import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  TextField,
  Autocomplete,
  CircularProgress
} from '@mui/material';

const SYMPTOMS = [
  // General Symptoms
  { id: 1, name: 'Fever', category: 'General', severity: 'medium' },
  { id: 2, name: 'Fatigue', category: 'General', severity: 'low' },
  { id: 3, name: 'Body Aches', category: 'General', severity: 'medium' },
  { id: 4, name: 'Weakness', category: 'General', severity: 'low' },
  { id: 5, name: 'Chills', category: 'General', severity: 'medium' },
  
  // Respiratory Symptoms
  { id: 6, name: 'Cough', category: 'Respiratory', severity: 'medium' },
  { id: 7, name: 'Shortness of breath', category: 'Respiratory', severity: 'high' },
  { id: 8, name: 'Sore throat', category: 'Respiratory', severity: 'low' },
  { id: 9, name: 'Runny nose', category: 'Respiratory', severity: 'low' },
  { id: 10, name: 'Chest pain', category: 'Respiratory', severity: 'high' },
  
  // Gastrointestinal Symptoms
  { id: 11, name: 'Nausea', category: 'Gastrointestinal', severity: 'medium' },
  { id: 12, name: 'Vomiting', category: 'Gastrointestinal', severity: 'medium' },
  { id: 13, name: 'Diarrhea', category: 'Gastrointestinal', severity: 'medium' },
  { id: 14, name: 'Abdominal pain', category: 'Gastrointestinal', severity: 'high' },
  { id: 15, name: 'Loss of appetite', category: 'Gastrointestinal', severity: 'low' },
  
  // Neurological Symptoms
  { id: 16, name: 'Headache', category: 'Neurological', severity: 'medium' },
  { id: 17, name: 'Dizziness', category: 'Neurological', severity: 'medium' },
  { id: 18, name: 'Confusion', category: 'Neurological', severity: 'high' },
  { id: 19, name: 'Memory problems', category: 'Neurological', severity: 'high' },
  { id: 20, name: 'Difficulty concentrating', category: 'Neurological', severity: 'medium' },
  
  // Musculoskeletal Symptoms
  { id: 21, name: 'Joint pain', category: 'Musculoskeletal', severity: 'medium' },
  { id: 22, name: 'Muscle pain', category: 'Musculoskeletal', severity: 'medium' },
  { id: 23, name: 'Back pain', category: 'Musculoskeletal', severity: 'medium' },
  { id: 24, name: 'Neck pain', category: 'Musculoskeletal', severity: 'medium' },
  { id: 25, name: 'Stiffness', category: 'Musculoskeletal', severity: 'low' },
  
  // Skin Symptoms
  { id: 26, name: 'Rash', category: 'Skin', severity: 'medium' },
  { id: 27, name: 'Itching', category: 'Skin', severity: 'low' },
  { id: 28, name: 'Skin discoloration', category: 'Skin', severity: 'medium' },
  { id: 29, name: 'Swelling', category: 'Skin', severity: 'medium' },
  { id: 30, name: 'Bruising', category: 'Skin', severity: 'medium' },
  
  // Mental Health Symptoms
  { id: 31, name: 'Anxiety', category: 'Mental Health', severity: 'high' },
  { id: 32, name: 'Depression', category: 'Mental Health', severity: 'high' },
  { id: 33, name: 'Sleep problems', category: 'Mental Health', severity: 'medium' },
  { id: 34, name: 'Mood changes', category: 'Mental Health', severity: 'medium' },
  { id: 35, name: 'Irritability', category: 'Mental Health', severity: 'medium' }
];

const getSeverityColor = (severity) => {
  switch (severity) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'default';
  }
};

const SymptomAnalyzer = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev => {
      const exists = prev.find(s => s.id === symptom.id);
      if (exists) {
        return prev.filter(s => s.id !== symptom.id);
      } else {
        return [...prev, symptom];
      }
    });
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      const severityCount = selectedSymptoms.reduce((acc, symptom) => {
        acc[symptom.severity] = (acc[symptom.severity] || 0) + 1;
        return acc;
      }, {});

      let recommendation;
      const totalSymptoms = selectedSymptoms.length;
      const highSeverity = severityCount.high || 0;
      const mediumSeverity = severityCount.medium || 0;

      if (highSeverity >= 2 || (highSeverity >= 1 && mediumSeverity >= 2)) {
        recommendation = {
          urgency: 'high',
          message: 'Please seek immediate medical attention.',
          action: 'Visit the nearest emergency room or contact your healthcare provider immediately.'
        };
      } else if (mediumSeverity >= 3 || (highSeverity >= 1)) {
        recommendation = {
          urgency: 'medium',
          message: 'Medical consultation recommended.',
          action: 'Schedule an appointment with your healthcare provider within 24 hours.'
        };
      } else {
        recommendation = {
          urgency: 'low',
          message: 'Monitor your symptoms.',
          action: 'Rest and monitor your symptoms. If they persist or worsen, consult a healthcare provider.'
        };
      }

      setResult({
        recommendation,
        symptoms: selectedSymptoms,
        severityBreakdown: severityCount
      });
      setAnalyzing(false);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setResult(null);
    setSearchTerm('');
  };

  const filteredSymptoms = SYMPTOMS.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedSymptoms = filteredSymptoms.reduce((acc, symptom) => {
    if (!acc[symptom.category]) {
      acc[symptom.category] = [];
    }
    acc[symptom.category].push(symptom);
    return acc;
  }, {});

  if (analyzing) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Analyzing symptoms...
        </Typography>
      </Box>
    );
  }

  if (result) {
    return (
      <Box sx={{ p: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Analysis Results
          </Typography>
          
          <Alert 
            severity={
              result.recommendation.urgency === 'high' ? 'error' :
              result.recommendation.urgency === 'medium' ? 'warning' : 'info'
            }
            sx={{ my: 2 }}
          >
            <Typography variant="h6">{result.recommendation.message}</Typography>
            {result.recommendation.action}
          </Alert>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Selected Symptoms:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {result.symptoms.map(symptom => (
              <Chip
                key={symptom.id}
                label={symptom.name}
                color={getSeverityColor(symptom.severity)}
                variant="outlined"
              />
            ))}
          </Box>

          <Button variant="contained" onClick={handleReset} sx={{ mt: 2 }}>
            Check New Symptoms
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Symptom Checker
        </Typography>
        
        <TextField
          fullWidth
          label="Search symptoms or categories"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />

        {Object.entries(groupedSymptoms).map(([category, symptoms]) => (
          <Box key={category} sx={{ mb: 3 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {category}
            </Typography>
            <Grid container spacing={2}>
              {symptoms.map((symptom) => (
                <Grid item xs={12} sm={6} md={4} key={symptom.id}>
                  <Card 
                    variant="outlined"
                    sx={{
                      border: selectedSymptoms.find(s => s.id === symptom.id) 
                        ? '2px solid' 
                        : '1px solid',
                      borderColor: selectedSymptoms.find(s => s.id === symptom.id)
                        ? 'primary.main'
                        : 'divider',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                    onClick={() => handleSymptomToggle(symptom)}
                  >
                    <CardContent>
                      <Typography variant="subtitle1">
                        {symptom.name}
                      </Typography>
                      <Chip
                        size="small"
                        label={symptom.severity}
                        color={getSeverityColor(symptom.severity)}
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ my: 2 }} />
          </Box>
        ))}

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>
            Selected Symptoms: {selectedSymptoms.length}
          </Typography>
          <Button
            variant="contained"
            onClick={handleAnalyze}
            disabled={selectedSymptoms.length === 0}
          >
            Analyze Symptoms
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SymptomAnalyzer;
