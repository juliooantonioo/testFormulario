import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeValueForm } from '../../slices/formularioSlice';
import { labelTargetValue } from '../../functions/labelTargetValue';
import { validated } from '../../functions/validated';

interface Items {
  id: number;
  value: string;
}
interface InputRadio {
  label: string;
  name: string;
  validation: string;
  isRequired: boolean;
  items: Array<Items>;
}

export const InputRadio = ({label, name, items, isRequired} : InputRadio) => {

  const dispatch = useAppDispatch();
  const {form, showError} = useAppSelector(state => state.formulario);
  const {[name] : valoresInput} = form;
  const {value, error} = valoresInput;
  
  const onChange = ({target}) => {
    const errorValue = validated(isRequired, target.value, null);
    const valueLabel = labelTargetValue(target.value, items);
    dispatch(changeValueForm({value: target.value, name: name, error: errorValue, valueLabel}))
  };

  return (
    <FormControl fullWidth error={error && showError} required={isRequired}>
      <FormLabel >{label}</FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={onChange}
      >
        {
          items.map((element) => 
            <FormControlLabel 
              key={element.id + "inputRadio"+ element.value} 
              value={element.id} 
              control={<Radio />} 
              label={element.value} 
            />
          )
        }
      </RadioGroup>
      {
        error && showError &&
        <FormHelperText>Este campo tiene un problema.</FormHelperText>
      }
    </FormControl>
  )
}
