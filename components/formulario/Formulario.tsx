import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CampoFormulario } from './CampoFormulario'
import styled from '@emotion/styled'
import { useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import { getFormulario } from '../../services/formularioServices';
import { initializeForm, showError } from '../../slices/formularioSlice';
import { ModalResume } from './ModalResume';
import { ModalError } from './ModalError';
import colors from '../../styles';

const StyledGrid = styled(Grid)`
    width: 90%;
    height: 90%;
    background-color: ${colors.colorForm};
    border-radius: 10px;
    padding-inline: 2%;
    padding-block: 1%;
    overflow-y: auto;
`;

export const Formulario = () => {

  const {items, form} = useAppSelector(state => state.formulario);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);

  const saveDataForm = async () => {
    try{
      const data = await getFormulario();
      dispatch(initializeForm(data));
    } catch {
      setOpenModalError(true);
    }
    setLoading(false);
  }

  const validateForm = () => {
    const todosLosCamposValidos = Object.values(form).every(item => item.error === false || item.disabled);
    if (todosLosCamposValidos){
      setOpenModal(true);
    } else {
      dispatch(showError(true));
    }
  }

  useEffect(() => {
    saveDataForm();
  }, [])
  
  return (
    <StyledGrid>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>Formulario</Typography>
      {
        !loading &&
        <>
          {
            items.map((element) =>
              <CampoFormulario
                key={element.name}
                name={element.name}
                label={element.label}
                type={element.type}
                value={(element.value) ? element.value : ""}
                items={element.items}
                isRequired={element.isRequired}
                validation={element.validation}
                disabled = {element.disabled}
              />
            )
          }
          <Grid container justifyContent={'center'}>
            <Grid item>
              <Button fullWidth variant='outlined' onClick={validateForm}>
                Confirmar
              </Button>
            </Grid>
          </Grid>
        </>
      }
      {
        loading &&
        <Grid container justifyContent={'center'}  padding={30}>
          <CircularProgress />
        </Grid>
      } 
    <ModalResume open={openModal} setOpen={setOpenModal}/>
    <ModalError open={openModalError} setOpen={setOpenModalError}/>
    </StyledGrid>
  )
};
