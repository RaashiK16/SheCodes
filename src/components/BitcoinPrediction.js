import React from 'react';
import { Typography, Box } from '@mui/material';

const BitcoinPrediction = ({ period, interval }) => {
  // Placeholder for the Bitcoin prediction logic
  return (
    <Box mt={4}>
      <Typography variant="h6">
        Best time to buy Bitcoin:
      </Typography>
      <Typography variant="body1">
        Period: {period || "Not set"}
      </Typography>
      <Typography variant="body1">
        Interval: {interval || "Not set"}
      </Typography>
    </Box>
  );
};

export default BitcoinPrediction;
