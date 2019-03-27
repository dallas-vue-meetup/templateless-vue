const slides = [
  // {
  //   component: 'TitleSlide',
  //   title: 'Templateless Vue',
  //   subtitles: [
  //     'By Tim Waite (@twaite)',
  //     'https://github.com/dallas-vue-meetup/templateless-vue',
  //   ],
  // },
  // {
  //   title: 'Hello There',
  //   list: [
  //     'A surprise to be sure',
  //     'But a welcome one',
  //     'The prequels have the best memes',
  //   ],
  //   component: 'ListSlide',
  // },
  {
    component: 'CodeSlide',
    code: `
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles id="app">
        <SlideControl />
      </AppStyles>
    </ThemeProvider>
  );
};
        `,
    title: 'Test',
  },
];

export default slides;
