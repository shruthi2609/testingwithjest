import React from 'react';
import PropTypes from 'prop-types';
function Items(props) {
  const { items = [] } = props;

  // A single item in the list, render a span.
  if (items.length === 1) {
    return <div>{items[0]}</div>;
  }

  // Multiple items on the list, render a list.
  if (items.length > 1) {
    return (
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    );
  }

  // No items on the list, render an empty message.
  return <div>No items in list</div>;
}

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: []
};

export default Items;
