import React, { useState } from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  background: 'linear-gradient(145deg, #64b5f6, #2196f3)',
  borderRadius: 8,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#555',
    },
    '&:hover fieldset': {
      borderColor: '#777',
    },
  },
  '& .MuiInputBase-input': {
    color: "black",
    background:"#fff",
  },
}));

const PeriodIntervalSetter = ({ onPeriodChange, onIntervalChange }) => {
  const [period, setPeriod] = useState('');
  const [interval, setInterval] = useState('');

  return (
    <Box my={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <StyledTextField
            label="Period (e.g., 1 Day, 1 Week)"
            value={period}
            onChange={(e) => { setPeriod(e.target.value); onPeriodChange(e.target.value); }}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            label="Interval (e.g., 1 Hour, 2 Days)"
            value={interval}
            onChange={(e) => { setInterval(e.target.value); onIntervalChange(e.target.value); }}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PeriodIntervalSetter;
