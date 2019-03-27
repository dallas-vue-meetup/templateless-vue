import slides from '@/slides';
import TitleSlide from './TitleSlide';
import ListSlide from './ListSlide';
import { withHooks, useData } from 'vue-hooks';
import CodeSlide from './CodeSlide';

const SlideControl = withHooks(h => {
  let data = useData({
    currentSlide: 0,
  });

  document.onkeydown = e => {
    switch (e.key) {
      case 'ArrowRight':
        if (data.currentSlide < slides.length - 1) data.currentSlide++;
        return;
      case 'ArrowLeft':
        if (data.currentSlide > 0) data.currentSlide--;
        return;
      default:
        return;
    }
  };

  const slide = slides[data.currentSlide];

  // TODO: tw - figure out how to spread these props

  switch (slide.component) {
    case 'TitleSlide':
      return <TitleSlide title={slide.title} subtitles={slide.subtitles} />;
    case 'ListSlide':
      return <ListSlide title={slide.title} list={slide.list} />;
    case 'CodeSlide':
      return <CodeSlide title={slide.title} code={slide.code} />;
    default:
      return <h1>No slide with component: {slide.component}</h1>;
  }
});

export default SlideControl;
