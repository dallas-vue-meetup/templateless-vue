const slides = [
  {
    component: 'TitleSlide',
    title: 'Templateless Vue',
    subtitles: [
      'By Tim Waite (@twaite)',
      'https://github.com/dallas-vue-meetup/templateless-vue',
    ],
  },
  {
    title: '"I don\'t want to use Vue because I don\'t like templates." - A React Dev',
    list: [
      "Great! That's totally fine!",
      'JSX comes out of the box with vue-cli',
      "Even if you like them, templates aren't always the right answer",
    ],
    component: 'ListSlide',
  },
  {
    title: 'But if templates are what is holding you back:',
    list: [
      'First party support of routing and state management',
      'Mutable data',
      "Vue 3's performance",
      'No Vetur plugin',
    ],
    component: 'ListSlide',
  },
  {
    component: 'CodeSlide',
    title: 'What is JSX?',
    code: `
export default {
  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <p>A surprise to be sure, but a welcome one.</p>
        {emoji ? (<img src="picachu-surprised.png" />) : null}
      </div>
    )
  }
}
      `,
  },
  {
    component: 'CodeSlide',
    title: 'The Basics',
    code: `
export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  render() {
    return (
      <div>
        Count: {this.count}
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
    `,
  },
  {
    component: 'CodeSlide',
    title: 'Functional Components are More Intuitive',
    code: `
const MyComponent = ({ props }) => (
  <div>
    <h3>My List</h3>
    <ul>
      {props.list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);
    `,
  },
  {
    component: 'CodeSlide',
    title: 'Alternative to slots: Render Props',
    code: `
const CardComponent = ({ props }) => (
  <div class="card">
    <header>{props.header}</header>
    <section>{props.body}</section>
  </div>
)

const ComponentUsingCard = ({ props }) => (
  <CardComponent 
    header={() => (<h1>My Header</h1>)}
    body={() => (
      <div>Content</div>
    )}
    />
);
    `,
  },
  {
    component: 'CodeSlide',
    title: 'Benefits of JSX over templates in Vue',
    code: `
const SlideControl = ({props}) => {

  // ...

  switch (slide.component) {
    case 'TitleSlide':
      return <TitleSlide title={slide.title} subtitles={slide.subtitles} />;
    case 'ListSlide':
      return <ListSlide title={slide.title} list={slide.list} />;
    case 'CodeSlide':
      return <CodeSlide title={slide.title} code={slide.code} />;
    default:
      return <h1>Component does not exist: {slide.component}</h1>;
  }
};
    `,
  },
  {
    title: "Be warned",
    list: [
      'This is NOT recommended by the core team for most cases',
      'Code examples (specific to Vue) are few and far between',
      "You can't use directives *",
      "Slots don't work as expected",
    ],
    component: 'ListSlide',
  },
  {
    component: 'ListSlide',
    title: 'In Summary',
    list: [
      'In many ways JSX and Vetur files have are similar',
      'With Vue 3 coming soon, it may be a great alternative to React',
      'Can make render functions simpler',
      'If you want to see examples check out the github',
    ],
  }
];

export default slides;
