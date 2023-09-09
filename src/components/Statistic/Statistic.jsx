import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total !== 0) {
    return (
      <ul className={css.item}>
        <li className={css.items}>
          Good: <span>{good}</span>
        </li>
        <li className={css.items}>
          Netural: <span>{neutral}</span>
        </li>
        <li className={css.items}>
          Bad: <span>{bad}</span>
        </li>
        <li className={css.items}>
          Total: <span>{total}</span>
        </li>
        <li className={css.items}>
          Positile feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    );
  } else {
    return <Notification message={'There is no feedback'} />;
  }
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
