
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import { bgcolor } from '@material-ui/system';
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelect";
const useStyles = makeStyles(theme => ({
    container: {
        background: '',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#FFF',
      background: 'linear-gradient(45deg, #654ea3 30%, #eaafc8 90%)'
    },
    last: {
        padding: theme.spacing(3),
    }
  }));



export default function Index() {
    const classes = useStyles();
    console.log(theme.palette.primary.light)
    return (
    <div style={{background:'linear-gradient(45deg, #373B44 30%, #4286f4 90%)', minHeight:'100vh'}}>
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm"  className={classes.container}>
            <Typography variant="h5" component="h5"  align="center" gutterBottom="true">
                <Box className={classes.last} color="primary.main">
                    COVID-19 CORONAVIRUS WORLD DATA <span role="img" aria-label="sheep">🦠</span>
                </Box>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper  className={classes.paper} >
                        <Stats url={'https://covid19.mathdro.id/api'}></Stats>
                    </Paper>
                </Grid>           
            </Grid>
            <CountrySelector></CountrySelector>
        </Container>
        </ThemeProvider>
    </div>

    )
}