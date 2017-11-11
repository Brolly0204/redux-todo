import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/todos';
import {filterTodo} from '../commons/filter';

@connect(
 ({todos, filter}) => ({
   todos: filterTodo(todos.todos, filter.filter),
   activeCount: todos.todos.filter(todo => !todo.completed).length,
   editingId: todos.editingId
 }), actions)

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {title: ''};
  }

  handleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleKeyDown = (event, id) => {
    if(event.keyCode === 27) {
      this.setState({title: this.title});
      this.props.changeEditing('');
    } else if (event.keyCode === 13) {
      this.props.changeEditing('');
      this.props.updateTodo(id, this.state.title);
    }
  }
  _changeEditing = (item) => {
    this.title = item.title;
    this.setState({title: item.title});
    this.props.changeEditing(item.id);
  }

  render() {
    const { todos,
            delTodo,
            toggleTodo,
            activeCount,
            toggleAll,
            editingId
          } = this.props;

    return (
    <ul className='list-group'>
      {
        todos.length > 0 ? (
          <li className='list-group-item'>
            <input type='checkbox'
              checked={activeCount === 0}
              onChange={(e) => toggleAll(e.target.checked)}/> {activeCount === 0 ? '全部取消' : '全部选中'}
          </li>
        ) : null
      }

      {
        todos.map((item) => (
          <li className='list-group-item' key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => toggleTodo(item.id)}/>
          {
            editingId === item.id ? (
              <input type='text'
                value={this.state.title}
                onChange={this.handleChange}
                onKeyDown={(e) => this.handleKeyDown(e, item.id)}
                style={{width: '70%', marginLeft: '5px', lineHeight: '20px'}}
              />
            ) : (
              <span style={{
                  marginLeft: '8px',
                  textDecoration: item.completed
                    ? 'line-through'
                    : ''
                }}
                onDoubleClick={() => this._changeEditing(item)}>
                {item.title}
              </span>
            )
          }

          <span className='pull-right'>
            <button type='button' className='btn btn-xs btn-danger' onClick={() => delTodo(item.id)}>
              X
            </button>
          </span>
        </li>))
      }
    </ul>)
  }
}
