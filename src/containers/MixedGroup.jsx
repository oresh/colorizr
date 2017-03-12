import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorPicker } from 'components';
import * as colorActions from '../actions/colorActions';

const MixedGroup = ({ chooseMixedColor, isColorPickerOpened }) => {
  const handleChangeColor = (color) => {
    chooseMixedColor(color);
  };

  return <ColorPicker width={220} isColorPickerOpened={isColorPickerOpened} defaultColor={'#ff0000'} handleChange={handleChangeColor} />;
};

export default connect(state => ({
  isColorPickerOpened: state.colorReducer.isColorPickerOpened,
}), colorActions)(MixedGroup);