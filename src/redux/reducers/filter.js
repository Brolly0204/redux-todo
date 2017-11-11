import * as types from '../action-types';

const initState = {
  filter: 'all'
}
export default (state = initState, action) => {
  switch(action.type) {
    case types.CHANGE_FILTER:
      return {
        filter: action.filter
      };
    default:
      return state;  
  }
}
