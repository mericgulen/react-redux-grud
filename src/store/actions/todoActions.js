import ActionType from '../ActionType';

export const todoAdd = payload => {
  return { type: ActionType.ADD, payload };
};

export const todoDelete = payload => ({
  type: ActionType.DELETE,
  payload,
});

export const todoUpdate = payload => {
  return { type: ActionType.UPDATE, payload };
};

export const todoSet = payload => {
  return { type: ActionType.SET, payload };
};
