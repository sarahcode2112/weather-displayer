export const formatResponse = (
  responseDatum: string | string[] | string[][],
): string => JSON.stringify(responseDatum).replace(/['"]+/g, "");

export const formatSingleDateTime = (datetimeEntry: string): string => {
  const [time] = datetimeEntry.split(" ");
  const hour = parseInt(time.split(":")[0], 10);

  if (hour === 0) {
    return `12AM`;
  } else if (hour < 12) {
    return `${hour}AM`;
  } else if (hour === 12) {
    return `12PM`;
  } else {
    return `${hour - 12}PM`;
  }
};
