import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bingo from '../../components/Bingo';
import BingoPane from '../../components/BingoPane';
import * as listingActions from '../../modules/listing';

class BingoContainer extends Component {
  componentDidMount() {
    this.initialize();
  }
  initialize = () => {
    const { ListingAction } = this.props;
    const numArr = [...Array(26).keys()].slice(1);

    const p1Numbers = this.shuffle(numArr);
    const p1Bingo = p1Numbers.map((n, index) => {
      return { id: index, number: n, selected: false };
    });

    const p2Numbers = this.shuffle(p1Numbers);
    const p2Bingo = p2Numbers.map((n, index) => {
      return { id: index, number: n, selected: false };
    });
    ListingAction.setupPlayer1List(p1Bingo);
    ListingAction.setupPlayer2List(p2Bingo);
  };

  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  onClick = () => {};

  render() {
    const { p1Bingo, p2Bingo } = this.props;
    return (
      <BingoPane>
        <Bingo bingoNumbers={p1Bingo} />
        <Bingo bingoNumbers={p2Bingo} />
      </BingoPane>
    );
  }
}

export default connect(
  ({ listing }) => ({ p1Bingo: listing.p1Bingo, p2Bingo: listing.p2Bingo }),
  dispatch => ({ ListingAction: bindActionCreators(listingActions, dispatch) }),
)(BingoContainer);
