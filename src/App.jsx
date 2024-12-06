import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  LocalHospital as HospitalIcon,
  Assessment as AssessmentIcon,
  EventAvailable as EventIcon,
  BiotechOutlined as ScanIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';
import SymptomAnalyzer from './components/SymptomAnalyzer.jsx';
import HospitalFinderPage from './components/HospitalFinderPage.jsx';
import AppointmentBooking from './components/AppointmentBooking.jsx';
import ScanAnalyzer from './components/ScanAnalyzer.jsx';
import PatientDashboard from './components/dashboard/PatientDashboard.jsx';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Kerala Healthcare
              </Typography>
              <Button color="inherit" component={Link} to="/symptom-analyzer">
                <AssessmentIcon sx={{ mr: 1 }} />
                Symptom Checker
              </Button>
              <Button color="inherit" component={Link} to="/hospital-finder">
                <HospitalIcon sx={{ mr: 1 }} />
                Find Hospital
              </Button>
              <Button color="inherit" component={Link} to="/appointment">
                <EventIcon sx={{ mr: 1 }} />
                Book Appointment
              </Button>
              <Button color="inherit" component={Link} to="/scan">
                <ScanIcon sx={{ mr: 1 }} />
                Scan Reports
              </Button>
              <Button color="inherit" component={Link} to="/dashboard">
                <DashboardIcon sx={{ mr: 1 }} />
                Dashboard
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={
              <Typography variant="h4" component="h1">
                Welcome to Kerala Healthcare
              </Typography>
            } />
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/symptom-analyzer" element={<SymptomAnalyzer />} />
            <Route path="/hospital-finder" element={<HospitalFinderPage />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/scan" element={<ScanAnalyzer />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
