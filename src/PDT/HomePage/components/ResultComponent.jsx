import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCountAdultRegister, setCountChildRegister, setDataFlight } from '../../RegisterUserPage/Slice/RegisterUserPageSlice';

export const ResultComponent = () => {
    const histoy = useHistory();
    const dispatch = useDispatch();
    const { allDataFlights, countAdult, countChild } = useSelector((state) => state.homePage);
    return (
        <Container component="main" maxWidth="xl" >
            <TableContainer component={Paper} style={{ margin: 5, padding: 20 }}  >
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'right' }}>Resultados</h2>
                <Divider />
                <TableContainer component={Paper} style={{ margin: 0 }}  >
                    {allDataFlights.map(({ fares, segments }, index) => {
                        return (
                            segments.map(({ airline, flightOrtrainNumber, location, productDateTime }) => (
                                <Fragment>
                                    <Typography style={{ fontFamily: 'sans-serif', textAlign: 'center', paddingTop: '1cm' }}>{airline.name}</Typography>
                                    <Typography style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Número de vuelo {flightOrtrainNumber}</Typography>
                                    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ padding: '20px' }}>
                                        <Grid item xs={6}>
                                            <Typography align='center' variant="h5">{location[0].locationId}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography align='center' variant="h5">{location[1].locationId}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography align='center' variant="h6">{productDateTime.dateOfArrival}</Typography>
                                            <Typography align='center' variant="h6">{productDateTime.timeOfArrival.toLocaleString('en-US')}</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography align='center' variant="h6">{productDateTime.dateOfDeparture}</Typography>
                                            <Typography align='center' variant="h6">{productDateTime.timeOfDeparture}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography align='center' variant="h5">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(fares[index].paxFareDetail.totalFareAmount)}</Typography>
                                    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
                                        <Button variant='contained' style={{ color: 'white', background: '#270570', borderRadius: '15px' }}
                                            onClick={() => {
                                                dispatch(setCountAdultRegister(countAdult));
                                                dispatch(setCountChildRegister(countChild));
                                                dispatch(setDataFlight({ data1: location[0].locationId, data2:location[1].locationId, data3:fares[index].paxFareDetail.totalFareAmount, data4:productDateTime.dateOfDeparture}));
                                                histoy.push('/RegisterUserPage');
                                            }}
                                        >Comprar</Button>
                                    </Grid>
                                    <Divider />
                                </Fragment>
                            )))
                    })}
                </TableContainer>
            </TableContainer>
        </Container>
    )
}
