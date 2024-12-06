import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import HealthMetrics from './HealthMetrics.jsx';
import MedicationSchedule from './MedicationSchedule.jsx';
import VitalSigns from './VitalSigns.jsx';
import SymptomTracker from './SymptomTracker.jsx';
import ProgressCharts from './ProgressCharts.jsx';

const PatientDashboard = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    patientId: 'P12345',
    age: 45,
    lastUpdate: new Date().toLocaleDateString()
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Patient Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome back, {userData.name} | Patient ID: {userData.patientId}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Last updated: {userData.lastUpdate}
      </Typography>

      <Grid container spacing={3}>
        {/* Health Metrics Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <HealthMetrics />
          </Paper>
        </Grid>

        {/* Medication Schedule Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <MedicationSchedule />
          </Paper>
        </Grid>

        {/* Vital Signs Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <VitalSigns />
          </Paper>
        </Grid>

        {/* Symptom Tracker Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <SymptomTracker />
          </Paper>
        </Grid>

        {/* Progress Charts Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <ProgressCharts />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDashboard;
