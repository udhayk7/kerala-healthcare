import React, { useState, useEffect } from 'react';
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
  CircularProgress,
  Card,
  CardContent
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';

const steps = ['Select Hospital', 'Choose Doctor', 'Pick Date & Time', 'Confirm'];

const AppointmentBooking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hospitals');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const fetchDoctors = async (hospitalId) => {
    // In a real app, this would fetch doctors from the backend
    const hospital = hospitals.find(h => h.id === hospitalId);
    if (hospital && hospital.doctors) {
      setDoctors(hospital.doctors);
    }
  };

  const fetchAvailableSlots = async (date, doctorId) => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments/slots', {
        params: { date, doctorId }
      });
      setAvailableSlots(response.data);
    } catch (error) {
      console.error('Error fetching slots:', error);
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleBookAppointment();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleHospitalSelect = (hospitalId) => {
    setSelectedHospital(hospitalId);
    fetchDoctors(hospitalId);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (selectedDoctor) {
      fetchAvailableSlots(date, selectedDoctor);
    }
  };

  const handleBookAppointment = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/appointments', {
        hospitalId: selectedHospital,
        doctorId: selectedDoctor,
        date: selectedDate,
        time: selectedTime
      });
      setBookingConfirmed(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
    setLoading(false);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            {hospitals.map((hospital) => (
              <Grid item xs={12} key={hospital.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    border: selectedHospital === hospital.id ? 2 : 0,
                    borderColor: 'primary.main'
                  }}
                  onClick={() => handleHospitalSelect(hospital.id)}
                >
                  <CardContent>
                    <Typography variant="h6">{hospital.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hospital.location.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Specialties: {hospital.specialties.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={2}>
            {doctors.map((doctor) => (
              <Grid item xs={12} sm={6} key={doctor.name}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    border: selectedDoctor === doctor.id ? 2 : 0,
                    borderColor: 'primary.main'
                  }}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <CardContent>
                    <Typography variant="h6">{doctor.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {doctor.specialty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Experience: {doctor.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateSelect}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  minDate={new Date()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Time</InputLabel>
                <Select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  label="Select Time"
                >
                  {Object.entries(availableSlots).map(([period, slots]) => (
                    <MenuItem key={period} disabled>
                      {period.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Appointment Summary
            </Typography>
            <Typography>Hospital: {selectedHospital}</Typography>
            <Typography>Doctor: {selectedDoctor}</Typography>
            <Typography>
              Date: {selectedDate?.toLocaleDateString()}
            </Typography>
            <Typography>Time: {selectedTime}</Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  if (bookingConfirmed) {
    return (
      <Alert severity="success">
        <Typography variant="h6">Appointment Confirmed!</Typography>
        <Typography>
          Your appointment has been successfully booked. You will receive a
          confirmation email shortly.
        </Typography>
      </Alert>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Book an Appointment
        </Typography>

        <Stepper activeStep={activeStep} sx={{ my: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4, mb: 2 }}>{renderStepContent(activeStep)}</Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={
              loading ||
              (activeStep === 0 && !selectedHospital) ||
              (activeStep === 1 && !selectedDoctor) ||
              (activeStep === 2 && (!selectedDate || !selectedTime))
            }
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : activeStep === steps.length - 1 ? (
              'Confirm Booking'
            ) : (
              'Next'
            )}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AppointmentBooking;
