import { UPDATE_SHOE } from './actions';

const initialState = {};

export function shoes(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SHOE: {
      const { row, column, ...update } = action.data;
      const id = `${row}${column}`;
      return {
        // return previous state`
        ...state,
        // update only the shoe by id
        [id]: {
          // return previous state of shoe
          ...state[id],
          // but add update data here
          ...update
        }
      };
    }
    default: return state;
  };
}
