import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useSelector, useDispatch } from 'react-redux';
import { setDocumentAdults, setNameAdults, setDateBirthAdults, setDocumentChild, setNameChild, setDateBirthChild } from '../Slice/RegisterUserPageSlice';
import { onAddRegisterTotalAdult, onAddRegisterTotalChild, postRegisterUser } from '../Thunks/RegisterUserPageThunks';

export const DataUserComponent = () => {
    const dispatch = useDispatch();
    const { countAdultRegister, countChildRegister, totalAdults, documentAdults, nameAdults, dateBirthAdults, totalChild,
        documentChild, nameChild, dateBirthChild, departureCity, arrivalCity, money, hour } = useSelector((state) => state.registerUserPage);
    return (
        <Container component="main" maxWidth="xl" >
            <TableContainer component={Paper} style={{ margin: 5, padding: 20 }}>
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'right' }}>Registro de usuarios</h2>
                <Divider />
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'left' }}>{`Registro de adultos  ( ${countAdultRegister - totalAdults.length} - Adultos restantes ) `}</h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            required
                            fullWidth
                            value={documentAdults}
                            autoComplete="off"
                            size="small"
                            margin="normal"
                            variant="outlined"
                            label="Documento"
                            onChange={(e) => dispatch(setDocumentAdults(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            value={nameAdults}
                            autoComplete="off"
                            size="small"
                            margin="normal"
                            variant="outlined"
                            label="Nombres"
                            fullWidth
                            onChange={(e) => dispatch(setNameAdults(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                label="Fecha de nacimiento"
                                value={dateBirthAdults}
                                onChange={(newValue) => dispatch(setDateBirthAdults(newValue))}
                                renderInput={(props) =>
                                    <TextField
                                        {...props}
                                        size="small"
                                        margin="normal"
                                        variant="outlined"
                                    />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            disabled={countAdultRegister - totalAdults.length === 0 ? true : false}
                            onClick={() => dispatch(onAddRegisterTotalAdult(documentAdults, nameAdults, dateBirthAdults, totalAdults))}>
                            <SendIcon style={{ color: '#270570', margin: 10 }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'left' }}>{`Registro de menores  ( ${countChildRegister - totalChild.length} - Menores restantes )`}</h2>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            required
                            value={documentChild}
                            autoComplete="off"
                            size="small"
                            margin="normal"
                            variant="outlined"
                            label="Documento"
                            fullWidth
                            onChange={(e) => dispatch(setDocumentChild(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            value={nameChild}
                            autoComplete="off"
                            size="small"
                            margin="normal"
                            variant="outlined"
                            label="Nombres"
                            fullWidth
                            onChange={(e) => dispatch(setNameChild(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                label="Fecha de nacimiento"
                                value={dateBirthChild}
                                onChange={(newValue) => dispatch(setDateBirthChild(newValue))}
                                renderInput={(props) =>
                                    <TextField
                                        {...props}
                                        size="small"
                                        margin="normal"
                                        variant="outlined"
                                    />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            disabled={countChildRegister - totalChild.length === 0 ? true : false}
                            onClick={() => dispatch(onAddRegisterTotalChild(documentChild, nameChild, dateBirthChild, totalChild))}>
                            <SendIcon style={{ color: '#270570', margin: 10 }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '1cm' }}>
                    <Grid item xs={3}>
                        <Button fullWidth variant='contained'
                            onClick={() => dispatch(postRegisterUser(departureCity, arrivalCity, money, hour, countAdultRegister, countChildRegister, totalAdults, totalChild))}
                            style={{ color: 'white', background: '#270570', borderRadius: '15px' }}>
                            Guardar
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button fullWidth variant='contained' style={{ color: 'white', background: '#270570', borderRadius: '15px' }}
                        >Regresar</Button>
                    </Grid>
                </Grid>
            </TableContainer>
        </Container>
    )
}
