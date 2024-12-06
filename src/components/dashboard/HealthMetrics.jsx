import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const HealthMetrics = () => {
  const [metrics, setMetrics] = useState([
    { id: 1, name: 'Weight', value: '70', unit: 'kg', date: '2024-01-20' },
    { id: 2, name: 'Height', value: '175', unit: 'cm', date: '2024-01-20' },
    { id: 3, name: 'BMI', value: '22.9', unit: 'kg/m²', date: '2024-01-20' },
  ]);

  const [open, setOpen] = useState(false);
  const [newMetric, setNewMetric] = useState({ name: '', value: '', unit: '', date: '' });
  const [editingId, setEditingId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewMetric({ name: '', value: '', unit: '', date: '' });
    setEditingId(null);
  };

  const handleAdd = () => {
    if (editingId !== null) {
      setMetrics(metrics.map(metric => 
        metric.id === editingId ? { ...newMetric, id: editingId } : metric
      ));
    } else {
      setMetrics([...metrics, { ...newMetric, id: Date.now() }]);
    }
    handleClose();
  };

  const handleEdit = (metric) => {
    setNewMetric(metric);
    setEditingId(metric.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setMetrics(metrics.filter(metric => metric.id !== id));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Health Metrics</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          size="small"
        >
          Add Metric
        </Button>
      </Box>

      <List>
        {metrics.map((metric) => (
          <ListItem
            key={metric.id}
            secondaryAction={
              <Box>
                <IconButton edge="end" onClick={() => handleEdit(metric)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(metric.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemText
              primary={metric.name}
              secondary={`${metric.value} ${metric.unit} (${metric.date})`}
            />
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingId !== null ? 'Edit Metric' : 'Add New Metric'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Metric Name"
            fullWidth
            value={newMetric.name}
            onChange={(e) => setNewMetric({ ...newMetric, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Value"
            fullWidth
            value={newMetric.value}
            onChange={(e) => setNewMetric({ ...newMetric, value: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Unit"
            fullWidth
            value={newMetric.unit}
            onChange={(e) => setNewMetric({ ...newMetric, unit: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newMetric.date}
            onChange={(e) => setNewMetric({ ...newMetric, date: e.target.value })}
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

export default HealthMetrics;
