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
    title: "I don't want to use Vue because I don't like templates.",
    list: [
      "Great! That's totally fine!",
      'JSX is built into Vue',
      "Templates aren't always the right answer",
    ],
    component: 'ListSlide',
  },
  {
    component: 'CodeSlide',
    title: 'Quick Example:',
    code: `
export default {
  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <p>A surprise to be sure, but a welcome one.</p>
      </div>
    )
  }
}
      `,
  },
  {
    title: "It's dangerous to go alone",
    list: [
      'This is NOT recommended by the core team for most cases',
      'Code examples are few and far between',
      "You can't use directives",
      "Slots don't work as expected",
    ],
    component: 'ListSlide',
  },
  {
    title: 'But if templates are what is holding you back',
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
    title: 'Functional Components',
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
    title: 'Render Props',
    code: `
const ComponentWithRenderProps = ({ props }) => (
  <div class="some-styling">
    {props.myContent}
  </div>
)
    `,
  },
];

export default slides;
