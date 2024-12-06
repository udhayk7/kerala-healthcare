import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Paper
} from '@mui/material';
import {
  LocalHospital as HospitalIcon,
  Assessment as AssessmentIcon,
  EventAvailable as EventIcon,
  BiotechOutlined as ScanIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Home as HomeIcon
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
      main: '#1e88e5',
      light: '#4b9fea',
      dark: '#1565c0',
    },
    secondary: {
      main: '#7c4dff',
      light: '#9d71fd',
      dark: '#5c35d5',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

const navItems = [
  { path: '/', icon: <HomeIcon />, label: 'Home' },
  { path: '/symptom-analyzer', icon: <AssessmentIcon />, label: 'Symptom Checker' },
  { path: '/hospital-finder', icon: <HospitalIcon />, label: 'Find Hospital' },
  { path: '/appointment', icon: <EventIcon />, label: 'Book Appointment' },
  { path: '/scan', icon: <ScanIcon />, label: 'Scan Reports' },
  { path: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.path} 
            component={Link} 
            to={item.path}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <AppBar 
            position="fixed" 
            sx={{ 
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: 'background.paper',
              color: 'primary.main',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <Toolbar>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #1e88e5 30%, #7c4dff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Kerala Healthcare
              </Typography>
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={Link}
                      to={item.path}
                      color="inherit"
                      startIcon={item.icon}
                      sx={{
                        px: 2,
                        py: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </AppBar>

          <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            open={isMobile ? mobileOpen : true}
            onClose={handleDrawerToggle}
            sx={{
              width: 250,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 250,
                boxSizing: 'border-box',
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'background.paper',
              },
            }}
          >
            {drawer}
          </Drawer>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              mt: 8,
              backgroundColor: 'background.default',
            }}
          >
            <Container maxWidth="lg">
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3,
                  backgroundColor: 'transparent'
                }}
              >
                <Routes>
                  <Route path="/" element={
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                      <Typography 
                        variant="h4" 
                        component="h1" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          background: 'linear-gradient(45deg, #1e88e5 30%, #7c4dff 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Welcome to Kerala Healthcare
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Your trusted partner in healthcare management
                      </Typography>
                    </Box>
                  } />
                  <Route path="/dashboard" element={<PatientDashboard />} />
                  <Route path="/symptom-analyzer" element={<SymptomAnalyzer />} />
                  <Route path="/hospital-finder" element={<HospitalFinderPage />} />
                  <Route path="/appointment" element={<AppointmentBooking />} />
                  <Route path="/scan" element={<ScanAnalyzer />} />
                </Routes>
              </Paper>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
