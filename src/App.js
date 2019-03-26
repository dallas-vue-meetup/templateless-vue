import styled, { ThemeProvider } from 'vue-styled-components';
import SlideControl from './components/SlideControl';

const theme = {
  fonts: '"Avenir", Helvetica, Arial, sans-serif',
  darkGrey: '#303640',
  white: '#ffffff',
  lightGrey: '#adadad',
  green: '#4ebe8c',
  red: '#f07078',
};

const fontWeight = 300;

const AppStyles = styled.div`
  * {
    font-family: ${props => props.theme.fonts};
    box-sizing: border-box;
  }

  h1 {
    font-size: 4rem;
    font-weight: ${fontWeight};
    margin: 1rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: ${fontWeight};
    margin: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: ${fontWeight};
    margin: 1rem;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles id="app">
        <SlideControl />
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
