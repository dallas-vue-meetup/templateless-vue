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
            <div class="modal-body>
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
        body=({ close }) => (
          <p>Hello World!</p>
          <button onClick={close}>Close<button>
        );
      />
    );
  };
};
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
    title: 'Be warned',
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
  },
];

export default slides;
