import React from 'react';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FlareIcon from '@material-ui/icons/Flare';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ToolTip from '@material-ui/core/Tooltip';

function Footer() {
  return (
    <footer>
      <Breadcrumbs aria-label="breadcrumb">
        
        <ToolTip title="Email Me" arrow>
          <Link 
            color="inherit" 
            href="mailto:alicerupperte@gmail.com"
            className='iconLink'
          >
            <MailOutlineIcon className='icon contact' />
          </Link>
        </ToolTip>

        <ToolTip title="Github Link" arrow>
          <Link 
            color="inherit" 
            href="https://github.com/srslie" 
            className='iconLink'
          >
            <GitHubIcon className='icon' />
          </Link>
        </ToolTip>

        <ToolTip title="LinkedIn Link" arrow>
          <Link
            color="inherit"
            href="https://linkedin.com/in/aliceruppert/"
            className='iconLink'
          >
            <LinkedInIcon className='icon' />
          </Link>
        </ToolTip>

        <ToolTip title="Portfolio Website" arrow>
           <Link
            color="inherit"
            href="https://www.srslie.com/"
            className='iconLink'
          >
            <FlareIcon className='icon' />
          </Link>
        </ToolTip>

        <p className='copyright'>© srslie - 2021</p>

      </Breadcrumbs>
    </footer>
  );
}


export default Footer;