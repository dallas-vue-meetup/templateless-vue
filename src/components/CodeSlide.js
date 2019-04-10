import Prism from 'vue-prism-component';
import styled from 'vue-styled-components';
import Slide from './Slide';

const CodeWrapper = styled.div`
  height: 80vh;
  width: 85vw;

  h1 {
    padding-bottom: 1rem;
  }
`;

const CodeBlock = styled.div`
  background: ${props => props.theme.mediumGrey};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  font-size: 1.25rem;
  margin: 0 2rem;
  flex: 1;

  .buttons {
    display: 'flex';
    width: 5em;
    padding: 0.75rem 1rem;
    width: 100%;
    background: #47494e;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  .window-btn {
    content: '';
    height: 1rem;
    width: 1rem;
    display: block;
    border-radius: 50%;
    margin-right: 0.5em;
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

  .fill {
    flex: 1;
  }

  pre {
    background: none;
    padding: 0 1em;
    margin: 0;
  }

  code {
    * {
      font-family: 'Ubuntu Mono';
      font-size: 1.5rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const CodeWindow = ({ props }) => (
  <CodeBlock>
    {/* buttons */}
    <div class="buttons">
      <span class="window-btn" />
      <span class="window-btn" />
      <span class="window-btn" />
      <span class="fill" />
    </div>
    <Prism language="jsx">{props.code}</Prism>
  </CodeBlock>
);

const CodeSlide = ({ props }) => {
  return (
    <Slide>
      <CodeWrapper>
        <h1>{props.title}</h1>
        <Row>
          <CodeWindow code={props.code} />
          {props.code2 && <CodeWindow code={props.code2} />}
        </Row>
      </CodeWrapper>
    </Slide>
  );
};

export default CodeSlide;
