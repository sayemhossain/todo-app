import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

// this is for todo adding purpose
export const added = ({ todoText }) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

// this is for toggling between todos
export const toggled = ({ todoId }) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

// this is for toggling between todos
export const colorSelected = ({ todoId, color }) => {
  return {
    type: COLORSELECTED,
    payload: { todoId, color },
  };
};

// this is for todos deleting purpose
export const deleted = ({ todoId }) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

// this is for all completed todos
export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

// this is for clear all completed todos
export const allcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
