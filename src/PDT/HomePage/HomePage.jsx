import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { getFlights } from './Thunks/HomePageThunks';
import { FilterFlights } from './components/FilterFlights';
import { AppBarComponent } from '../Utils/AppBar';
import { ResultComponent } from './components/ResultComponent';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <AppBarComponent>
      <Grid container spacing={2}>
        <Grid item xs={7}><ResultComponent /></Grid>
        <Grid item xs={5}><FilterFlights /></Grid>
      </Grid>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </AppBarComponent>
  )
}
