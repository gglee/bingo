const SETUP_LIST = 'listing/SETUP_LIST';

export const setupList = () => ({ type: SETUP_LIST });

const initialState = { p1BingoList: [], p2BingoList: [] };

const listing = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_LIST:
      return state;
    default:
      return state;
  }
};

export default listing;
