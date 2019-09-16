import React from 'react';
import * as PropTypes from 'prop-types';
import './Loader.scss';

export const Loader = (props) => {
  const { fluid, text }  = props;
  return (
    <div className={fluid ? 'container-fluid' : 'container'}>
      <div className="col-xs-12 spinner pt-5">
        <div className="orbit-spinner">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
        {text &&
          <div className="mt-5">
            {text}
          </div>
        }
      </div>
    </div>
  )
};

Loader.propTypes = {
  fluid: PropTypes.bool,
  text: PropTypes.string,
};
