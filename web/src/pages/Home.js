import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';

import { Field, reduxForm, formValueSelector } from 'redux-form';
import ReactSelect from '../components/ReactSelect';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';

const supportedCurrencies = [
  { label: 'AUD', value: 'AUD' },
  { value: 'BGN', label: 'BGN' },
  { value: 'BRL', label: 'BRL' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'CNY', label: 'CNY' },
  { value: 'DKK', label: 'DKK' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { label: 'AUD', value: 'AUD' },
  { value: 'BGN', label: 'BGN' },
  { value: 'BRL', label: 'BRL' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'CNY', label: 'CNY' },
  { value: 'DKK', label: 'DKK' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' }
];

function validate(values) {
  const errors = {};

  const requiredFields = ['baseCurrency', 'waitingTime', 'targetCurrency', 'amount'];
  requiredFields.forEach(field => {
    if (!values[field] || values[field].length === 0) {
      errors[field] = '*Required';
    }
  });

  return errors;
}

const styles = theme => ({
  wrapper: {
    background: theme.palette.background.main,
    height: '100vh'
  }
});

export class Home extends Component {
  submit = values => {
    const { baseCurrency, waitingTime, targetCurrency, amount } = values;
  };

  render() {
    const { classes, handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <main>
          <form onSubmit={handleSubmit(this.submit)} noValidate autoComplete="off">
            <InputLabel>Base Currency: </InputLabel>
            <Field fullWidth margin="dense" name="baseCurrency" component={ReactSelect} options={supportedCurrencies} />
            <InputLabel>Target Currency: </InputLabel>
            <Field
              fullWidth
              margin="dense"
              name="targetCurrency"
              component={ReactSelect}
              options={supportedCurrencies}
            />
            <InputLabel>Amount: </InputLabel>
            <Field fullWidth margin="dense" name="amount" component={TextField} options={supportedCurrencies} />
            <InputLabel>Max Waiting Time (Weeks): </InputLabel>
            <Field fullWidth margin="dense" name="waitingTime" component={TextField} options={supportedCurrencies} />
            <Button
              style={{ marginTop: '3vh' }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={pristine || submitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withStyles(styles)(
  reduxForm({
    form: 'CurrencyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    initialValues: {
      requestType: 'custom'
    },
    validate
  })(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Home)
  )
);
