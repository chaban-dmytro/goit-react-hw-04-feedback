import React from "react";
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ( { options, onLeaveFeedback } ) => {
  return (
    <ul className={css.items}>
      {options.map( item => {
        return <li key={item} className={css.item} >
          <button  className={css.button} type="button" onClick={onLeaveFeedback}>{item}</button>
        </li>
      })}
    </ul>
  )
}

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}

