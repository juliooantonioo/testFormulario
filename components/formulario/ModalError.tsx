import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

export const ModalError = ({open, setOpen}) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">
        {"Error en obtención del formulario"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ha ocurrido un problema al obtener los datos del formulario, intentelo más tarde.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}