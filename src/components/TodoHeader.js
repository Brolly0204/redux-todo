import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/todos';

@connect(
  state => ({}),
  actions
)
export default class TodoHeader extends Component {

  handlekeyDown = (event) => {
    if(event.keyCode === 13 && !/^\s*$/.test(event.target.value)) {
      this.props.addTodo(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type='text'
          className='form-control'
          onKeyDown={this.handlekeyDown}
        />
      </div>
    )
  }
}
