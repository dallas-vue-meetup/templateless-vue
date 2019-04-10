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

  switch (slide.component) {
    case 'TitleSlide':
      return <TitleSlide props={{ ...slide }} />;
    case 'ListSlide':
      return <ListSlide props={{ ...slide }} />;
    case 'CodeSlide':
      return <CodeSlide props={{ ...slide }} />;
    default:
      return <h1>Component does not exist: {slide.component}</h1>;
  }
});

export default SlideControl;
