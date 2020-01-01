import React from 'react';
import './App.css';

// Functional vs Class - Components in React
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// Basically the functional form has no state or all lifecycle hooks but the class form has.

// class TodoApp extends React.Component {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
export default App;


// class VocabList extends React.Component {
//   render() {
//     return (
//       <div className="vocab-list">
//         <h1>Vocab List for {this.props.name}</h1>
//         <ul>
//           <li>ラーメン</li>
//           <li>うどん</li>
//           <li>焼きそば</li>
//         </ul>
//       </div>
//     );
//   }
// }

// ========================================

