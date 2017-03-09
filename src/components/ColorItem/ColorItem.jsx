import React from 'react';

import './color=item.scss';

const ColorItem = ({ color }) => {
  return <div className="panel__color-item" style={{backgroundColor: color}} />
};

export default ColorItem;
