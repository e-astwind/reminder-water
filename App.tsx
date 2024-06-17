
import { StatusBar } from 'react-native';
import MainRoutes from './src/routes/main.routes';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './src/global/colors/colors';

export default function App() {
  return (
    <>
  
    <StatusBar barStyle="light-content" backgroundColor="#121015"/>
    <ThemeProvider theme={colors}>
      <MainRoutes/>
    </ThemeProvider>
    </>
  
  );
}

 