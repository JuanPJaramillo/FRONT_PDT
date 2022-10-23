import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import TableContainer from '@material-ui/core/TableContainer';

import { onDeleteRegisterTotalAdult, onDeleteRegisterTotalChild } from '../Thunks/RegisterUserPageThunks';
import { useSelector, useDispatch } from 'react-redux';

export const InfoUserComponent = () => {
    const dispatch = useDispatch();
    const { totalAdults, totalChild } = useSelector((state) => state.registerUserPage);
    return (
        <Container component="main" maxWidth="xl" >
            <TableContainer component={Paper} style={{ margin: 5, padding: 20 }}>
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'right' }}>Usuarios registrados</h2>
                <Divider />
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'left' }}>Adultos registrados</h2>
                <Divider />
                {totalAdults.map(({ documentAdults, nameAdults }) => (
                    <Fragment>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Documento:</h3>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{documentAdults}</h3>
                            </Grid>
                            <Grid item xs={5}>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Nombres:</h3>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{nameAdults}</h3>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    onClick={() => dispatch(onDeleteRegisterTotalAdult(documentAdults, totalAdults))}
                                >Eliminar</Button>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Fragment>
                ))}
                <h2 style={{ fontFamily: 'sans-serif', textAlign: 'left' }}>Menores registrados</h2>
                <Divider />
                {totalChild.map(({ documentChild, nameChild }) => (
                    <Fragment>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Documento:</h3>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{documentChild}</h3>
                            </Grid>
                            <Grid item xs={5}>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Nombres:</h3>
                                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>{nameChild}</h3>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    onClick={() => dispatch(onDeleteRegisterTotalChild(documentChild, totalChild))}
                                >Eliminar</Button>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Fragment>
                ))}
            </TableContainer>
        </Container>


    )
}
