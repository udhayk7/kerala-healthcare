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
  Rating,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SymptomTracker = () => {
  const [symptoms, setSymptoms] = useState([
    {
      id: 1,
      date: '2024-01-20',
      symptom: 'Headache',
      severity: 3,
      notes: 'Mild throbbing pain, started after lunch',
      duration: '2 hours',
    },
    // Add more sample data as needed
  ]);

  const [open, setOpen] = useState(false);
  const [newSymptom, setNewSymptom] = useState({
    date: '',
    symptom: '',
    severity: 0,
    notes: '',
    duration: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewSymptom({
      date: '',
      symptom: '',
      severity: 0,
      notes: '',
      duration: '',
    });
    setEditingId(null);
  };

  const handleAdd = () => {
    if (editingId !== null) {
      setSymptoms(symptoms.map(symptom =>
        symptom.id === editingId ? { ...newSymptom, id: editingId } : symptom
      ));
    } else {
      setSymptoms([...symptoms, { ...newSymptom, id: Date.now() }]);
    }
    handleClose();
  };

  const handleEdit = (symptom) => {
    setNewSymptom(symptom);
    setEditingId(symptom.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setSymptoms(symptoms.filter(symptom => symptom.id !== id));
  };

  const getSeverityColor = (severity) => {
    if (severity <= 2) return 'success';
    if (severity <= 3) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Symptom Tracker</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          size="small"
        >
          Add Symptom
        </Button>
      </Box>

      <List>
        {symptoms.map((symptom) => (
          <ListItem
            key={symptom.id}
            secondaryAction={
              <Box>
                <IconButton edge="end" onClick={() => handleEdit(symptom)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(symptom.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText
              primary={
                <Box display="flex" alignItems="center" gap={1}>
                  {symptom.symptom}
                  <Chip
                    label={`Severity: ${symptom.severity}/5`}
                    size="small"
                    color={getSeverityColor(symptom.severity)}
                  />
                </Box>
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    {symptom.date} - Duration: {symptom.duration}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="text.secondary">
                    {symptom.notes}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editingId !== null ? 'Edit Symptom' : 'Add New Symptom'}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newSymptom.date}
            onChange={(e) => setNewSymptom({ ...newSymptom, date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Symptom"
            fullWidth
            value={newSymptom.symptom}
            onChange={(e) => setNewSymptom({ ...newSymptom, symptom: e.target.value })}
          />
          <Box sx={{ mt: 2 }}>
            <Typography component="legend">Severity</Typography>
            <Rating
              name="severity"
              value={newSymptom.severity}
              onChange={(event, newValue) => {
                setNewSymptom({ ...newSymptom, severity: newValue });
              }}
              max={5}
            />
          </Box>
          <TextField
            margin="dense"
            label="Duration"
            fullWidth
            value={newSymptom.duration}
            onChange={(e) => setNewSymptom({ ...newSymptom, duration: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Notes"
            fullWidth
            multiline
            rows={4}
            value={newSymptom.notes}
            onChange={(e) => setNewSymptom({ ...newSymptom, notes: e.target.value })}
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

export default SymptomTracker;
