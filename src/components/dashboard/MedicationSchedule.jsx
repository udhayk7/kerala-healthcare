import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';

const MedicationSchedule = () => {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      timing: ['Morning', 'Evening'],
      nextDose: '2024-01-20T08:00',
      taken: false,
    },
    {
      id: 2,
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      timing: ['Morning'],
      nextDose: '2024-01-20T08:00',
      taken: true,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    timing: [],
    nextDose: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewMedication({
      name: '',
      dosage: '',
      frequency: '',
      timing: [],
      nextDose: '',
    });
    setEditingId(null);
  };

  const handleAdd = () => {
    if (editingId !== null) {
      setMedications(medications.map(med =>
        med.id === editingId ? { ...newMedication, id: editingId } : med
      ));
    } else {
      setMedications([...medications, { ...newMedication, id: Date.now(), taken: false }]);
    }
    handleClose();
  };

  const handleEdit = (medication) => {
    setNewMedication(medication);
    setEditingId(medication.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const toggleTaken = (id) => {
    setMedications(medications.map(med =>
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  const timingOptions = ['Morning', 'Afternoon', 'Evening', 'Night'];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Medication Schedule</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          size="small"
        >
          Add Medication
        </Button>
      </Box>

      <List>
        {medications.map((med) => (
          <ListItem
            key={med.id}
            secondaryAction={
              <Box>
                <IconButton onClick={() => toggleTaken(med.id)}>
                  {med.taken ? <CheckCircleIcon color="success" /> : <PendingIcon />}
                </IconButton>
                <IconButton onClick={() => handleEdit(med)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(med.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText
              primary={med.name}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="text.primary">
                    {med.dosage} - {med.frequency}
                  </Typography>
                  <br />
                  {med.timing.map((time) => (
                    <Chip
                      key={time}
                      label={time}
                      size="small"
                      sx={{ mr: 0.5, mt: 0.5 }}
                    />
                  ))}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editingId !== null ? 'Edit Medication' : 'Add New Medication'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Medication Name"
            fullWidth
            value={newMedication.name}
            onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Dosage"
            fullWidth
            value={newMedication.dosage}
            onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Frequency"
            fullWidth
            value={newMedication.frequency}
            onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Timing</InputLabel>
            <Select
              multiple
              value={newMedication.timing}
              onChange={(e) => setNewMedication({ ...newMedication, timing: e.target.value })}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {timingOptions.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Next Dose"
            type="datetime-local"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newMedication.nextDose}
            onChange={(e) => setNewMedication({ ...newMedication, nextDose: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">
            {editingId !== null ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MedicationSchedule;
