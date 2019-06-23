import { object, bool } from 'prop-types';
import React from 'react';

import SelectInput from './ReactSelectInput/index';

function renderReactSelectField({ meta: { touched, error, warning }, instantError, ...custom }) {
  if ((touched || instantError) && error) {
    return <SelectInput {...custom} error helperText={error} />;
  } else if (warning) {
    return (
      <SelectInput
        {...custom}
        helperText={warning}
        FormHelperTextProps={{
          style: {
            color: 'green'
          }
        }}
      />
    );
  }
  return <SelectInput {...custom} />;
}

renderReactSelectField.propTypes = {
  instantError: bool,
  meta: object
};

export default renderReactSelectField;
