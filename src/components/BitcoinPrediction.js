import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box } from '@mui/material';

const BitcoinPrediction = ({ period, interval }) => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    if (period && interval) {
      // Replace with your API endpoint
      axios.get(`https://api.example.com/predict?period=${period}&interval=${interval}`)
        .then(response => setPrediction(response.data))
        .catch(error => console.error('Error fetching prediction:', error));
    }
  }, [period, interval]);

  return (
    <Box my={2}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Best Time to Buy Bitcoin
          </Typography>
          {prediction ? (
            <Typography variant="body2" color="textSecondary">
              {prediction.bestTime}
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Please select a period and interval to see the prediction.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BitcoinPrediction;
