import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createSelector } from 'reselect'

const Stats = ({ average, sum }) => {
  return (
    <div>
    <h4>
      {average}
    </h4>
    <h4>
      {sum}
    </h4>
    </div>
  );
};

Stats.propTypes = {
  display: PropTypes.number.isRequired

};



const memorySelector = state => state.memory;
const displaySelector = state => state.display;

const averageSelector = createSelector(
  memorySelector,
  displaySelector,
  (memory, display) => (memory + display)/2,
);

const sumSelector = createSelector(
  memorySelector,
  displaySelector,
  (memory, display) => (memory + display),
);

const mapStateToProps = state => ({
  average: averageSelector(state),
  sum: sumSelector(state),
});

export default connect(mapStateToProps, undefined)(Stats);
