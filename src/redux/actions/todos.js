import * as types from '../action-types';

// ADD
export const addTodo = (title) => ({
  type: types.ADD_TODO,
  title
})

// DEL
export const delTodo = (id) => ({
  type: types.DEL_TODO,
  id
})

// UPDATE
export const updateTodo = (id, title) => ({
  type: types.UPDATE_TODO,
  id,
  title
})

// TOGGLE
export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})

// TOGGLE ALL
export const toggleAll = (checked) => ({
  type: types.TOGGLE_ALL,
  checked
})

// DEL ALL COMPLETED
export const deleteAllCompleted = () => ({
  type: types.DELETE_ALL_COMPLETED
})

// Change filter
export const changeFilter = (filter) => ({
  type: types.CHANGE_FILTER,
  filter
})

export const changeEditing = id => ({
  type: types.CHANGE_EDITING,
  id
})
