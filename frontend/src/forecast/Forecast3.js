import React from 'react';
import axios from 'axios'
import { makeStyles,  } from '@material-ui/core/styles';
import { colors, Divider, Grid, Container,
    Typography, Card, CardContent, CardActions, Button,
    CardMedia, Paper, Link, FormControl, InputLabel, Select, MenuItem,
    Toolbar, AppBar, TextField, CircularProgress,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';

/*
    <CountUpNumber
                    end={400}
                    label="Components"
                    textColor="primary"
                    suffix="+"
                  />
*/

import {CountUpNumber} from './../components/molecules'

import { getImg, getImg2} from './data/getImg'
import { regions } from './data/regions'

let uniqOES = [...new Set(regions.map(i=>i.OES))]

let oeses = [];

uniqOES.forEach(r => {
    // по этой ОЭС нет данных в системе кейсодержателя
    if(r !== 'ОЭС Востока') {
        oeses.push(regions.find(i=>i.OES === r));
    }
    
})

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      width: '100%',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    pagePaddingTop: {
      paddingTop: '50px',// theme.spacing(5),
      // [theme.breakpoints.up('md')]: {
      //   paddingTop: theme.spacing(5),
      // },
    },
    sectionNoPaddingTop: {
      paddingTop: 0,
    },
    shape: {
      background: theme.palette.alternate.main,
      borderBottomRightRadius: '50%',
      borderBottom: `1px solid ${colors.grey[200]}`,
    },
  }));

const round = (num) => {
    if (!num) return '0';
    return parseFloat(num).toFixed(2);
}

const Forecast3 = () => {

    const [curRegion, setCurRegion] = React.useState('840000')
    const [showEdit, setShowEdit] = React.useState(false)
    

    const [lastResponse, setLastResponse] = React.useState(null);

    const [editCoefs, setEditCoefs] = React.useState({        
    })

    const [calculating, setCalculating] = React.useState(true)

    const [calculatedValue, setCalculatedValue] = React.useState('')

    const calculateByFormula = (data) => {

        
        console.log('data.formula', data.formula)
        let formula = data.formula.substr(data.formula.indexOf('= ') + 2);
        let minus = [];
        let plus = [];

        let rus = {};
        let rusValues = Object.values(data.coeff_mapping);
        let rusKeys = Object.keys(data.coeff_mapping);

        Object.keys(data.coeff_mapping).forEach(key => {
            let value = data.coeff_mapping[key]
            rus[value] = key
        })
        
        Object.keys(rus).forEach(key => {
            formula = formula.split(key).join('(' + data.coefficients[rus[key]] +')' )
        })

            console.log(`AFTER ${formula}`)

            let finalValue = round(parseFloat(eval(formula)));

        console.log('finalValue', finalValue)
        setCalculatedValue(finalValue)        
    }
    

    React.useEffect( async () => {
        if (calculating) {
                        
            let powerId = curRegion;

            let url = `http://172.105.91.42:8088/econometrics?reg_sys=${powerId}`;

            
            // let rrr = {
            //     "formula": "Потребление, ГВт = 11.220 - 0.108 * Температура + 0.681 * Фьючерсы на газ",
            //     "avgCeofficients": {
                    
            //         "temp": -0.10849949440483969,
            //         "gas": 0.6808158425709596
            //         },
            //     "coefficients": {
            //         "Intercept": 11.220044878312422,
            //         "temp": -0.10849949440483969,
            //         "gas": 0.6808158425709596
            //     },
            //     "coeff_mapping": {
            //         "quarter": "Квартал",
            //         "temp": "Температура",
            //         "rub": "Пара RUB/USD",
            //         "rusal": "Котировки РУСАЛ",
            //         "gas": "Фьючерсы на газ"
            //         },
            //     "summary": "                            OLS Regression Results                            \n==============================================================================\nDep. Variable:               use_fact   R-squared:                       0.948\nModel:                            OLS   Adj. R-squared:                  0.935\nMethod:                 Least Squares   F-statistic:                     72.60\nDate:                Sun, 29 Nov 2020   Prob (F-statistic):           7.44e-06\nTime:                        00:03:10   Log-Likelihood:               -0.66974\nNo. Observations:                  11   AIC:                             7.339\nDf Residuals:                       8   BIC:                             8.533\nDf Model:                           2                                         \nCovariance Type:            nonrobust                                         \n==============================================================================\n                 coef    std err          t      P>|t|      [0.025      0.975]\n------------------------------------------------------------------------------\nIntercept     11.2200      0.494     22.712      0.000      10.081      12.359\ntemp          -0.1085      0.010    -10.584      0.000      -0.132      -0.085\ngas            0.6808      0.181      3.771      0.005       0.265       1.097\n==============================================================================\nOmnibus:                        0.040   Durbin-Watson:                   1.410\nProb(Omnibus):                  0.980   Jarque-Bera (JB):                0.244\nSkew:                          -0.096   Prob(JB):                        0.885\nKurtosis:                       2.296   Cond. No.                         60.7\n==============================================================================\n\nNotes:\n[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.",
            //     "data_plot": "",
            //     "corr_plot": ""
            // };
            // setLastResponse(rrr);
            
            // setEditCoefs({...rrr.avgCeofficients})
            // calculateByFormula(rrr);
            // setCalculating(false);

            axios.get(url).then(resp => {
                let {data} = resp;
                
                setLastResponse(data);
            setEditCoefs({...data.avgCeofficients})
            calculateByFormula(data);
                
                setCalculating(false)
                                
            })          
        }
    }, [calculating]);

    

    const classes = useStyles();
    
    if (calculating || !lastResponse) {
        return <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{textAlign: 'center', paddingTop: '400px'}}>
                    <Typography variant="h6" component="p" color="textSecondary">Пожалуйста, подождите...</Typography><br/>
                    <CircularProgress />
                </Grid>
                <Grid item xs={4}></Grid>
                
            </Grid>
    }
    

    const onChangeRegion = (e) => {
        setCurRegion(e.target.value);
        setCalculating(true);
    }

    const handleOpenEdit = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        // setEditCoefs({...editCoefs,
        //     ...lastResponse.coefficients
        // });
        //setEditFeatures({...curFeatures})
        setShowEdit(true);
    };
    
    const handleCloseEdit = () => {
        setShowEdit(false);
    };

    const handleCalculate = () => {        
        setShowEdit(false);
    
        calculateByFormula({...lastResponse, coefficients: {...editCoefs} })
        
    };

    const handleEditCoefs = (name, value) => {
        setEditCoefs({...editCoefs,
        [name]: value})
    }

    

  return (
    <div className={classes.root}>
        <div >
            <Paper elevation={3} style={{padding: '24px', paddingLeft: '10px', marginBottom: '32px', paddingLeft: '64px'}}>
            <Typography className={classes.root}>
                <Grid container>
                <Grid item xs={4} ></Grid>
                    <Grid item xs={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Регион</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            style={{width: '450px'}}
                            value={curRegion}
                            onChange={onChangeRegion}
                            label="Регион"
                            >
                                {oeses.map(region => {
                                    return <MenuItem key={`${region.PowerSystemId};${region.SubjectId}`} value={`${region.PowerSystemId}`}>
                                    {region.OES}
                                    </MenuItem>
                                })}
                        
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} >
                        

                    
                        
                    </Grid>
                </Grid>
            </Typography>                                                            
                
            </Paper>


            <Dialog
                
                maxWidth='sm'
                open={showEdit}
                onClose={handleCloseEdit}
                
            >
                <DialogTitle id="max-width-dialog-title">Укажите новые значения метрик для прогнозирования</DialogTitle>
                <DialogContent>

                <form className={classes.root} noValidate autoComplete="off">    
                    <Grid container spacing={2}>

                    {Object.keys(lastResponse.coefficients).filter(i=>i !== 'Intercept')
                            .map(key => {
                                return <Grid item xs={12}>
                            <TextField
                            value={editCoefs[key]}
                            onChange={(e) => handleEditCoefs(key, e.target.value) }
                            style={{width: '100%'}} label={lastResponse.coeff_mapping[key]}
                            
                            variant="outlined" />
                        </Grid>
                                // <Grid key={key} item className="featureItem">
                                // {lastResponse.coeff_mapping[key]}: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(lastResponse.avgCeofficients[key])}</Link>
                                // </Grid>
                            })}
                        
                    </Grid>
                </form>
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Закрыть
                    </Button>
                    <Button onClick={handleCalculate} color="primary">
                        Моделировать
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid container spacing={2}>
                
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    {calculatedValue !== '' && !showEdit && (<>
                        <Grid container spacing={2}>                    
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <Typography variant="h4" component="p" style={{color: '#000', marginTop: '20px', marginBottom: '50px'}}>{lastResponse.formula}</Typography>
                                
                            </Grid>                    
                        </Grid>
                    <Typography variant="h5" component="p" color="textSecondary">Смоделированное потребление электроэнергии</Typography><br/>
                    <CountUpNumber
                    suffix={calculatedValue.toString().indexOf('.') >= 0 ? calculatedValue.toString().substr(calculatedValue.toString().indexOf('.')) : '.0'}
                    end={Math.floor(calculatedValue)}
                    label="Гвт / час"
                    textColor="primary"
                    
                  /></>)}
                </Grid>
                
            </Grid>

            

            <Grid container spacing={2}>

                <Grid item xs={2}></Grid>
                            


                    <Grid item xs={8} style={{ fontFamily: 'Roboto', textAlign: 'center'}}>
                        <br/><br/>
                    
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>

                        <table >
                        <th style={{textAlign: 'left'}}>Фактор</th>
                        <th style={{textAlign: 'left'}}>Среднее значение</th>
                        {Object.keys(lastResponse.coefficients).filter(i=>i !== 'Intercept')
                            .map(key => {
                                return <tr key={key} className="featureItem">
                                    <td style={{textAlign: 'left'}}>{lastResponse.coeff_mapping[key]}</td>
                                    <td style={{textAlign: 'right'}}>
                                    <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(editCoefs[key])}</Link>
                                    </td>
                                </tr>
                            })}
                        <tr></tr>
                    </table>

                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    
                        
                            
                            

                            

                            <Grid item style={{ marginTop: '17px'}}>
                                <Button onClick={handleOpenEdit}  color="primary" >
                                    Изменить данные
                                </Button>
                                
                                
                            </Grid>

                    </Grid>

                    <Grid item xs={3}></Grid>
                    
                </Grid>

                <Grid container spacing={2} style={{marginTop: '40px'}}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography variant="h6" component="p" color="textSecondary">Точность предсказаний</Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <img style={{display: 'inline', width: '1200px'}} src={ `data:image/png;base64, ${lastResponse.data_plot}`} />
                    </Grid>                    
                </Grid>

                <Grid container spacing={2} style={{marginTop: '32px'}}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <pre>{lastResponse.summary}</pre>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>

                <Grid container spacing={2} style={{marginTop: '40px'}}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography variant="h6" component="p" color="textSecondary">Корреляция факторов</Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <img style={{display: 'inline', width: '1200px'}} src={ `data:image/png;base64, ${lastResponse.corr_plot}`} />
                    </Grid>                    
                </Grid>
            

                

            {/* <Grid container spacing={2} style={{marginTop: '32px'}}>
                
            </Grid> */}
        </div>
        
      {/*  */}
      
    </div>
  );
}

export { Forecast3 };