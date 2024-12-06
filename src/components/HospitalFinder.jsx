import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { hospitals } from '../data/hospitalData';

const cities = [
  'Thiruvananthapuram',
  'Kochi',
  'Kozhikode',
  'Thrissur',
  'Kollam',
];

const specialties = [
  'General Medicine',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Oncology',
  'Gynecology',
  'Dermatology',
  'ENT',
  'Ophthalmology'
];

const HospitalFinder = ({ open, onClose, specialty }) => {
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [filters, setFilters] = useState({
    city: '',
    specialty: specialty || '',
    rating: ''
  });

  // Reset filters when dialog opens
  useEffect(() => {
    if (open) {
      setFilters({
        city: '',
        specialty: specialty || '',
        rating: ''
      });
      setFilteredHospitals(hospitals);
    }
  }, [open, specialty]);

  // Filter hospitals whenever filters change
  useEffect(() => {
    console.log('Current filters:', filters);
    console.log('Initial hospitals:', hospitals);
    
    let filtered = [...hospitals];
    
    if (filters.city) {
      console.log('Filtering by city:', filters.city);
      filtered = filtered.filter(hospital => hospital.city === filters.city);
    }
    
    if (filters.specialty) {
      console.log('Filtering by specialty:', filters.specialty);
      filtered = filtered.filter(hospital => 
        hospital.specialties.includes(filters.specialty)
      );
    }
    
    if (filters.rating) {
      console.log('Filtering by rating:', filters.rating);
      filtered = filtered.filter(hospital => 
        hospital.rating >= parseFloat(filters.rating)
      );
    }

    console.log('Filtered hospitals:', filtered);
    setFilteredHospitals(filtered);
  }, [filters]);

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.default'
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Find Nearby Hospitals</Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ mb: 3, bgcolor: 'background.paper' }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel>City</InputLabel>
                        <Select
                          value={filters.city}
                          label="City"
                          onChange={(e) => {
                            console.log('Selected city:', e.target.value); // Debug log
                            setFilters({ ...filters, city: e.target.value });
                          }}
                        >
                          <MenuItem value="">All Cities</MenuItem>
                          {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                              {city}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel>Specialty</InputLabel>
                        <Select
                          value={filters.specialty}
                          label="Specialty"
                          onChange={(e) => {
                            console.log('Selected specialty:', e.target.value); // Debug log
                            setFilters({ ...filters, specialty: e.target.value });
                          }}
                        >
                          <MenuItem value="">All Specialties</MenuItem>
                          {specialties.map((specialty) => (
                            <MenuItem key={specialty} value={specialty}>
                              {specialty}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <FormControl fullWidth>
                        <InputLabel>Minimum Rating</InputLabel>
                        <Select
                          value={filters.rating}
                          label="Minimum Rating"
                          onChange={(e) => {
                            console.log('Selected rating:', e.target.value); // Debug log
                            setFilters({ ...filters, rating: e.target.value });
                          }}
                        >
                          <MenuItem value="">Any Rating</MenuItem>
                          <MenuItem value="4.5">4.5+ ⭐</MenuItem>
                          <MenuItem value="4.0">4.0+ ⭐</MenuItem>
                          <MenuItem value="3.5">3.5+ ⭐</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <Grid container spacing={2}>
                  {filteredHospitals.length > 0 ? (
                    filteredHospitals.map((hospital) => (
                      <Grid item xs={12} key={hospital.id}>
                        <Card
                          sx={{
                            display: 'flex',
                            bgcolor: 'background.paper',
                            '&:hover': { boxShadow: 6 }
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{ width: 200, height: 150, objectFit: 'cover' }}
                            image={hospital.images[0]}
                            alt={hospital.name}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/stroke/hospital-building-exterior-hero.ashx';
                            }}
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <CardContent>
                              <Typography variant="h6">{hospital.name}</Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Rating value={hospital.rating} readOnly precision={0.5} size="small" />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                  ({hospital.rating})
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <LocationIcon fontSize="small" color="action" />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                  {hospital.location.address}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <PhoneIcon fontSize="small" color="action" />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                  {hospital.phone}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {hospital.specialties.map((specialty) => (
                                  <Chip
                                    key={specialty}
                                    label={specialty}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                  />
                                ))}
                              </Box>
                            </CardContent>
                          </Box>
                        </Card>
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Card sx={{ bgcolor: 'background.paper', p: 3, textAlign: 'center' }}>
                        <Typography variant="body1" color="text.secondary">
                          No hospitals found matching your criteria. Try adjusting your filters.
                        </Typography>
                      </Card>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default HospitalFinder;
