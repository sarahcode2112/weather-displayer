export const formatResponse = (responseDatum: string | string[] | string[][]) => JSON
    .stringify(responseDatum)
    .replace(/['"]+/g, '');

export const formatSingleDateTime = (datetimeEntry: string): string => {
  const [time, _] = datetimeEntry.split(' ');

  const hour = parseInt(time.split(':')[0], 10);

  let formattedTime: string;
  if (hour === 0) {
      formattedTime = `12AM`;
  } else if (hour < 12) {
      formattedTime = `${hour}AM`;
  } else if (hour === 12) {
      formattedTime = `12PM`;
  } else {
      formattedTime = `${hour - 12}PM`;
  }

    return formattedTime;
};
