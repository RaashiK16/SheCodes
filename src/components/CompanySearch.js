import React, { useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  background: '#fff',
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
    color: 'black', // Set input text color to black
  },
  '& .MuiAutocomplete-input': {
    color: 'black', // Set autocomplete text color to black while typing
  },
}));

const initialCompanies = ["Company A", "Company B", "Company C"]; // Example companies

const CompanySearch = () => {
  const [companies, setCompanies] = useState(initialCompanies);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyChange = (event, newValue) => {
    setSelectedCompany(newValue);
    if (newValue && !companies.includes(newValue)) {
      setCompanies([...companies, newValue]);
    }
  };

  return (
    <Box my={2}>
      <Autocomplete
        options={companies}
        freeSolo
        value={selectedCompany}
        onChange={handleCompanyChange}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label="Search Company"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </Box>
  );
};

export default CompanySearch;
