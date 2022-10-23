import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import TextField from "@mui/material/TextField";
import ButtonGroup from '@mui/material/ButtonGroup';
import Autocomplete from "@mui/material/Autocomplete";
import TableContainer from '@material-ui/core/TableContainer';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { searchFlights } from '../Thunks/HomePageThunks';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useSelector, useDispatch } from 'react-redux';
import { setDepartureCity, setArrivalCity, setDepartureDate, setArrivalDate, SumCountAdult, RestCountChild } from '../Slice/HomePageSlice';

export const FilterFlights = () => {
    const dispatch = useDispatch();
    const { allFlights, departureCity, arrivalCity, departureDate, arrivalDate, countAdult, countChild } = useSelector((state) => state.homePage);
    return (
        <Container component="main" maxWidth="xl" >
            <TableContainer component={Paper} style={{ margin: 5, padding: 20 }}  >
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'right' }}>Busqueda Vuelos</h2>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Autocomplete
                            fullWidth
                            value={departureCity}
                            noOptionsText={"No hay opciones"}
                            onChange={(event, value) => {
                                if (value) dispatch(setDepartureCity(value))
                            }}
                            options={allFlights}
                            getOptionLabel={(option) => option.gcd_iata === "" ? "SIN CIUDAD" + " - " + option.name : option.gcd_iata + " - " + option.name}
                            renderInput={(params) => (
                                <TextField {...params}
                                    required
                                    autoComplete="off"
                                    size="small"
                                    margin="normal"
                                    variant="outlined"
                                    label="Origen"
                                    fullWidth
                                />)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            fullWidth
                            value={arrivalCity}
                            noOptionsText={"No hay opciones"}
                            onChange={(event, value) => {
                                if (value) dispatch(setArrivalCity(value))
                            }}
                            options={allFlights}
                            getOptionLabel={(option) => option.gcd_iata === "" ? "SIN CIUDAD" + " - " + option.name : option.gcd_iata + " - " + option.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    required
                                    autoComplete="off"
                                    size="small"
                                    margin="normal"
                                    variant="outlined"
                                    label="Destino"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                disablePast
                                label="Fecha de ida"
                                value={departureDate}
                                onChange={(newValue) => dispatch(setDepartureDate(newValue))}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker disablePast
                                value={arrivalDate}
                                label="Fecha de regreso"
                                renderInput={(props) => <TextField {...props} />}
                                onChange={(newValue) => dispatch(setArrivalDate(newValue))}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '1cm' }}>
                            <Grid item xs={5}>
                                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Adultos</h2>
                            </Grid>
                            <Grid item xs={5}>
                                <ButtonGroup disableElevation variant="contained" >
                                    <Button variant='contained' onClick={() => dispatch(SumCountAdult('Rest'))}>-</Button>
                                    <Button variant='contained' onClick={() => dispatch(SumCountAdult('Sum'))}>+</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={2}>
                                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{countAdult}</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={5}>
                                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Menores</h2>
                            </Grid>
                            <Grid item xs={5}>
                                <ButtonGroup disableElevation variant="contained" >
                                    <Button variant='contained' onClick={() => dispatch(RestCountChild('Rest'))}>-</Button>
                                    <Button variant='contained' onClick={() => dispatch(RestCountChild('Sum'))}>+</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={2}>
                                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{countChild}</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '1cm' }}>
                    <Button variant='contained' style={{ color: 'white', background: '#270570', borderRadius: '15px' }}
                        onClick={() => dispatch(searchFlights(countAdult, countChild, departureCity, arrivalCity, departureDate))}>
                        Buscar vuelos
                    </Button>
                </Grid>
            </TableContainer>
        </Container>
    )
}
