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
    title:
      '"I don\'t want to use Vue because I don\'t like templates." - A React Dev',
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
    },
    decrement() {
      this.count--;
    }
  },
  render() {
    return (
      <div>
        Count: {this.count}
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
    `,
  },
  {
    component: 'CodeSlide',
    title: 'Render Props Instead of Slots',
    code: `
const MyModal = {
  name: 'MyModal',
  data() {
    return {
      open: false,
    };
  },
  props: ['title', 'body'],
  methods: {
    open() { this.open = true; },
    close() { this.open = false; },
  },
  render() {
    return (
      <div>
        <button onClick={this.open}>Open</button>
        {this.open &&
          <div class="modal">
            <h1>{this.title}</h1>
            <div class="modal-body">
              {this.body({ close: this.close })}
            </div>
          </div>
        }
      </div>
    );
  }
}
    `,
    code2: `
const SomeOtherComponent = {
  name: 'SomeOtherComponent',
  components: {
    MyModal,
  },
  render() {
    return (
      <MyModal
        title="My Custom Modal"
        body=({ close }) => (
          <div>
            <p>Hello World!</p>
            <button onClick={close}>Close<button>
          </div>
        );
      />
    );
  };
};
    `,
  },
  {
    component: 'CodeSlide',
    title: 'Components as a Function',
    code: `
const TodoList = ({ props }) => (
  <div>
    <h3>My List</h3>
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  </div>
);
  `,
  },
  {
    title: 'Benefits of JSX Over Templates',
    list: [
      'Typescript support is much better with JSX',
      'Using different editors can be simpler',
      'Complex branching is much simpler',
    ],
    component: 'ListSlide',
  },
  {
    component: 'CodeSlide',
    title: 'Benefits of JSX Over Templates',
    code: `
const SlideControl = ({props}) => {

  // ...

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
};
  `,
  },
  {
    title: 'Disadvantages of JSX Over Templates',
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
      'Philisophically JSX and .vue files are similar',
      'With Vue 3 coming soon, it may be a great alternative to React',
      'Can make render functions simpler',
      'If you want to see examples check out the github',
    ],
  },
];

export default slides;
