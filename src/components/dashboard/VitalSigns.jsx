import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VitalSigns = () => {
  const [vitals, setVitals] = useState([
    {
      id: 1,
      date: '2024-01-20',
      time: '08:00',
      bloodPressure: '120/80',
      heartRate: '72',
      temperature: '98.6',
      glucose: '95',
    },
    // Add more sample data as needed
  ]);

  const [open, setOpen] = useState(false);
  const [newVital, setNewVital] = useState({
    date: '',
    time: '',
    bloodPressure: '',
    heartRate: '',
    temperature: '',
    glucose: '',
  });

  // Chart data preparation
  const chartData = {
    labels: vitals.map(v => `${v.date} ${v.time}`),
    datasets: [
      {
        label: 'Heart Rate',
        data: vitals.map(v => v.heartRate),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Glucose',
        data: vitals.map(v => v.glucose),
        borderColor: 'rgb(53, 162, 235)',
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
      title: {
        display: true,
        text: 'Vital Signs Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewVital({
      date: '',
      time: '',
      bloodPressure: '',
      heartRate: '',
      temperature: '',
      glucose: '',
    });
  };

  const handleAdd = () => {
    setVitals([...vitals, { ...newVital, id: Date.now() }]);
    handleClose();
  };

  const handleDelete = (id) => {
    setVitals(vitals.filter(vital => vital.id !== id));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Vital Signs</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          size="small"
        >
          Add Vitals
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date & Time</TableCell>
              <TableCell>Blood Pressure</TableCell>
              <TableCell>Heart Rate</TableCell>
              <TableCell>Temperature</TableCell>
              <TableCell>Glucose</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vitals.map((vital) => (
              <TableRow key={vital.id}>
                <TableCell>{vital.date} {vital.time}</TableCell>
                <TableCell>{vital.bloodPressure}</TableCell>
                <TableCell>{vital.heartRate}</TableCell>
                <TableCell>{vital.temperature}</TableCell>
                <TableCell>{vital.glucose}</TableCell>
                <TableCell>
                  <IconButton size="small" onClick={() => handleDelete(vital.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ height: 300 }}>
        <Line data={chartData} options={chartOptions} />
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Vital Signs</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newVital.date}
            onChange={(e) => setNewVital({ ...newVital, date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Time"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newVital.time}
            onChange={(e) => setNewVital({ ...newVital, time: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Blood Pressure (systolic/diastolic)"
            fullWidth
            value={newVital.bloodPressure}
            onChange={(e) => setNewVital({ ...newVital, bloodPressure: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Heart Rate (bpm)"
            fullWidth
            value={newVital.heartRate}
            onChange={(e) => setNewVital({ ...newVital, heartRate: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Temperature (°F)"
            fullWidth
            value={newVital.temperature}
            onChange={(e) => setNewVital({ ...newVital, temperature: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Glucose (mg/dL)"
            fullWidth
            value={newVital.glucose}
            onChange={(e) => setNewVital({ ...newVital, glucose: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VitalSigns;
