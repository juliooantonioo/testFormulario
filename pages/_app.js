// import { Provider } from 'react-redux';
import store from '../store/store'; // Ajusta la ruta según tu estructura de archivos
import StoreProvider from '../store/StoreProvider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;