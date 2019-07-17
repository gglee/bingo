import React from 'react';
import './CompletedLine.scss';

const CompletedLine = ({ completedLineNumbers }) => {
  const line = completedLineNumbers.map(l => <span>{`${l}, `}</span>);
  return <div className="CompletedLine">{line}</div>;
};

export default CompletedLine;
