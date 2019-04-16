import styled, { ThemeProvider } from 'vue-styled-components';
import SlideControl from './components/SlideControl';

const theme = {
  fonts: '"Avenir", Helvetica, Arial, sans-serif',
  darkGrey: '#303640',
  white: '#ffffff',
  lightGrey: '#adadad',
  mediumGrey: '#494e57',
  green: '#4ebe8c',
  red: '#f07078',
  blue: '#4dd0e1',
};

const fontWeight = 300;

const AppStyles = styled.div`
  * {
    font-family: ${props => props.theme.fonts};
    box-sizing: border-box;
  }

  h1 {
    font-size: 5rem;
    font-weight: ${fontWeight};
    margin: 0.5rem;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: ${fontWeight};
    margin: 0;
  }

  h3 {
    font-size: 2rem;
    font-weight: ${fontWeight};
    margin: 0;
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
