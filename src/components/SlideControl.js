import TitleSlide from './TitleSlide';

const SlideControl = () => {
  document.onkeydown = e => {
    switch (e.key) {
      case 'ArrowRight':
        console.log('forward');
        return;
      case 'ArrowLeft':
        console.log('back');
        return;
      default:
        return;
    }
  };

  return (
    <TitleSlide title="Templateless Vue" subtitle="By Tim Waite (@twaite)" />
  );
};

export default SlideControl;
