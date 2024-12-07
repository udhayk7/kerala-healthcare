import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  Grid,
  Alert,
  CircularProgress,
  Autocomplete,
  Fade,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
  LocalHospital as HospitalIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const symptoms = [
  // General Symptoms
  { label: "Fever", category: "General", severity: "medium" },
  { label: "Fatigue", category: "General", severity: "low" },
  { label: "Body Aches", category: "General", severity: "medium" },
  { label: "Weakness", category: "General", severity: "low" },
  { label: "Chills", category: "General", severity: "medium" },
  { label: "Night Sweats", category: "General", severity: "medium" },
  
  // Respiratory Symptoms
  { label: "Cough", category: "Respiratory", severity: "medium" },
  { label: "Shortness of Breath", category: "Respiratory", severity: "high" },
  { label: "Sore Throat", category: "Respiratory", severity: "low" },
  { label: "Runny Nose", category: "Respiratory", severity: "low" },
  { label: "Chest Pain", category: "Respiratory", severity: "high" },
  { label: "Wheezing", category: "Respiratory", severity: "high" },
  { label: "Nasal Congestion", category: "Respiratory", severity: "low" },
  { label: "Difficulty Breathing", category: "Respiratory", severity: "high" },
  
  // Gastrointestinal Symptoms
  { label: "Nausea", category: "Gastrointestinal", severity: "medium" },
  { label: "Vomiting", category: "Gastrointestinal", severity: "medium" },
  { label: "Diarrhea", category: "Gastrointestinal", severity: "medium" },
  { label: "Abdominal Pain", category: "Gastrointestinal", severity: "high" },
  { label: "Loss of Appetite", category: "Gastrointestinal", severity: "low" },
  { label: "Bloating", category: "Gastrointestinal", severity: "low" },
  { label: "Constipation", category: "Gastrointestinal", severity: "low" },
  { label: "Heartburn", category: "Gastrointestinal", severity: "medium" },
  
  // Neurological Symptoms
  { label: "Headache", category: "Neurological", severity: "medium" },
  { label: "Dizziness", category: "Neurological", severity: "medium" },
  { label: "Confusion", category: "Neurological", severity: "high" },
  { label: "Memory Problems", category: "Neurological", severity: "high" },
  { label: "Difficulty Concentrating", category: "Neurological", severity: "medium" },
  { label: "Seizures", category: "Neurological", severity: "high" },
  { label: "Tremors", category: "Neurological", severity: "high" },
  
  // Musculoskeletal Symptoms
  { label: "Joint Pain", category: "Musculoskeletal", severity: "medium" },
  { label: "Muscle Pain", category: "Musculoskeletal", severity: "medium" },
  { label: "Back Pain", category: "Musculoskeletal", severity: "medium" },
  { label: "Neck Pain", category: "Musculoskeletal", severity: "medium" },
  { label: "Stiffness", category: "Musculoskeletal", severity: "low" },
  { label: "Muscle Weakness", category: "Musculoskeletal", severity: "medium" },
  
  // Skin Symptoms
  { label: "Rash", category: "Skin", severity: "medium" },
  { label: "Itching", category: "Skin", severity: "low" },
  { label: "Skin Discoloration", category: "Skin", severity: "medium" },
  { label: "Swelling", category: "Skin", severity: "medium" },
  { label: "Bruising", category: "Skin", severity: "medium" },
  { label: "Hives", category: "Skin", severity: "medium" },
  { label: "Dry Skin", category: "Skin", severity: "low" },
  
  // Mental Health Symptoms
  { label: "Anxiety", category: "Mental Health", severity: "high" },
  { label: "Depression", category: "Mental Health", severity: "high" },
  { label: "Sleep Problems", category: "Mental Health", severity: "medium" },
  { label: "Mood Changes", category: "Mental Health", severity: "medium" },
  { label: "Irritability", category: "Mental Health", severity: "medium" },
  { label: "Panic Attacks", category: "Mental Health", severity: "high" },
  
  // Additional Symptoms
  { label: "Blurred Vision", category: "Vision", severity: "high" },
  { label: "Eye Pain", category: "Vision", severity: "medium" },
  { label: "Ear Pain", category: "ENT", severity: "medium" },
  { label: "Hearing Problems", category: "ENT", severity: "high" },
  { label: "Loss of Taste", category: "ENT", severity: "medium" },
  { label: "Loss of Smell", category: "ENT", severity: "medium" }
];

function SymptomAnalyzer() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAddSymptom = (symptom) => {
    if (symptom && !selectedSymptoms.find(s => s.label === symptom.label)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setInputValue('');
    }
  };

  const handleRemoveSymptom = (symptomToRemove) => {
    setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom.label !== symptomToRemove.label));
  };

  const handleAnalyze = () => {
    setLoading(true);
    // Simulate analysis
    setTimeout(() => {
      const highSeverity = selectedSymptoms.filter(s => s.severity === 'high').length;
      const mediumSeverity = selectedSymptoms.filter(s => s.severity === 'medium').length;
      
      let urgency = 'Low';
      if (highSeverity >= 2 || (highSeverity >= 1 && mediumSeverity >= 2)) {
        urgency = 'High';
      } else if (mediumSeverity >= 3 || highSeverity >= 1) {
        urgency = 'Medium';
      }

      const results = {
        urgency,
        recommendations: [
          urgency === 'High' 
            ? 'Please seek immediate medical attention.'
            : urgency === 'Medium'
            ? 'Consider consulting a healthcare provider soon.'
            : 'Monitor your symptoms and rest.',
          'Keep track of any changes in your symptoms.',
          'Stay hydrated and get adequate rest.'
        ],
        categories: [...new Set(selectedSymptoms.map(s => s.category))]
      };

      setAnalysisResults(results);
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: '800px',
        mb: 6,
        textAlign: 'center',
        px: { xs: 2, sm: 3 }
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 800,
            background: 'linear-gradient(to right, #2563eb, #7c3aed)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
          }}
        >
          AI-Powered Symptom Analysis
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', minHeight: 480 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Describe Your Symptoms
              </Typography>

              <Autocomplete
                value={null}
                onChange={(event, newValue) => handleAddSymptom(newValue)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                options={symptoms.filter(symptom => 
                  !selectedSymptoms.find(s => s.label === symptom.label)
                )}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search symptoms"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                )}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    <Typography variant="body1">{option.label}</Typography>
                    <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                      ({option.category})
                    </Typography>
                  </Box>
                )}
              />

              <Box sx={{ mt: 2, mb: 4 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {selectedSymptoms.map((symptom) => (
                    <Chip
                      key={symptom.label}
                      label={symptom.label}
                      onDelete={() => handleRemoveSymptom(symptom)}
                      color={
                        symptom.severity === 'high' ? 'error' :
                        symptom.severity === 'medium' ? 'warning' : 
                        'success'
                      }
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </Stack>
              </Box>

              <Button
                variant="contained"
                fullWidth
                disabled={selectedSymptoms.length === 0 || loading}
                onClick={handleAnalyze}
                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
              >
                {loading ? 'Analyzing...' : 'Analyze Symptoms'}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', minHeight: 480 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Analysis Results
              </Typography>

              {!showResults ? (
                <Box sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  py: 8
                }}>
                  <TimeIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                  <Typography color="text.secondary">
                    Your analysis results will appear here
                  </Typography>
                </Box>
              ) : (
                <Fade in={showResults}>
                  <Box>
                    <Alert 
                      severity={
                        analysisResults.urgency === 'High' ? 'error' :
                        analysisResults.urgency === 'Medium' ? 'warning' :
                        'info'
                      }
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="h6">
                        {analysisResults.urgency} Priority
                      </Typography>
                      {analysisResults.recommendations[0]}
                    </Alert>

                    <Typography variant="h6" gutterBottom>
                      Recommendations:
                    </Typography>
                    <ul>
                      {analysisResults.recommendations.map((rec, index) => (
                        <li key={index}>
                          <Typography variant="body1" sx={{ mb: 1 }}>
                            {rec}
                          </Typography>
                        </li>
                      ))}
                    </ul>

                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                      Affected Areas:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {analysisResults.categories.map((category) => (
                        <Chip
                          key={category}
                          label={category}
                          color="primary"
                          variant="outlined"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Fade>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SymptomAnalyzer;
