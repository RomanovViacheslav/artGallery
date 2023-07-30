import React, { useCallback } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { useFormik } from 'formik';
import { Select, TextFieldComponent } from '../../../../components';
import { INITIAL_VALUES } from './FiltersForm.constants';
import { FormFiltersEntity } from '../../../../domains';
import { useAppDispatch, useAppSelector } from '../../../../shared';
import { updateFilters } from '../../slices';

export const FiltersForm = () => {
  const dispatch = useAppDispatch();
  const { authors, locations } = useAppSelector((state) => state.gallery);

  const handleSubmit = (values: FormFiltersEntity) => {
    dispatch(updateFilters(values));
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
  });

  const handleSelectChange = useCallback(
    (fieldName: string) => (event: SelectChangeEvent<any>) => {
      formik.setFieldValue(fieldName, event.target.value);
      formik.handleSubmit();
    },
    [],
  );

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.handleSubmit();
  }, []);

  const handleClearSelect = useCallback(
    (fieldName: string) => {
      formik.setFieldValue(fieldName, '');
      formik.handleSubmit();
    },
    [formik],
  );

  const handleYearInputChange = useCallback((value: string[]) => {
    formik.setFieldValue('created', value);
    if (
      (value[0].length === 4 && value[1].length === 0) ||
      (value[1].length === 4 && value[0].length === 0) ||
      (value[1].length === 4 && value[0].length === 4)
    ) {
      formik.handleSubmit();
    }
  }, []);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      justifyContent="space-between"
      gap="20px"
      width="100%"
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
        value={formik.values.created}
        onInputChange={handleYearInputChange}
      />
    </Box>
  );
};
