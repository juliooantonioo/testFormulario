import { Grid } from '@mui/material';
import React from 'react';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';
import { InputRadio } from './InputRadio';

export const CampoFormulario = ({name, label, type, value, items, isRequired, validation}) => {
  return (
    <Grid item xs={12} padding={1} justifyContent={'center'} display={'flex'}>
      <Grid item xs={8}>
      {
        (type === 'Select') && <InputSelect name={name} label={label} items={items} isRequired={isRequired} validation={''}/>
      }
      {
       (type === 'TextInput') && <InputText name={name} label={label} validation={validation} isRequired={isRequired}/> 
      }
      {
        (type === 'Radio') && <InputRadio name={name} label={label} items={items} isRequired={isRequired} validation={''}/>
      }
      </Grid>
    </Grid>
  )
};

