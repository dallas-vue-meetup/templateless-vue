import Slide from '@/components/Slide';
import logo from '@/assets/logo.png';
import Subheading from './Subheading';

const TitleSlide = ({ props }) => (
  <Slide>
    <img alt="Vue logo" src={logo} />
    <h1>{props.title}</h1>
    {props.subtitles.map(text => (
      <Subheading id={text}>{text}</Subheading>
    ))}
  </Slide>
);

export default TitleSlide;
