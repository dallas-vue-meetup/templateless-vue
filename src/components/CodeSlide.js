import Prism from 'vue-prism-component';
import styled from 'vue-styled-components';
import Slide from './Slide';

const CodeWrapper = styled.div`
  height: 80vh;
  width: 85vw;
`;

const CodeBlock = styled.div`
  background: ${props => props.theme.mediumGrey};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  font-size: 1.5rem;

  .buttons {
    display: 'flex';
    width: 5em;
    justify-content: space-around;
    padding: 0.5em 0.75em;
  }

  .window-btn {
    content: '';
    height: 0.75em;
    width: 0.75em;
    display: block;
    border-radius: 50%;
  }

  .window-btn:first-child {
    background: orangered;
  }

  .window-btn:nth-child(2) {
    background: gold;
  }

  .window-btn:nth-child(3) {
    background: limegreen;
  }

  pre {
    background: none;
    padding: 0 1em;
    margin: 0;
  }

  code {
    font-family: 'Ubuntu Mono';
  }
`;

const CodeSlide = ({ props }) => {
  return (
    <Slide>
      <CodeWrapper>
        <h1>{props.title}</h1>
        <CodeBlock>
          {/* buttons */}
          <div class="buttons">
            <span class="window-btn" />
            <span class="window-btn" />
            <span class="window-btn" />
          </div>
          <Prism language="jsx">{props.code}</Prism>
        </CodeBlock>
      </CodeWrapper>
    </Slide>
  );
};

export default CodeSlide;
