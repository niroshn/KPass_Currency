import React from 'react';
import { MenuItem } from '@material-ui/core';

export default class Option extends React.Component {
  handleClick = event => {
    const { data, selectOption } = this.props;
    selectOption(data, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }
}
