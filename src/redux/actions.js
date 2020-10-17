import { ADD_TODO } from "./actionTypes";

export const addTodo = content => ({
  type: ADD_TODO,
  payload: { content }
});