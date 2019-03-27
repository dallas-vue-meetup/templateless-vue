import styled from 'vue-styled-components';
import Slide from './Slide';

const ListStyle = styled.div`
  width: 85vw;
  height: 80vh;
  text-align: left;

  ul {
    margin: 2rem;
  }

  li {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ListSlide = ({ props }) => (
  <Slide>
    <ListStyle>
      <h1>{props.title}</h1>
      <ul>
        {props.list.map(item => (
          <li id={item}>{item}</li>
        ))}
      </ul>
    </ListStyle>
  </Slide>
);

export default ListSlide;
