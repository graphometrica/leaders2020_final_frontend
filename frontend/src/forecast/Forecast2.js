import React from 'react';
import axios from 'axios'
import { makeStyles,  } from '@material-ui/core/styles';
import { colors, Divider, Grid, Container,
    Typography, Card, CardContent, CardActions, Button,
    CardMedia, Paper, Link, FormControl, InputLabel, Select, MenuItem,
    Toolbar, AppBar, TextField, CircularProgress,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';
import { Section, SectionAlternate } from './../components/organisms';

import { getImg, getImg2} from './data/getImg'
import { regions} from './data/regions'

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

const Forecast2 = () => {

    const [curRegion, setCurRegion] = React.useState('840000;11')
    const [showEdit, setShowEdit] = React.useState(false)
    const [initialized, setInitialized] = React.useState(false)
    const [curFeatures, setCurFeatures] = React.useState({
        "oil": '',
        "al": '',
        "gas": '',
        "copper": '',
        "gazprom": '',
        "rusal": '',
        "rub": '',
        temp: '',
        forecast_plot: '',
        trend_plot: '',
        daily_trend: '',
        weekly_trend: '',
        quarterly_forecast: ''
    })

    const [editFeatures, setEditFeatures] = React.useState({
        "oil": 0,
        "al": 0,
        "gas": 0,
        "copper": 0,
        "gazprom": 0,
        "rusal": 0,
        "rub": 0,
        temp: 0
    })

    const [calculating, setCalculating] = React.useState(true)

    

    React.useEffect( async () => {
        if (calculating) {

            const {oil, al, gas,copper,gazprom,rusal,rub,temp } = curFeatures;
            let region = curRegion.split(';')[1];

            let url = `http://172.105.91.42:8088/forecast?region=${region}`;

            if (oil !== '' && al !== '' && gas !== '' && copper !== '' && gazprom !== '' && rusal !== '' && rub !== '') {
                url = url +`&oil=${oil}&al=${al}&gas=${gas}&copper=${copper}&gazprom=${gazprom}&rusal=${rusal}&rub=${rub}`
            }
            let forecast_plot = '';
                    let trend_plot = ''
                    let daily_trend = ''
                    let weekly_trend = '';
                    let quarterly_forecast = '';
            axios.get(url).then(resp => {
                let {data} = resp;
                forecast_plot = data.forecast_plot
                trend_plot = data.trend_plot
                daily_trend = data.daily_trend
                weekly_trend = data.weekly_forecast
                quarterly_forecast = data.quarterly_forecast
                

                if (!initialized) {
                    setInitialized(true);
                    
                        return axios.get(`http://172.105.91.42:8088/avg_features?region=${region}`)
                }else {
                    setCurFeatures({
                        forecast_plot: forecast_plot,
                        trend_plot: trend_plot,
                        daily_trend: daily_trend,
                        weekly_trend: weekly_trend,
                        quarterly_forecast: quarterly_forecast,
                        temp,
                        oil,
                        al,
                        gas,
                        copper,
                        gazprom,
                        rusal,
                        rub,
                        
                    })
                    setCalculating(false)
                }
                
                //
                /*
                oil,
                    al,
                    gas,
                    copper,
                    gazprom,
                    rusal,
                    rub,
                */
            }).then(resp => {
                if (!resp) return;
                setCurFeatures({
                    forecast_plot: forecast_plot,
                    trend_plot: trend_plot,
                    daily_trend: daily_trend,
                    weekly_trend: weekly_trend,
                    quarterly_forecast: quarterly_forecast,
                    temp: resp.data.temp,
                    oil: resp.data.oil,
                    al: resp.data.al,
                    gas: resp.data.gas,
                    copper: resp.data.copper,
                    gazprom: resp.data.gazprom,
                    rusal: resp.data.rusal,
                    rub: resp.data.rub,
                })
                setCalculating(false)
            })            
        }
    }, [calculating]);

    

    const classes = useStyles();
    
    if (calculating) {
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
        setEditFeatures({...curFeatures})
        setShowEdit(true);
    };
    
    const handleCloseEdit = () => {
        setShowEdit(false);
    };

    const handleCalculate = () => {
        setCurFeatures({...editFeatures})
        setShowEdit(false);
        setCalculating(true);
    };

    const handleChangeFeature = (name, value) => {
        setEditFeatures({...editFeatures,
        [name]: value})
    }

    const getGraphUrl = (type) => {
        const {oil, al, gas,copper,gazprom,rusal,rub } = curFeatures;
        let region = curRegion.split(';')[1];

        let url = `http://172.105.91.42:8088/forecast3?region=${region}&graph_type=${type}`;
        //let url = `graph.html?region=${region}&graph_type=${type}`;

        if (oil && al && gas && copper && gazprom && rusal && rub) {
            url = url +`&oil=${oil}&al=${al}&gas=${gas}&copper=${copper}&gazprom=${gazprom}&rusal=${rusal}&rub=${rub}`
        }
        return url;
    }

  return (
    <div className={classes.root}>
        <div >
            <Paper elevation={3} style={{padding: '24px', paddingLeft: '10px', marginBottom: '32px', paddingLeft: '64px'}}>
            <Typography className={classes.root}>
                <Grid container>
                    <Grid item xs={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Регион</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            style={{width: '400px'}}
                            value={curRegion}
                            onChange={onChangeRegion}
                            label="Регион"
                            >
                                {regions.map(region => {
                                    return <MenuItem key={`${region.PowerSystemId};${region.SubjectId}`} value={`${region.PowerSystemId};${region.SubjectId}`}>
                                    {region.OES}: {region.Name}
                                    </MenuItem>
                                })}
                        
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} >
                        <Grid container spacing={2}>
                            
                            <Grid item className="featureItem">
                            Нефть: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.oil)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Газ: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.gas)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Алюминий: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.al)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Медь: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.copper)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Газпром: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.gazprom)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                РусАл: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.rusal)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Доллар: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.rub)}</Link>
                            </Grid>
                            <Grid item className="featureItem">
                                Температура: <Link onClick={handleOpenEdit} className='clickable' href="#" >{round(curFeatures.temp)}</Link>
                            </Grid>

                            

                            <Grid item style={{ marginTop: '7px'}}>
                                <Button onClick={handleOpenEdit}  color="primary" >
                                    Изменить данные
                                </Button>
                                <Button style={{marginLeft: '24px'}} variant="contained" color="primary" onClick={() => {
                                    alert('Графики корреляций откроются в BI системе на базе open source решения Apache Superset.\r\nИспользуйте для входа логин: graphometrica, пароль: minenergo');
                                    window.open('http://34.86.63.199:8088/superset/dashboard/1/?standalone=true', '_blank');
                                }}                                
                                 >
                                    Графики корреляций
                                </Button>

                                
                            </Grid>
                        </Grid>

                    
                        
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
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.oil}
                            onChange={(e) => handleChangeFeature('oil', e.target.value) }
                            style={{width: '100%'}} label="Нефть" 
                            
                            variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.gas}
                            onChange={(e) => handleChangeFeature('gas', e.target.value) }
                            style={{width: '100%'}} label="Газ" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.al}
                            onChange={(e) => handleChangeFeature('al', e.target.value) }
                             style={{width: '100%'}} label="Алюминий" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.copper}
                            onChange={(e) => handleChangeFeature('copper', e.target.value) }
                            style={{width: '100%'}} label="Медь" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.gazprom}
                            onChange={(e) => handleChangeFeature('gazprom', e.target.value) }
                            style={{width: '100%'}} label="Газпром" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.rusal}
                            onChange={(e) => handleChangeFeature('rusal', e.target.value) }
                            style={{width: '100%'}} label="РусАл" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            value={editFeatures.rub}
                            onChange={(e) => handleChangeFeature('rub', e.target.value) }
                            style={{width: '100%'}} label="Доллар" variant="outlined" />
                        </Grid>
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
                <Grid item xs={12}>      
                    <Grid container>
                        <Grid item xs={12} style={ {textAlign: 'center'}}>
                            <Typography variant="h5" component="p" color="textSecondary">
                            Предсказание потребления электроэнергии на 30 дней для {regions.find(i=>i.SubjectId === curRegion.split(';')[1]).Name} ({regions.find(i=>i.PowerSystemId === curRegion.split(';')[0]).OES})
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/* <a href={getGraphUrl('forecast')} target="_blank"><img className="forecastGraph"
                             src={ `data:image/png;base64, ${curFeatures.forecast_plot}`} />
                             </a> */}

<div className="container">
  
  <div className="content">
    <a href={getGraphUrl('forecast')} target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={ `data:image/png;base64, ${curFeatures.forecast_plot}`} />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Посмотреть интерактивный график</h3>
        <p className="content-text">Откроется в новом окне и займет некоторое время</p>
      </div>
    </a>
  </div>
</div>

                        </Grid>
                    </Grid>              
                    
                </Grid>
                <Grid item xs={4}>                    
                    <Grid container>
                        <Grid item xs={12} style={ {textAlign: 'center'}}>
                            <Typography variant="h6" component="p" color="textSecondary">
                            Тренд потребления на 30 дней
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        {/* <a href={getGraphUrl('trend')} target="_blank"><img className="forecastGraph" src={ `data:image/png;base64, ${curFeatures.trend_plot}`} /></a> */}
                        <div className="container">
  
  <div className="content">
    <a href={getGraphUrl('trend')} target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={ `data:image/png;base64, ${curFeatures.trend_plot}`} />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Посмотреть интерактивный график</h3>
        <p className="content-text">Откроется в новом окне и займет некоторое время</p>
      </div>
    </a>
  </div>
</div>                        
                        </Grid>
                    </Grid>  
                </Grid> 

                <Grid item xs={4}>                    
                    <Grid container>
                        <Grid item xs={12} style={ {textAlign: 'center'}}>
                            <Typography variant="h6" component="p" color="textSecondary">
                            Дневной тренд
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        {/* <a href={getGraphUrl('daily_part')} target="_blank"><img className="forecastGraph" src={ `data:image/png;base64, ${curFeatures.daily_trend}`} /></a> */}
                        <div className="container">
  
  <div className="content">
    <a href={getGraphUrl('daily_part')} target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={ `data:image/png;base64, ${curFeatures.daily_trend}`} />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Посмотреть интерактивный график</h3>
        <p className="content-text">Откроется в новом окне и займет некоторое время</p>
      </div>
    </a>
  </div>
</div>                        
                        </Grid>
                    </Grid>  
                </Grid>


                <Grid item xs={4}>                    
                    <Grid container>
                        <Grid item xs={12} style={ {textAlign: 'center'}}>
                            <Typography variant="h6" component="p" color="textSecondary">
                            Недельный тренд
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        {/* <a href={getGraphUrl('weekly_part')} target="_blank"><img className="forecastGraph" src={ `data:image/png;base64, ${curFeatures.weekly_trend}`} /></a> */}
                        <div className="container">
  
  <div className="content">
    <a href={getGraphUrl('weekly_part')} target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={ `data:image/png;base64, ${curFeatures.weekly_trend}`} />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">Посмотреть интерактивный график</h3>
        <p className="content-text">Откроется в новом окне и займет некоторое время</p>
      </div>
    </a>
  </div>
</div>                        
                        </Grid>
                    </Grid>  
                </Grid>

               




               
            </Grid>
            
            <Grid container>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Typography variant="h6" component="p" color="textSecondary">Валидация модели для {regions.find(i=>i.SubjectId === curRegion.split(';')[1]).Name} ({regions.find(i=>i.PowerSystemId === curRegion.split(';')[0]).OES})</Typography><br/>
                        <img style={{width: '100%'}} src={`https://raw.githubusercontent.com/graphometrica/minenergo-models/master/plots/region_${curRegion.split(';')[1]}.png`} />
                    </Grid>

                
            </Grid>

            

            {/* <Grid container spacing={2} style={{marginTop: '32px'}}>
                
            </Grid> */}
        </div>
        
      {/*  */}
      
    </div>
  );
}

export { Forecast2 };