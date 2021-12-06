import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo">
        Bar
      </div>
    );
  }
}

Bar.propTypes = propTypes;
Bar.defaultProps = defaultProps;

export default Bar;