import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Autocomplete,
  CircularProgress,
  Chip,
  Stack,
  Grid,
  Divider,
  Alert,
  LinearProgress,
  Fade,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
  LocalHospital as HospitalIcon,
  AccessTime as TimeIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { analyzeSymptoms } from '../data/diseaseMapping';
import HospitalFinder from './HospitalFinder';

const symptoms = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Shortness of breath",
  "Muscle aches",
  "Chills",
  "Sore throat",
  "Loss of taste or smell",
  "Congestion",
  // Add more symptoms as needed
];

function SymptomAnalyzer() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showHospitalFinder, setShowHospitalFinder] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleAddSymptom = (symptom) => {
    if (symptom && !selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setInputValue('');
    }
  };

  const handleRemoveSymptom = (symptomToRemove) => {
    setSelectedSymptoms(selectedSymptoms.filter(symptom => symptom !== symptomToRemove));
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      const analysis = analyzeSymptoms(selectedSymptoms);
      setAnalysisResults(analysis);
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleFindHospitals = (specialty) => {
    setSelectedSpecialty(specialty || 'General Medicine');
    setShowHospitalFinder(true);
  };

  return (
    <>
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
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              lineHeight: 1.6,
            }}
          >
            Get instant insights about your health using our advanced AI system.
            Simply describe your symptoms and receive personalized recommendations.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          sx={{ 
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, sm: 3 }
          }}
        >
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                minHeight: 480,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
                width: '100%',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  borderRadius: '18px',
                  zIndex: -1,
                  opacity: 0.1,
                },
              }}
            >
              <CardContent sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                p: { xs: 2, sm: 4 },
                width: '100%'
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: 'text.primary',
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  }}
                >
                  Describe Your Symptoms
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  Help us understand what you're experiencing for a more accurate analysis
                </Typography>

                <Autocomplete
                  value={null}
                  onChange={(event, newValue) => handleAddSymptom(newValue)}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                  options={symptoms.filter(symptom => !selectedSymptoms.includes(symptom))}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Type your symptoms"
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: 2,
                          transition: 'all 0.2s',
                          border: '1px solid',
                          borderColor: 'divider',
                          '&:hover, &.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderColor: 'primary.main',
                            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)',
                          },
                        },
                      }}
                    />
                  )}
                />

                <Box sx={{ 
                  mt: 3, 
                  mb: 4, 
                  flex: 1,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    useFlexGap 
                    sx={{ 
                      justifyContent: 'center',
                      width: '100%',
                      gap: 1
                    }}
                  >
                    {selectedSymptoms.map((symptom) => (
                      <Chip
                        key={symptom}
                        label={symptom}
                        onDelete={() => handleRemoveSymptom(symptom)}
                        sx={{
                          m: 0.5,
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          color: 'primary.main',
                          borderRadius: '8px',
                          '& .MuiChip-deleteIcon': {
                            color: 'primary.main',
                            '&:hover': {
                              color: 'primary.dark',
                            },
                          },
                          '&:hover': {
                            backgroundColor: 'rgba(37, 99, 235, 0.15)',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  disabled={selectedSymptoms.length === 0 || loading}
                  onClick={handleAnalyze}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
                  sx={{
                    mt: 'auto',
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                    boxShadow: '0 8px 16px -4px rgba(37, 99, 235, 0.2)',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 12px 20px -4px rgba(37, 99, 235, 0.3)',
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  {loading ? 'Analyzing...' : 'Analyze Symptoms'}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                minHeight: 480,
                position: 'relative',
                overflow: 'visible',
                width: '100%',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: 'linear-gradient(45deg, #7c3aed, #2563eb)',
                  borderRadius: '18px',
                  zIndex: -1,
                  opacity: 0.1,
                },
              }}
            >
              <CardContent sx={{ 
                p: { xs: 2, sm: 4 },
                width: '100%'
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: 'text.primary',
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  }}
                >
                  Analysis Results
                </Typography>
                {!showResults ? (
                  <Box 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: 8,
                      backgroundColor: 'transparent',
                    }}
                  >
                    <TimeIcon 
                      sx={{ 
                        fontSize: 64,
                        color: 'text.secondary',
                        mb: 2,
                        opacity: 0.5,
                      }} 
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        maxWidth: '300px',
                      }}
                    >
                      Your analysis results will appear here after you submit your symptoms
                    </Typography>
                  </Box>
                ) : (
                  <Fade in={showResults} timeout={500}>
                    <Box sx={{ backgroundColor: 'transparent' }}>
                      <Box 
                        sx={{ 
                          p: 3,
                          mb: 3,
                          borderRadius: 2,
                          backgroundColor: 'rgba(37, 99, 235, 0.05)',
                          border: '1px solid',
                          borderColor: 'primary.main',
                        }}
                      >
                        <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <HospitalIcon /> Analysis Results
                        </Typography>

                        {analysisResults?.possibleConditions.length > 0 ? (
                          <>
                            <Alert 
                              severity={analysisResults.urgency === 'High' ? 'error' : analysisResults.urgency === 'Medium' ? 'warning' : 'info'}
                              sx={{ mb: 3 }}
                            >
                              {analysisResults.urgency === 'High' ? (
                                'Seek immediate medical attention based on your symptoms.'
                              ) : analysisResults.urgency === 'Medium' ? (
                                'Consider consulting a healthcare provider soon.'
                              ) : (
                                'Monitor your symptoms and rest.'
                              )}
                            </Alert>

                            {analysisResults.possibleConditions.map((condition, index) => (
                              <Box 
                                key={condition.disease} 
                                sx={{ 
                                  mb: 3,
                                  p: 2,
                                  borderRadius: 2,
                                  backgroundColor: 'background.paper',
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                    {condition.disease}
                                  </Typography>
                                  <Chip 
                                    label={`${condition.matchScore}% Match`}
                                    color={condition.matchScore > 70 ? 'error' : condition.matchScore > 50 ? 'warning' : 'info'}
                                    size="small"
                                  />
                                </Box>
                                
                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                  {condition.description}
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                    Matching Symptoms:
                                  </Typography>
                                  <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {condition.matchingSymptoms.map((symptom) => (
                                      <Chip
                                        key={symptom}
                                        label={symptom}
                                        size="small"
                                        sx={{ 
                                          bgcolor: 'rgba(37, 99, 235, 0.1)',
                                          color: 'primary.main',
                                          m: 0.5
                                        }}
                                      />
                                    ))}
                                  </Stack>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                  Recommendations:
                                </Typography>
                                <Stack spacing={1}>
                                  {condition.recommendations.map((rec, idx) => (
                                    <Typography 
                                      key={idx} 
                                      variant="body2" 
                                      sx={{ 
                                        color: 'text.secondary',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                      }}
                                    >
                                      <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                                      {rec}
                                    </Typography>
                                  ))}
                                </Stack>
                              </Box>
                            ))}
                          </>
                        ) : (
                          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            No specific conditions matched your symptoms. Please consult a healthcare provider for proper diagnosis.
                          </Typography>
                        )}

                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{
                            mt: 2,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            backgroundColor: 'background.paper',
                          }}
                          onClick={() => {
                            const specialty = analysisResults?.possibleConditions?.[0]?.specialty || 'General Medicine';
                            handleFindHospitals(specialty);
                          }}
                        >
                          Find Nearby Hospitals
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <HospitalFinder 
        open={showHospitalFinder} 
        onClose={() => setShowHospitalFinder(false)}
        specialty={selectedSpecialty}
      />
    </>
  );
}

export default SymptomAnalyzer;
