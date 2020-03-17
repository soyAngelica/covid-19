
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelect";

export default function Index() {
    return (
        <ThemeProvider theme={theme} >
            <div style={{background: theme.palette.primary.background}} >
                <Container maxWidth="sm" >
                    <Typography variant="h5" component="h5"  align="center" gutterBottom="true">
                        <Box style={{ color: theme.paper.color, padding:theme.padding }}  >
                            COVID-19 CORONAVIRUS WORLD DATA <span role="img" aria-label="sheep">🦠</span>
                        </Box>
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={{ background: theme.paper.background, textAlign:theme.paper.textAlign, padding:theme.padding }} >
                                <Stats url={'https://covid19.mathdro.id/api'}></Stats>
                            </Paper>
                        </Grid>           
                    </Grid>
                    <CountrySelector></CountrySelector>
                </Container>
            </div>

        </ThemeProvider>
    )
}