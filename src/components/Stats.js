import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as CalcSelectors from '../selectors/calcSelectors'
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
  average: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
};


const mapStateToProps = state => ({
  average: CalcSelectors.averageSelector(state),
  sum: CalcSelectors.sumSelector(state),
});

export default connect(mapStateToProps, undefined)(Stats);
