import { object, string } from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

/* eslint-disable no-unused-expressions */
const handleKeyPress = event => {
  if (event.which < 48 || event.which > 57) {
    event.preventDefault();
  }
};

function renderTextField({ input, label, type, meta: { touched, error, warning }, ...custom }) {
  // not touched but error should be
  if (error === 'Must be 0 or larger number' || error === 'Must be 1 or larger number') {
    return (
      <TextField
        label={label}
        {...input}
        {...custom}
        error
        helperText={error}
        fullWidth
        onKeyPress={event => {
          type === 'number' ? handleKeyPress(event) : undefined;
        }}
        variant="outlined"
      />
    );
  }
  if (touched && error) {
    return (
      <TextField
        label={label}
        {...input}
        {...custom}
        error
        helperText={error}
        fullWidth
        onKeyPress={event => {
          type === 'number' ? handleKeyPress(event) : undefined;
        }}
        variant="outlined"
      />
    );
  } else if (warning) {
    return (
      <TextField
        label={label}
        {...input}
        {...custom}
        helperText={warning}
        FormHelperTextProps={{
          style: {
            color: 'green'
          }
        }}
        fullWidth
        onKeyPress={event => {
          type === 'number' ? handleKeyPress(event) : undefined;
        }}
        variant="outlined"
      />
    );
  }
  return (
    <TextField
      label={label}
      {...input}
      {...custom}
      fullWidth
      onKeyPress={event => {
        type === 'number' ? handleKeyPress(event) : undefined;
      }}
      variant="outlined"
    />
  );
}

renderTextField.propTypes = {
  meta: object,
  input: object,
  label: string
};

export default renderTextField;
