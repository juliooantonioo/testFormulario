import { FormControl, FormHelperText, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeValueForm } from '../../slices/formularioSlice';
import { validated } from '../../functions/validated';

interface InputText {
  label: string;
  name: string;
  validation: string;
  isRequired: boolean;
}

export const InputText = ({ label, name, validation, isRequired }: InputText )  => {
  const dispatch = useAppDispatch();
  const {form, showError} = useAppSelector(state => state.formulario);
  const {[name] : valoresInput} = form;
  const {value, error} = valoresInput;
  
  const onChange = ({target}) => {
    const errorValue = validated(isRequired, target.value, validation);
    dispatch(changeValueForm({value: target.value, name: name, error: errorValue, valueLabel: target.value}))
  }

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        required={isRequired}
        error={error && showError}
        value={value}
        onChange={onChange}
        helperText={error && showError && "Este campo tiene un problema."}
      />
    </FormControl>
  )
}
