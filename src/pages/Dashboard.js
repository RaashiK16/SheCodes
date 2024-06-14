import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import CompanySearch from '../components/CompanySearch';
import PeriodIntervalSetter from '../components/PeriodIntervalSetter';
import BitcoinPrediction from '../components/BitcoinPrediction';

const Dashboard = () => {
  const [period, setPeriod] = useState('');
  const [interval, setInterval] = useState('');

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Period:', period);
    console.log('Interval:', interval);
    // You can add further logic for form submission or API calls
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Bitcoin Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CompanySearch />
          </Grid>
          <Grid item xs={12}>
            <PeriodIntervalSetter onPeriodChange={setPeriod} onIntervalChange={setInterval} />
          </Grid>
          <Grid item xs={12}>
            <BitcoinPrediction period={period} interval={interval} />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
