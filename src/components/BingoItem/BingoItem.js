import React from 'react';
import './BingoItem.scss';
import cx from 'classnames';

const BingoItem = ({ number, circle }) => {
  return (
    <div className="BingoItem">
      <div className={cx('circle', { active: circle })}>
        <div className="number">{number}</div>
      </div>
    </div>
  );
};
BingoItem.defaultProps = {
  number: 22,
  circle: false,
};
export default BingoItem;
