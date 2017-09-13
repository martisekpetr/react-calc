import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({ display }) => {
  return (
    <h3>
      {display}
    </h3>
  );
};

Display.propTypes = {
  display: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  display: state.display
});

export default connect(mapStateToProps, undefined)(Display);
