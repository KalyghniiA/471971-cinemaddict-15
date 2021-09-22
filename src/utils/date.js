import dayjs from 'dayjs';
import { getRandomIntInclusive } from './common';

export const generateDateToComment = () => {
  const maxDaysGap = 14;
  const daysGap = getRandomIntInclusive(-maxDaysGap, 0);
  return dayjs().add(daysGap, 'd').toDate();
};

export const generateDateRelease = () => {
  const maxYearsGap = 10;
  const maxMonthsGap = 12;
  const maxDaysGap = 30;

  const yearsGap = getRandomIntInclusive(-maxYearsGap, 0);
  const mountGap = getRandomIntInclusive(-maxMonthsGap, 0);
  const daysGap = getRandomIntInclusive(-maxDaysGap, 0);

  return dayjs().add(yearsGap, 'y').add(mountGap, 'M').add(daysGap, 'd').toDate();
};

export const generateDate = () => {
  const maxDaysGap = 7;

  const daysGap = getRandomIntInclusive(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, 'd').toDate();
};

export const formatDate = (date, format = '') => dayjs(date).format(format);

export const getTimeFromMinutes = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;

  if (hours === 0) {
    return `${minutes}m`;
  } else {
    return `${hours}H ${minutes}m`;
  }

};

