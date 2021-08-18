import dayjs from 'dayjs';

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const getRandomIntInclusive = (min = 0, max = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomFloat = (start, end, precision) => (Math.random() * (end - start) + start).toFixed(precision);

export const getRandomElementFromArray = (arr) => arr[getRandomIntInclusive(0, arr.length - 1)];

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

export const formateDate = (date, format = '') => dayjs(date).format(format);

export const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;

  if (hours === 0) {
    return `${minutes}m`;
  } else {
    return `${hours}H ${minutes}m`;
  }

};
