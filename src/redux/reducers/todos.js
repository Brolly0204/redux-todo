import * as types from '../action-types';
import {getItem, setItem} from '../../commons/utils';

const TODO_LIST = 'TODO_LIST'
const todos = getItem('TODO_LIST') || [];
const saveTodos = (todos) => setItem(TODO_LIST, todos);

const initState = {
  editingId: '',
  todos
}


export default (state = initState, action) => {
  let todos = null;
  switch(action.type) {
    case types.ADD_TODO:
      todos = [
        ...state.todos,
        {
          id: Date.now(),
          title: action.title,
          completed: false
        }
      ];
      saveTodos(todos);
      return {
        ...state,
        todos
      };
    case types.DEL_TODO:
      todos = state.todos.filter(item => item.id !== action.id);
      saveTodos(todos);
      return {
        ...state,
        todos
      };
    case types.UPDATE_TODO:
      todos = state.todos.map(item => {
        if(item.id === action.id) {
          item.title = action.title;
        }
        return item;
      });
      saveTodos(todos);
      return {
        ...state,
        todos
      }
    case types.TOGGLE_TODO:
      todos = state.todos.map(item => {
        if(item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
      saveTodos(todos);
      return {
        ...state,
        todos
      };
    case types.DELETE_ALL_COMPLETED:
      todos = state.todos.filter(item => !item.completed);
      saveTodos(todos);
      return {
        ...state,
        todos
      };
    case types.TOGGLE_ALL:
      todos = state.todos.map(todo => {
        todo.completed = action.checked;
        return todo
      });
      saveTodos(todos);
      return {
        ...state,
        todos
      };
    case types.CHANGE_EDITING:
      return {
        ...state,
        editingId: action.id
      };
    default:
    return state;
  }
}
