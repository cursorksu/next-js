import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from './actionCreators';

const initialState = {
  posts: [],
  isLoading: false,
  isLoaded: false,
  modal: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
      };

      return state;
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
