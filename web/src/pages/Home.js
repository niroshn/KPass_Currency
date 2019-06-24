import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
    const baseCurrency = 'USD';
    const targetCurrency = 'EUR';
    const todayTargetCurrency = 23.4;
    const bestPastDate = '2019-05-12';
    const bestBuyDate = '2019-09-23';
    return (
      <div>
        <main>
          <Grid container justify="center" spacing={'8px'}>
            <Grid item xs={3} />
            <Grid item xs={3}>
              <form onSubmit={handleSubmit(this.submit)} noValidate autoComplete="off">
                <InputLabel>Base Currency: </InputLabel>
                <Field
                  fullWidth
                  margin="dense"
                  name="baseCurrency"
                  component={ReactSelect}
                  options={supportedCurrencies}
                />
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
                <Field
                  fullWidth
                  margin="dense"
                  name="waitingTime"
                  component={TextField}
                  options={supportedCurrencies}
                />
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
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={3}>
              <Typography variant="h6" gutterBottom>
                {`${moment(bestPastDate, 'YYYY-MM-DD').fromNow()}: 1 ${baseCurrency} = 2 ${targetCurrency}`}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`today: 1 ${baseCurrency} = ${todayTargetCurrency} ${targetCurrency}`}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`Buying Date = ${bestBuyDate}`}
              </Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
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
