import styled from 'vue-styled-components';

const Slide = styled.div`
  background: ${props => props.theme.darkGrey};
  color: ${props => props.theme.white};
  border-bottom: 5px solid ${props => props.theme.green};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Slide;
