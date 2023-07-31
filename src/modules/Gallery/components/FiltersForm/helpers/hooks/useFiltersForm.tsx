import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../../shared';
import { FormFiltersEntity } from '../../../../../../domains';
import { updateFilters } from '../../../../slices';
import { INITIAL_VALUES } from '../../FiltersForm.constants';

export const useFormFilters = () => {
  const dispatch = useAppDispatch();
  const { authors, locations, filters } = useAppSelector((state) => state.gallery);

  const handleSubmit = useCallback(
    (values: FormFiltersEntity) => {
      dispatch(updateFilters(values));
    },
    [],
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
  });

  const handleSelectChange = useCallback(
    (fieldName: string) => (event: SelectChangeEvent<any>) => {
      formik.setFieldValue(fieldName, event.target.value);
      formik.handleSubmit();
    },
    [formik.handleSubmit],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      formik.handleChange(event);
      formik.handleSubmit();
    },
    [formik.handleSubmit],
  );

  const handleClearSelect = useCallback(
    (fieldName: string) => {
      formik.setFieldValue(fieldName, '');
      formik.handleSubmit();
    },
    [formik.handleSubmit],
  );

  const handleYearInputChange = useCallback(
    (value: string[]) => {
      formik.setFieldValue('created', value);
      if (
        (value[0].length === 4 && value[1].length === 0) ||
        (value[1].length === 4 && value[0].length === 0) ||
        (value[1].length === 4 && value[0].length === 4) ||
        (value[1].length === 0 && value[0].length === 0)
      ) {
        formik.handleSubmit();
      }
    },
    [formik.handleSubmit],
  );

  return {
    formik,
    authors,
    locations,
    filters,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
    handleYearInputChange,
  };
};
