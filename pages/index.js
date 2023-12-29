import Head from 'next/head';
import { Formulario } from '../components/formulario/Formulario';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../styles';

const StyledContainer = styled(Grid)`
  direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colorBackground};
  height: 100vh;
  display: flex;
  `;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Formulario</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <StyledContainer
            container
          >
            <Formulario/>
          </StyledContainer>
        </main>
      <style jsx global>{`
        html,
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
