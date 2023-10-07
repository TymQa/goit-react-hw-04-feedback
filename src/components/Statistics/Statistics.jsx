import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {

  return (
    <ul className={css.ul}>
      <li>
        <p className={css.subTitle}>good= {good}</p>
      </li>
      <li>
        <p className={css.subTitle}>neutral= {neutral}</p>
      </li>
      <li>
        <p className={css.subTitle}>bad= {bad}</p>
      </li>
      <li>
        <p className={css.subTitle}>total= {total}</p>
      </li>
      <li>
        <p className={css.subTitle}>positivePercentage= {percentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;