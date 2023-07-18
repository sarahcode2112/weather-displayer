export const formatResponse = (responseDatum: string | string[] | string[][]) => JSON
    .stringify(responseDatum)
    .replace(/['"]+/g, '');