import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import * as actions from '../store/actions';
import { Field, reduxForm } from 'redux-form';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';

const supportedCurrencies = [
  'AUD',
  'BGN',
  'BRL',
  'CAD',
  'CHF',
  'CNY',
  'CZK',
  'DKK',
  'EUR',
  'GBP',
  'HKD',
  'HRK',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NOK',
  'NZD',
  'PHP',
  'PLN',
  'RON',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'USD',
  'ZAR'
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
    this.props.onLoad({
      baseCurrency,
      waitingTime,
      targetCurrency,
      amount
    });
  };

  renderCurrencyOptions() {
    return supportedCurrencies.map(item => {
      return (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      );
    });
  }

  render() {
    const { handleSubmit, pristine, submitting, data, fetching } = this.props;
    const { baseCurrency, todayTargetCurrency, targetCurrency, bestPastDate, bestBuyDate } = data;

    return (
      <div>
        <main>
          <Grid container justify="center">
            <Grid item xs={3} />
            <Grid item xs={3}>
              <form onSubmit={handleSubmit(this.submit)} noValidate autoComplete="off">
                <InputLabel>Base Currency: </InputLabel>
                <Field
                  fullWidth
                  margin="dense"
                  name="baseCurrency"
                  component={SelectField}
                  options={supportedCurrencies}
                >
                  {this.renderCurrencyOptions()}
                </Field>
                <InputLabel>Target Currency: </InputLabel>
                <Field fullWidth margin="dense" name="targetCurrency" component={SelectField}>
                  {this.renderCurrencyOptions()}
                </Field>

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
                >
                  Submit
                </Button>
              </form>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={3}>
              {fetching ? (
                <div>
                  <Typography variant="h6" gutterBottom>
                    {`${moment(bestPastDate, 'YYYY-MM-DD').fromNow()}: 1 ${baseCurrency} = 2 ${targetCurrency}`}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {`today: 1 ${baseCurrency} = ${todayTargetCurrency} ${targetCurrency}`}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {`Buying Date = ${bestBuyDate}`}
                  </Typography>
                </div>
              ) : null}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { fetching, error, data } = state.currency;
  return {
    fetching,
    error,
    data
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: data =>
    dispatch({
      ...data,
      type: actions.SUBMIT_FORM_START
    })
});

export default withStyles(styles)(
  reduxForm({
    form: 'CurrencyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    initialValues: {
      baseCurrency: ''
    },
    validate
  })(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Home)
  )
);
