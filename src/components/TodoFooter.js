import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/todos';

const btnStyle = {
  marginLeft: '5px'
}

const textStyle = {
  height: '34px',
  lineHeight: '34px',
  fontSize: '12px'
}

@connect(
  state => ({
    activeCount: state.todos.todos.filter(item => !item.completed).length,
    total: state.todos.todos.length,
    ...state.filter
  }),
  actions
)
export default class TodoHeader extends Component{
  render() {
    const {activeCount, total, deleteAllCompleted, filter, changeFilter} = this.props;
    const completedCount = total - activeCount;
    return (
      <div className='row'>
        <div className='col-sm-3'
          style={textStyle}>
          {
            activeCount > 0 ? (
              <span>{activeCount}件待办事件</span>
            ) : null
          }
        </div>
        <div className='col-sm-6'>
          <button type='button'
            onClick={() => changeFilter('all')}
            className={'btn ' + (filter === 'all'
              ? 'btn-success'
              : 'btn-default')}>全部</button>
          <button type='button'
            onClick={() => changeFilter('active')}
            style={btnStyle}
            className={'btn ' + (filter === 'active'
              ? 'btn-success'
              : 'btn-default')}>未完成</button>
          <button type='button'
            onClick={() => changeFilter('completed')}
            style={btnStyle}
            className={'btn ' + (filter === 'completed'
              ? 'btn-success'
              : 'btn-default')}>已完成</button>
        </div>
        <div className='col-sm-3'>
          {
            completedCount > 0 ? (
              <button type='button'
                className='btn btn-danger'
                onClick={deleteAllCompleted}
                >删除已完成</button>
            ) : null
          }
        </div>
      </div>
    )
  }
}
