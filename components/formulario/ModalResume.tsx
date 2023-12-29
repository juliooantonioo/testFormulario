import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { initializeForm, showError } from '../../slices/formularioSlice';

export const ModalResume = ({open, setOpen}) => {

  const {items, form} = useAppSelector(state => state.formulario);
  const dispatch = useAppDispatch();

  const handleClose = (acepted) => {
    dispatch(showError(false));
    setOpen(false);
    acepted && dispatch(initializeForm(items));
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">
        {"Resumen de respuestas en formulario"}
      </DialogTitle>
      <DialogContent>
        {
          Object.values(form).map(element => 
            <DialogContentText key={element.id + element.label + 'ModalResume'}>
              {element.label} : {element.valueLabel} {element.disabled && 'Campo deshabilitado'}
            </DialogContentText>
            )
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>handleClose(true)}>Aceptar</Button>
        <Button onClick={()=>handleClose(false)}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
