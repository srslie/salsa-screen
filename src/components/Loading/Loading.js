import React from 'react';
import './loading.css'
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));
// <Backdrop className="loading-animation" >
//     <CircularProgress color="inherit" />
//     </Backdrop>

const Loading = () => {
  return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  )

}

export default Loading;