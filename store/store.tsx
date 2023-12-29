import { configureStore } from '@reduxjs/toolkit'
import formularioReducer from '../slices/formularioSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      formulario: formularioReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];