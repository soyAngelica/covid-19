import { useState, useEffect } from 'react'
import useStats from "../src/useStats";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import Typography from '@material-ui/core/Typography';

export default function Stats({url}) {
    const {stats, loading, error} = useStats(url);
    if (loading) return <Typography variant="h6" component="h6" gutterBottom>Loading...</Typography>
    if (error) return   <Typography variant="h6" component="h6" gutterBottom>No data</Typography>
    // {error.message.split('not')[0]}
    return (
        <React.Fragment>
            <Typography variant="h5" component="h5" gutterBottom>
                Confirmados
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                {stats.confirmed.value}
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
                Muertos
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                {stats.deaths.value}
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
                Curados
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
                {stats.recovered.value}
            </Typography>
      </React.Fragment>
                
    );
}