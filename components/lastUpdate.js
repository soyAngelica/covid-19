import { useState, useEffect } from 'react'
import useStats from "../src/useStats";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    last: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    }

}));

export default function Last({url}) {
    const classes = useStyles();
    const {stats, loading, error} = useStats(url);
    const options = {
        year: "numeric",
        month:"long",
        day:"numeric",
        hour:  "2-digit",
        minute: "2-digit",
    }
    if (loading) return <p></p>;
    if (error) return <Typography variant="subtitle1" component="subtitle1" color="light" align="center" gutterBottom="true">  <Box className={classes.last} color="primary.main"> Last Update: No Data</Box></Typography>;
    return (
        <Typography variant="subtitle1" component="subtitle1" color="light" align="center" gutterBottom="true">
            <Box className={classes.last} color="primary.main">Última actualización: { (new Date(stats.lastUpdate)).toLocaleDateString('en-US', options) }</Box>
        </Typography>
    );
}