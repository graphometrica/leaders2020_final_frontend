import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from './../../../components/atoms';
import { SectionHeader, TypedText } from './../../../components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest} >
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={8}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <>
                
                <TypedText
                  component="p"
                  style={{fontSize: '72px', fontWeight: '800', lineHeight: '44px'}} 
                  
                  typedProps={{
                      strings: [ "Моделируйте", "Анализируйте", "Оптимизируйте", "Развивайте"],
                      typeSpeed: 80,
                      loop: true,
                  }}
              />

                {/* <Typography style={{fontSize: '72px', fontWeight: '800', lineHeight: '44px'}} component="p" >
                Моделируйте
                </Typography> */}
                
                <Typography style={{fontSize: '46px', lineHeight: '44px', marginTop: '28px'}} component="p" variant="inherit" color="primary">
                потребление электроэнергии
                </Typography>
                <Typography style={{fontSize: '35px', lineHeight: '32px', marginTop: '18px'}} component="p" variant="inherit" >
                с помощью искуственного интеллекта
                </Typography>
                
                
              </>
            }
            subtitle={<>
            <Typography style={{marginTop: '24px'}} component="p" variant="inherit" >
            Моделируйте различные сценарии, такие как: увеличение промышленного производства, изменение погоды, падение цен на нефть и другие и получите краткосрочный и долгосрочный прогнозы по потреблению электроэнергии в различных регионах России.
                </Typography><br/>
            
            </>}
            ctaGroup={[
              <Button variant="contained" color="primary" size="large"
              href="/#/forecast">
                Смоделировать потребление
              </Button>,
              // <Button variant="outlined" color="primary" size="large">
              //   Learn more
              // </Button>,
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
          data-aos={'fade-up'}
        >
          <Image
            src="/images/default/hero.jpg"
            alt="TheFront Company"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
