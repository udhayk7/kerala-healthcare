import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressCharts = () => {
  // Sample data for vital signs trend
  const vitalSignsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Blood Pressure (Systolic)',
        data: [120, 118, 122, 119],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Heart Rate',
        data: [72, 75, 71, 73],
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  // Sample data for medication adherence
  const medicationData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Medication Adherence (%)',
        data: [95, 90, 100, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for symptom severity
  const symptomData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Average Symptom Severity',
        data: [3, 2.5, 2, 1.5],
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const adherenceOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Adherence (%)',
        },
      },
    },
  };

  const severityOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: 'Severity Level',
        },
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Progress Charts
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Vital Signs Trend
            </Typography>
            <Box sx={{ height: 300 }}>
              <Line data={vitalSignsData} options={chartOptions} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Medication Adherence
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar data={medicationData} options={adherenceOptions} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Symptom Severity Trend
            </Typography>
            <Box sx={{ height: 300 }}>
              <Line data={symptomData} options={severityOptions} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgressCharts;
