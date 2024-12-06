import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Alert,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
  const { showAuthModal, closeAuthModal, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate authentication
    // In a real app, this would make an API call
    login({
      id: '1',
      email: formData.email,
      name: formData.name || 'User',
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog 
      open={showAuthModal} 
      onClose={closeAuthModal}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {isLogin ? 'Login' : 'Register'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={closeAuthModal}
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {!isLogin && (
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
          )}
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              py: 1.5,
              background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8, #6d28d9)',
              },
            }}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Button
                onClick={() => setIsLogin(!isLogin)}
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 600,
                  p: 0,
                  ml: 0.5,
                  '&:hover': {
                    background: 'none',
                    textDecoration: 'underline',
                  },
                }}
              >
                {isLogin ? 'Register' : 'Login'}
              </Button>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
