import { useState, useEffect } from 'react'
import useStats from "../src/useStats";
import Stats from "../components/Stats";
import Last from "../components/lastUpdate";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import ReactCountryFlag from "react-country-flag"

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        position:'inherit',
        margin: '0px auto'
      },
    },
   
    input: {
      margin: `${theme.spacing(3)}px`,
      background: '#FFF',
      width: '100%',
      display: 'block',
      borderRadius: 4,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        background: '#FFF',
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),


    },
    paper: {
        padding: theme.padding,
        textAlign: 'center',
        color: '#FFF',
        background: 'linear-gradient(45deg, #654ea3 30%, #eaafc8 90%)',
        minHeight: 240
      },

  }));

export default function CountrySelector() {
    const classes = useStyles();
    const theme = useTheme();
    const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('MX');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <Grid item xs={12}>
            <ReactCountryFlag 
                countryCode={selectedCountry}
                svg
                style={{
                    width: '3em',
                    height: '3em',
                    marginLeft: '40px'
                }}
                title={selectedCountry}
            />
            <NativeSelect  id="demo-customized-select-native"  input={<BootstrapInput />} onChange={(e) => {setSelectedCountry(e.target.value)}}>
                    {Object.values(countries.countries).map(({name, iso2}) => {
                        return (
                            <option selected={selectedCountry === iso2} key={iso2} value={iso2}>
                             {name} ({iso2})
                            </option>
                        )
                    })}
            </NativeSelect >
            <Paper className={classes.paper}  >
                <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
            </Paper>
            <Last url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}  />
        </Grid>
    );
}