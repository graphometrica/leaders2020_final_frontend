import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from './../components/organisms';
import {
  Customization,
  Download,
  Hero,
  Hub,
  Partners,
  Pricings,
  Reviews,
  Support,
} from './components';

import { reviews, support, integrations } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: '100px',// theme.spacing(5),
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

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{background: 'url(./images/bg.jpg)'}}>
      <div  style={ {paddingTop:'100px', paddingBottom: '300px'}}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        
      </div>
      
    </div>
  );
};

export { Landing };
