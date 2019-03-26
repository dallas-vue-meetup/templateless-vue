import styled, { ThemeProvider } from 'vue-styled-components';
import HelloWorld from '@/components/HelloWorld.vue';
import logo from '@/assets/logo.png';

const theme = {
  fonts: '"Avenir", Helvetica, Arial, sans-serif',
};

const AppStyles = styled.div`
  font-family: ${props => props.theme.fonts};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles id="app">
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
