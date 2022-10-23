import React, { Fragment } from 'react';

import Grid from "@mui/material/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24,
    },
    appBar: {
        backgroundColor: '#270570'
    },
    appBarSpacer: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
        color: 'white'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        background: '#EEEEEE'
    },
}));

export const AppBarComponent = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="absolute" elevation={5} className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" noWrap className={classes.title}>
                        BIENVENIDO
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid >
                        <div className="page" >
                            {props.children}
                        </div>
                    </Grid>
                </Container>
            </main>
        </Fragment>
    )
}
