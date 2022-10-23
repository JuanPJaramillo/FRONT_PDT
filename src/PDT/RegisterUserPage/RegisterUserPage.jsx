import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { AppBarComponent } from '../Utils/AppBar';
import { DataUserComponent } from './components/DataUserComponent';
import { InfoUserComponent } from './components/InfoUserComponent';

export default function RegisterUserPage() {
    return (
        <AppBarComponent>
            <Container component="main" maxWidth="xl" >
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <DataUserComponent />
                    </Grid>
                    <Grid item xs={5}>
                        <InfoUserComponent />
                    </Grid>
                </Grid>
            </Container>
        </AppBarComponent>
    )
}
