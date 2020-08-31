import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
