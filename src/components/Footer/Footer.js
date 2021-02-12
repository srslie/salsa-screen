import React from 'react';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FlareIcon from '@material-ui/icons/Flare';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Footer() {
  return (
    <footer>
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          color="inherit" 
          href="mailto:alicerupperte@gmail.com"
          className='iconLink'
        >
          <MailOutlineIcon className='icon contact' />
           Contact
        </Link>

        <Link 
          color="inherit" 
          href="https://github.com/srslie" 
          className='iconLink'
        >
          <GitHubIcon className='icon' />
           Github
        </Link>

        <Link
          color="inherit"
          href="https://linkedin.com/in/aliceruppert/"
          className='iconLink'
        >
          <LinkedInIcon className='icon' />
           LinkedIn
        </Link>

         <Link
          color="inherit"
          href="https://www.srslie.com/"
          className='iconLink'
        >
          <FlareIcon className='icon' />
           Porfolio
        </Link>

        <p className='copyright'>© srslie - 2021</p>
      </Breadcrumbs>
    </footer>
  );
}


export default Footer;