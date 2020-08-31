import React from 'react';

export class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: ''
    };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='todo'
            placeholder='Enter a todo'
            value={this.state.todo}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Add Todo</button>
          <button type='reset' onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
