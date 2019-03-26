import Slide from '@/components/Slide';
import logo from '@/assets/logo.png';
import Subheading from './Subheading';

const TitleSlide = ({ props }) => (
  <Slide>
    <img alt="Vue logo" src={logo} />
    <h1>{props.title}</h1>
    <Subheading>{props.subtitle}</Subheading>
  </Slide>
);

export default TitleSlide;
