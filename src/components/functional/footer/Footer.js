import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

const logo = require('../../../assets/exercise.png');
const facebook = require('../../../assets/social-facebook-box-blue-icon.png');
const twitter = require('../../../assets/social-twitter.png');
const instagram = require('../../../assets/social-instagram.png');

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey['200'],
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    direction: 'column',
    paddingTop: 7,
    paddingBottom: 10,
  },
  tagline: {
    marginLeft: 10,
  },
  socialBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 9,
  },
  socialImages: {
    width: 24,
    height: 24,
    marginLeft: 3,
  },
  grid: {
    width: 970,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    marginLeft: 13,
  },
  customFooterSize: {
    fontSize: 14,
  },
  fixedIfShorterThanWindow: {
    position: 'fixed',
    bottom: 0,
  }
})

class Footer extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          ifShorterThan: 12
      }
  }

  componentDidMount() {
    console.log(this.state.ifShorterThan)
  }

  render() {
    const { classes } = this.props;

    return (
      // <Grid container 
      // className={classnames(classes.root, {
      //   [classes.fixedIfShorterThanWindow]: this.props.bottomNavFixed,
      // })}
      // >
      <Grid container 
      className={classnames(classes.root, classes.fixedIfShorterThanWindow)}
      >
        <Grid container className={classes.grid}>
          <Grid item xs={9} className={classes.footerText}>
            <Typography color="inherit" className={classes.customFooterSize}>
              <img width={24} src={logo} />
              <span className={classes.tagline}>Developed by Strength LLC</span>
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.socialBar}>
            <a href="https://facebook.com"target="_blank" rel="noopener noreferrer"><img className={classes.socialImages} src={facebook} /></a>
            <a href="https://twitter.com"target="_blank" rel="noopener noreferrer"><img className={classes.socialImages} src={twitter} /></a>
            <a href="https://instagram.com"target="_blank" rel="noopener noreferrer"><img className={classes.socialImages} src={instagram} /></a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);