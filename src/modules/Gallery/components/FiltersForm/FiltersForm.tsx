import React, { memo } from 'react';
import { Box } from '@mui/material';
import { Select, TextFieldComponent } from '../../../../components';
import { useFormFilters } from './helpers';

export const FiltersForm = () => {
  const {
    formik,
    authors,
    locations,
    filters,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
    handleYearInputChange,
  } = useFormFilters();
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      justifyContent="space-between"
      gap="20px"
      width="100%"
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      })}
    >
      <TextFieldComponent
        type="text"
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={handleInputChange}
      />
      <Select
        name="Author"
        value={formik.values.author}
        onChange={handleSelectChange('author')}
        data={authors}
        onClear={() => handleClearSelect('author')}
      />

      <Select
        name="Location"
        value={formik.values.location}
        onChange={handleSelectChange('location')}
        data={locations}
        onClear={() => handleClearSelect('location')}
      />

      <Select
        isCreated
        multiple
        name="Created"
        defaultValue={filters.created}
        value={formik.values.created}
        onInputChange={handleYearInputChange}
      />
    </Box>
  );
};
