import React, { Component } from 'react';
import { TextField, withStyles } from '@material-ui/core';
import SelectWrapped from './SelectWrapped';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

class SelectInputField extends Component {
  onChange = value => {
    const { input } = this.props;
    if (input.onChange && value != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The value received is an object with 2 keys: "value" and "label"
      input.onChange(value);
    } else {
      // Clear the input field
      input.onChange(null);
    }
  };

  render() {
    const { id, name, classes, input, ...custom } = this.props;
    return (
      <TextField
        InputLabelProps={{
          shrink: true
        }}
        {...custom}
        id={id}
        name={name}
        onBlur={() => input.onBlur(input.value)}
        onChange={this.onChange}
        placeholder=""
        InputProps={{
          inputComponent: SelectWrapped,
          inputProps: {
            classes,
            input,
            instanceId: 'react-select-chip-label',
            value: input.value,
            id,
            name,
            ...custom
          }
        }}
        variant="outlined"
      />
    );
  }
}

export default withStyles(styles)(SelectInputField);
