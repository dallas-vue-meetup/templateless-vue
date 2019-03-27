import Prism from 'vue-prism-component';
import styled from 'vue-styled-components';
import Slide from './Slide';

const CodeWrapper = styled.div`
  height: 80vh;
  width: 85vw;
  background: ${props => props.theme.mediumGrey};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  font-size: 2rem;

  pre {
    background: none;
    padding: 0;
    margin: 0;
  }
`;

const CodeSlide = () => {
  return (
    <Slide>
      <CodeWrapper>
        <Prism language="jsx">{`
          const App = () => {
            return (
              <ThemeProvider theme={theme}>
                <AppStyles id="app">
                  <SlideControl />
                </AppStyles>
              </ThemeProvider>
            );
          };
        `}</Prism>
      </CodeWrapper>
    </Slide>
  );
};

export default CodeSlide;
