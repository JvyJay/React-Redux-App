import React from 'react';
import { connect } from 'react-redux';

import { fetchAdvice, clearAdvice } from '../actions/index';

const Advice = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Advice of The Day</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <button
          style={{ margin: '10px', padding: '20px' }}
          onClick={props.fetchAdvice}
        >
          Get Advice!
        </button>
        <button
          style={{ margin: '10px', padding: '20px' }}
          onClick={props.clearAdvice}
        >
          Clear Advice
        </button>
      </div>
      {!props.advice && !props.isLoading && <p>Want Some Advice?</p>}
      {props.isLoading && <p>Loading...</p>}
      {props.advice && !props.isLoading && <h2>{props.advice.advice}</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    advice: state.advice,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchAdvice, clearAdvice })(Advice);
