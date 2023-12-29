import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeValueForm } from '../../slices/formularioSlice';
import { labelTargetValue } from '../../functions/labelTargetValue';
import { validated } from '../../functions/validated';

interface Items {
  id: number;
  value: string;
}
interface InputSelect {
  label: string;
  name: string;
  validation: string;
  isRequired: boolean; 
  items: Array<Items>;
  disabled: boolean;
}

export const InputSelect = ({ label, name, items, isRequired, disabled }: InputSelect) => {

  const dispatch = useAppDispatch();
  const {form, showError} = useAppSelector(state => state.formulario);
  const {[name] : valoresInput} = form;
  const {value, error} = valoresInput;
  
  const onChange = ({target}) => {
    const errorValue = validated(isRequired, target.value, null);
    const valueLabel = labelTargetValue(target.value, items);
    dispatch(changeValueForm({value: target.value, name: name, error: errorValue, valueLabel}))
  }

  return (
    <FormControl fullWidth error={error && showError} required={isRequired}>
      <InputLabel id={label + "id"} >{label}</InputLabel>
      <Select
        labelId={label + "id"}
        label={label}
        onChange={onChange}
        error={error && showError}
        value={value}
        disabled={disabled}
      >
        {
          items.map((element) =>
            <MenuItem key={element.id + element.value +"menuItem"} value={element.id}>{element.value}</MenuItem>
          )
        }
      </Select>
      {
        error && showError &&
        <FormHelperText>Este campo tiene un problema.</FormHelperText>
      }
    </FormControl>
  )
}
