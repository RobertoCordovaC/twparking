// noinspection ES6CheckImport
import { findKey, last, includes } from 'lodash';

const days = {
  M: ['1', '2'],
  Tu: ['3', '4'],
  W: ['5', '6'],
  Th: ['7', '8'],
  F: ['9', '0'],
};

const dayForTrafficRestriction = (plate) => {
  const lastDigit = last(plate);
  return findKey(days, day => includes(day, lastDigit)) || 'None';
};

const carHelper = {
  dayForTrafficRestriction,
};

export default carHelper;
