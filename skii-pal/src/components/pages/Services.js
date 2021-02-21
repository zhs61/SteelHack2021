import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';


//Icons
import SearchIcon from '@material-ui/icons/Search';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React from 'react';
import '../../App.css';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  grid_item: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },

}));



const Services = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-20T21:11:54'));
  const [isloading, setIsLoading] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearchBtn = (event) => {
    setIsLoading(true)
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="location input"
              label="Location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EditLocationIcon />
                  </InputAdornment>
                ),
              }} />
          </Grid>
          <Grid item xs={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={4}>
            {isloading? <CircularProgress/>:
            <Button 
            variant="contained" 
            size="large" 
            color="primary"
            onClick = {handleSearchBtn}
            startIcon={<SearchIcon />}>
              Search
              </Button>
            }
          </Grid>
        </Grid>
      </Grid>
    </div>

  );
}

export default Services;