import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography, Button, CircularProgress, Stack } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-specification', {
        name: businessName,
        description: description,
      });
      alert(`Created specification with ID ${response.data.id}`);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ my: 4, '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h6" component="div">
        Create Business Specification
      </Typography>
      <TextField
        required
        id="business-name"
        label="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        aria-label="Enter the name of your business specification"
      />
      <TextField
        multiline
        rows={4}
        required
        id="description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Describe your business specification"
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      <LoadingButton
        loading={loading}
        type="submit"
        onClick={handleCreateSpecification}
        variant="contained"
        aria-label="Create Business Specification"
      >
        Create Specification
      </LoadingButton>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography, Button, CircularProgress, Stack } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleCreateSpecification = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post<BusinessSpec>('/api/business-specification', {
        name: businessName,
        description: description,
      });
      alert(`Created specification with ID ${response.data.id}`);
    } catch (err) {
      setError('Failed to create the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ my: 4, '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h6" component="div">
        Create Business Specification
      </Typography>
      <TextField
        required
        id="business-name"
        label="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        aria-label="Enter the name of your business specification"
      />
      <TextField
        multiline
        rows={4}
        required
        id="description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Describe your business specification"
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      <LoadingButton
        loading={loading}
        type="submit"
        onClick={handleCreateSpecification}
        variant="contained"
        aria-label="Create Business Specification"
      >
        Create Specification
      </LoadingButton>
    </Box>
  );
};

export default CreateBusinessSpecification;