import { createSlice } from '@reduxjs/toolkit';
import { generateObject } from '../functions/generateObject';

interface TextInputItem {
  label: string;
  name: string;
  isRequired: boolean;
  disabled: boolean;
  type: string;
  validation: string;
  value: null | string;
}

interface SelectItem {
  label: string;
  items: { id: number; value: string }[];
  name: string;
  isRequired: boolean;
  disabled: boolean;
  type: string;
  value: null | string | number;
  validation: string;
}

interface Error{
  error: boolean;
}

export type FormItem = TextInputItem & SelectItem & Error;

export interface Formulario {
  items: Array<FormItem>;
  form: Record<string, any>;
  showError: boolean;
}

const initialState : Formulario = {
  items: [],
  form: {},
  showError: false,
}

export const formularioSlice = createSlice({
  name: 'formulario',
  initialState,
  reducers: {
    initializeForm: (state, action) => {
      state.items = action.payload;
      state.form = generateObject(action.payload);
    },
    changeValueForm: (state, action) => {
      state.form = {...state.form, [action.payload.name]: {
        ...state.form[action.payload.name],
        value: action.payload.value,
        error: action.payload.error,
        valueLabel: action.payload.valueLabel,
      }};
    },
    showError: (state, action) => {
      state.showError = action.payload;
    }
  }
})

export const { initializeForm, changeValueForm, showError } = formularioSlice.actions

export default formularioSlice.reducer