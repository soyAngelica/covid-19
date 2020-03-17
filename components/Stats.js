import { useState, useEffect } from 'react'
import useStats from "../src/useStats";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    format: {
        color: '#FFF'
    }
}));

export default function Stats({url}) {
    const classes = useStyles();
    const {stats, loading, error} = useStats(url);
    if (loading) return <Typography variant="h6" component="h6" gutterBottom>Loading...</Typography>
    if (error) return   <Typography variant="h6" component="h6" gutterBottom>No data</Typography>
    // {error.message.split('not')[0]}
    return (
        <React.Fragment>
            <Typography variant="h5" component="h5" gutterBottom className={classes.format}>
                Confirmados
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom className={classes.format}>
                {stats.confirmed.value}
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom className={classes.format}>
                Muertos
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom className={classes.format}>
                {stats.deaths.value}
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom className={classes.format}>
                Curados
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom className={classes.format}>
                {stats.recovered.value}
            </Typography>
      </React.Fragment>
                
    );
}