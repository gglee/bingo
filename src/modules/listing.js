const SETUP_PLAYER1_LIST = 'listing/SETUP_PLAYER1_LIST';
const SETUP_PLAYER2_LIST = 'listing/SETUP_PLAYER2_LIST';

export const setupPlayer1List = list => ({
  type: SETUP_PLAYER1_LIST,
  payload: list,
});
export const setupPlayer2List = list => ({
  type: SETUP_PLAYER2_LIST,
  payload: list,
});

const initialState = { p1Bingo: [], p2Bingo: [] };

const listing = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_PLAYER1_LIST:
      return { p1Bingo: action.payload };
    case SETUP_PLAYER2_LIST:
      return { p2Bingo: action.payload };
    default:
      return state;
  }
};

export default listing;
