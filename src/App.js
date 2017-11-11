import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  TodoHeader,
  TodoList,
  TodoFooter
} from './components';

export default class App extends Component {
  render() {
    return (
      <div className='container' style={{marginTop: '10px'}}>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
              <TodoHeader />
            </div>
              <div className='panel-body'>
              <TodoList />
            </div>
              <div className='panel-footer'>
              <TodoFooter />
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
