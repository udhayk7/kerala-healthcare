import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

// Mock data
const MOCK_HOSPITALS = [
  { id: 1, name: 'Kerala Institute of Medical Sciences (KIMS)', location: 'Thiruvananthapuram' },
  { id: 2, name: 'Amrita Institute of Medical Sciences', location: 'Kochi' },
  { id: 3, name: 'Aster Medcity', location: 'Kochi' },
  { id: 4, name: 'Lakeshore Hospital', location: 'Ernakulam' },
  { id: 5, name: 'Baby Memorial Hospital', location: 'Calicut' }
];

const MOCK_DOCTORS = {
  1: [
    { id: 1, name: 'Dr. Arun Kumar', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Priya Menon', specialization: 'Pediatrics' },
    { id: 3, name: 'Dr. Rajesh Pillai', specialization: 'Orthopedics' }
  ],
  2: [
    { id: 4, name: 'Dr. Sarah Thomas', specialization: 'Neurology' },
    { id: 5, name: 'Dr. Mohammed Ali', specialization: 'Oncology' },
    { id: 6, name: 'Dr. Lakshmi Nair', specialization: 'Gynecology' }
  ],
  3: [
    { id: 7, name: 'Dr. John Mathew', specialization: 'Dermatology' },
    { id: 8, name: 'Dr. Anjali Krishna', specialization: 'ENT' },
    { id: 9, name: 'Dr. Vishnu Prasad', specialization: 'General Medicine' }
  ],
  4: [
    { id: 10, name: 'Dr. Maya Sharma', specialization: 'Psychiatry' },
    { id: 11, name: 'Dr. Deepak Menon', specialization: 'Urology' },
    { id: 12, name: 'Dr. Fathima Zahra', specialization: 'Dentistry' }
  ],
  5: [
    { id: 13, name: 'Dr. Suresh Kumar', specialization: 'Pulmonology' },
    { id: 14, name: 'Dr. Reshma Nair', specialization: 'Ophthalmology' },
    { id: 15, name: 'Dr. Arjun Mohan', specialization: 'Gastroenterology' }
  ]
};

const steps = ['Select Hospital', 'Choose Doctor', 'Pick Date & Time', 'Confirm'];

const AppointmentBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!validateStep()) return;
    
    if (activeStep === steps.length - 1) {
      handleBookAppointment();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const validateStep = () => {
    setError('');
    switch (activeStep) {
      case 0:
        if (!selectedHospital) {
          setError('Please select a hospital');
          return false;
        }
        break;
      case 1:
        if (!selectedDoctor) {
          setError('Please select a doctor');
          return false;
        }
        break;
      case 2:
        if (!selectedDate || !selectedTime) {
          setError('Please select both date and time');
          return false;
        }
        break;
    }
    return true;
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleHospitalSelect = (event) => {
    setSelectedHospital(event.target.value);
    setSelectedDoctor('');
  };

  const handleDoctorSelect = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleBookAppointment = () => {
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedHospital('');
    setSelectedDoctor('');
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingConfirmed(false);
    setError('');
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="hospital-select-label">Select Hospital</InputLabel>
              <Select
                labelId="hospital-select-label"
                id="hospital-select"
                value={selectedHospital}
                label="Select Hospital"
                onChange={handleHospitalSelect}
              >
                {MOCK_HOSPITALS.map((hospital) => (
                  <MenuItem key={hospital.id} value={hospital.id}>
                    {hospital.name} - {hospital.location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="doctor-select-label">Select Doctor</InputLabel>
              <Select
                labelId="doctor-select-label"
                id="doctor-select"
                value={selectedDoctor}
                label="Select Doctor"
                onChange={handleDoctorSelect}
                disabled={!selectedHospital}
              >
                {selectedHospital && MOCK_DOCTORS[selectedHospital].map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialization}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                minDate={dayjs()}
                slotProps={{ textField: { fullWidth: true } }}
              />
              <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Stack>
          </LocalizationProvider>
        );

      case 3:
        const hospital = MOCK_HOSPITALS.find(h => h.id === selectedHospital);
        const doctor = selectedHospital && MOCK_DOCTORS[selectedHospital].find(d => d.id === selectedDoctor);
        
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Appointment Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography><strong>Hospital:</strong> {hospital?.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography><strong>Location:</strong> {hospital?.location}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography><strong>Doctor:</strong> {doctor?.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography><strong>Specialization:</strong> {doctor?.specialization}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography><strong>Date:</strong> {selectedDate?.format('MMMM D, YYYY')}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography><strong>Time:</strong> {selectedTime?.format('hh:mm A')}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );

      default:
        return 'Unknown step';
    }
  };

  if (bookingConfirmed) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="success" sx={{ mb: 3 }}>
          Your appointment has been successfully booked!
        </Alert>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Appointment Confirmed
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for booking with Kerala Healthcare. Your appointment details have been sent to your email.
            </Typography>
            <Button variant="contained" onClick={handleReset}>
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4 }}>
          Book an Appointment
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 4, minHeight: '200px' }}>
          {getStepContent(activeStep)}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AppointmentBooking;
