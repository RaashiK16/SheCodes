import React, { useState } from 'react';
import { TextField, MenuItem, Grid, Box } from '@mui/material';

const periods = ["1 Day", "1 Week", "1 Month"];
const intervals = ["1 Hour", "6 Hours", "12 Hours"];

const PeriodIntervalSetter = ({ onPeriodChange, onIntervalChange }) => {
  const [period, setPeriod] = useState('');
  const [interval, setInterval] = useState('');

  return (
    <Box my={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            select
            label="Period"
            value={period}
            onChange={(e) => { setPeriod(e.target.value); onPeriodChange(e.target.value); }}
            fullWidth
            variant="outlined"
          >
            {periods.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Interval"
            value={interval}
            onChange={(e) => { setInterval(e.target.value); onIntervalChange(e.target.value); }}
            fullWidth
            variant="outlined"
          >
            {intervals.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PeriodIntervalSetter;
