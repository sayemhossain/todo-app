import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

// this is for color changed
export const colorChanged = ({ color, changeType }) => {
  return {
    type: COLORCHANGED,
    payload: { color, changeType },
  };
};

// this is for status changed for filtering
export const statusChanged = ({ status }) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
