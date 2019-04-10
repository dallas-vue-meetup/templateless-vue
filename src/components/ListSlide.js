import styled from 'vue-styled-components';
import Slide from './Slide';

const ListStyle = styled.div`
  width: 85vw;
  height: 80vh;
  text-align: left;

  ul {
    margin: 2rem 0 0rem 4rem;
  }

  li {
    font-size: 3rem;
    padding-top: 2.5rem;
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
      <img src={props.image} />
    </ListStyle>
  </Slide>
);

export default ListSlide;
