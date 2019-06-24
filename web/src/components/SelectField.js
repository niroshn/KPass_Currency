import { object, bool, string } from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

// Must be 0 or larger number Must be 1 or larger number

function renderSelectField({ input, label, meta: { touched, error, warning }, children, instantError, ...custom }) {
  if ((touched || instantError) && error) {
    return (
      <TextField
        label={label}
        id={input.name}
        {...input}
        onChange={(event, index, value) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        select
        error
        helperText={error}
        fullWidth
        variant="outlined"
      />
    );
  } else if (warning) {
    return (
      <TextField
        label={label}
        id={input.name}
        {...input}
        onChange={(event, index, value) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        select
        helperText={warning}
        fullWidth
        FormHelperTextProps={{
          style: {
            color: 'green'
          }
        }}
        variant="outlined"
      />
    );
  }
  return (
    <TextField
      label={label}
      id={input.name}
      {...input}
      onChange={(event, index, value) => input.onChange(event.target.value)}
      children={children}
      {...custom}
      select
      fullWidth
      variant="outlined"
    />
  );
}
renderSelectField.propTypes = {
  instantError: bool,
  meta: object,
  input: object,
  label: string
};

export default renderSelectField;
