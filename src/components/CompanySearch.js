import React, { useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';

const companies = ["Company A", "Company B", "Company C"]; // Example companies

const CompanySearch = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <Box my={2}>
      <Autocomplete
        options={companies}
        onChange={(event, newValue) => setSelectedCompany(newValue)}
        renderInput={(params) => <TextField {...params} label="Search Company" variant="outlined" fullWidth />}
      />
    </Box>
  );
};

export default CompanySearch;
