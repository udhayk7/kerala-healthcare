import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { hospitals } from '../data/hospitalData';

// Kerala districts and their sub-districts
const districts = {
  Thiruvananthapuram: ['Thiruvananthapuram', 'Neyyattinkara', 'Kattakada', 'Nedumangad', 'Varkala'],
  Kollam: ['Kollam', 'Karunagappally', 'Kunnathur', 'Punalur', 'Pathanapuram'],
  Pathanamthitta: ['Pathanamthitta', 'Ranni', 'Mallappally', 'Adoor', 'Kozhencherry'],
  Alappuzha: ['Alappuzha', 'Chengannur', 'Cherthala', 'Kuttanad', 'Mavelikkara'],
  Kottayam: ['Kottayam', 'Changanassery', 'Kanjirappally', 'Pala', 'Vaikom'],
  Idukki: ['Thodupuzha', 'Devikulam', 'Udumbanchola', 'Peerumade', 'Idukki'],
  Ernakulam: ['Kochi', 'Aluva', 'Paravur', 'Kothamangalam', 'Muvattupuzha'],
  Thrissur: ['Thrissur', 'Chalakudy', 'Kodungallur', 'Irinjalakuda', 'Chavakkad'],
  Palakkad: ['Palakkad', 'Alathur', 'Mannarkkad', 'Ottappalam', 'Chittur'],
  Malappuram: ['Malappuram', 'Tirur', 'Perinthalmanna', 'Manjeri', 'Ponnani'],
  Kozhikode: ['Kozhikode', 'Vadakara', 'Koyilandy', 'Thamarassery', 'Quilandy'],
  Wayanad: ['Kalpetta', 'Mananthavady', 'Sulthan Bathery', 'Vythiri'],
  Kannur: ['Kannur', 'Thalassery', 'Iritty', 'Payyanur', 'Thaliparamba'],
  Kasaragod: ['Kasaragod', 'Hosdurg', 'Vellarikundu', 'Manjeshwaram']
};

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
  'Ophthalmology',
  'Psychiatry',
  'Nephrology',
  'Urology',
  'Gastroenterology',
  'Pulmonology'
];

const HospitalFinderPage = () => {
  const [filters, setFilters] = useState({
    district: '',
    subDistrict: '',
    specialty: '',
    rating: ''
  });
  const [subDistricts, setSubDistricts] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  useEffect(() => {
    if (filters.district) {
      setSubDistricts(districts[filters.district] || []);
      if (!districts[filters.district]?.includes(filters.subDistrict)) {
        setFilters(prev => ({ ...prev, subDistrict: '' }));
      }
    } else {
      setSubDistricts([]);
      setFilters(prev => ({ ...prev, subDistrict: '' }));
    }
  }, [filters.district]);

  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    if (field === 'district') {
      newFilters.subDistrict = '';
    }
    setFilters(newFilters);

    let filtered = [...hospitals];
    
    if (newFilters.district) {
      filtered = filtered.filter(hospital => hospital.district === newFilters.district);
    }
    
    if (newFilters.subDistrict) {
      filtered = filtered.filter(hospital => hospital.subDistrict === newFilters.subDistrict);
    }
    
    if (newFilters.specialty) {
      filtered = filtered.filter(hospital => 
        hospital.specialties.includes(newFilters.specialty)
      );
    }
    
    if (newFilters.rating) {
      filtered = filtered.filter(hospital => 
        hospital.rating >= parseFloat(newFilters.rating)
      );
    }

    setFilteredHospitals(filtered);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Find Nearby Hospitals
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>District</InputLabel>
                <Select
                  value={filters.district}
                  label="District"
                  onChange={(e) => handleFilterChange('district', e.target.value)}
                >
                  <MenuItem value="">All Districts</MenuItem>
                  {Object.keys(districts).map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth disabled={!filters.district}>
                <InputLabel>Sub District</InputLabel>
                <Select
                  value={filters.subDistrict}
                  label="Sub District"
                  onChange={(e) => handleFilterChange('subDistrict', e.target.value)}
                >
                  <MenuItem value="">All Sub Districts</MenuItem>
                  {subDistricts.map((subDistrict) => (
                    <MenuItem key={subDistrict} value={subDistrict}>
                      {subDistrict}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Specialty</InputLabel>
                <Select
                  value={filters.specialty}
                  label="Specialty"
                  onChange={(e) => handleFilterChange('specialty', e.target.value)}
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
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Minimum Rating</InputLabel>
                <Select
                  value={filters.rating}
                  label="Minimum Rating"
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
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

      <Grid container spacing={3}>
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <Grid item xs={12} md={6} lg={4} key={hospital.id}>
              <Card 
                elevation={1}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    pt: '56.25%', // 16:9 aspect ratio
                  }}
                >
                  <Box
                    component="img"
                    src={hospital.images[0]}
                    alt={hospital.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2';
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 1.5,
                  p: 2,
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      lineHeight: 1.3,
                    }}
                  >
                    {hospital.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.5,
                    }}
                  >
                    {hospital.location.address}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'warning.main',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    Rating: {hospital.rating} ⭐
                  </Typography>
                  <Box sx={{ 
                    mt: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.75,
                  }}>
                    {hospital.specialties.slice(0, 4).map((specialty, index) => (
                      <Typography
                        key={index}
                        component="span"
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          backgroundColor: 'primary.50',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {specialty}
                      </Typography>
                    ))}
                    {hospital.specialties.length > 4 && (
                      <Typography
                        component="span"
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          backgroundColor: 'grey.100',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        +{hospital.specialties.length - 4} more
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No hospitals found matching your criteria
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HospitalFinderPage;
