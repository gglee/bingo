import React from 'react';
import './Bingo.scss';
import BingoItem from '../BingoItem';
import CompletedLine from '../CompletedLine';

const Bingo = ({ bingoNumbers, turn, completedLineList }) => {
  const lineList = completedLineList.map(line => (
    <CompletedLine completedLineNumbers={line} key={line} />
  ));
  const bingoList = bingoNumbers.map(n => (
    <BingoItem key={n.id} number={n.number} circle={n.selected} />
  ));
  return (
    <div className="Bingo">
      <div className="head">
        <h3>
          player
          {turn && `: your turn`}
        </h3>
      </div>
      <div className="list-wrapper">{bingoList}</div>
      <div className="completd-line">
        <h4>completed line at list</h4>
        {lineList}
      </div>
    </div>
  );
};
Bingo.defaultProps = {
  completedLineList: [[1, 3, 25, 12, 22], [5, 7, 21, 15, 10]],
  turn: true,
  bingoNumbers: [
    { id: 1, number: 1, selected: false },
    { id: 2, number: 2, selected: false },
    { id: 3, number: 3, selected: false },
    { id: 4, number: 4, selected: false },
    { id: 5, number: 5, selected: false },
    { id: 6, number: 6, selected: false },
    { id: 7, number: 7, selected: false },
    { id: 8, number: 8, selected: false },
    { id: 9, number: 9, selected: false },
    { id: 10, number: 10, selected: false },
    { id: 11, number: 11, selected: false },
    { id: 12, number: 12, selected: false },
    { id: 13, number: 13, selected: false },
    { id: 14, number: 14, selected: false },
    { id: 15, number: 15, selected: false },
    { id: 16, number: 16, selected: false },
    { id: 17, number: 17, selected: false },
    { id: 18, number: 18, selected: false },
    { id: 19, number: 19, selected: false },
    { id: 20, number: 20, selected: false },
    { id: 21, number: 21, selected: false },
    { id: 22, number: 22, selected: false },
    { id: 23, number: 23, selected: false },
    { id: 24, number: 24, selected: false },
    { id: 25, number: 25, selected: false },
  ],
};
export default Bingo;
