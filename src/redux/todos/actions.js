import { ADDED, COLORSELECTED, TOGGLED } from "./actionTypes";

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
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};
