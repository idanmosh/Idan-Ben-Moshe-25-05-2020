import React, { memo, Fragment } from 'react';
import classes from './Modal.module.css';

const ErrorModal = ( props ) => {
    return (
      <Fragment>
        <div className={classes.backdrop} onClick={props.closeModal} />
        <div className={classes['error-modal']}>
          <h2>An Error Occurred!</h2>
          <p>{props.children}</p>
          <div className={classes['error-modal__actions']}>
            <button type="button" onClick={props.closeModal} className={classes.button}>
              Okay
            </button>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default memo(ErrorModal);