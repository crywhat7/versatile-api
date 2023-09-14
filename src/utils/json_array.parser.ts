export const jsonParser = (result: any) => {
  const dataString = (result?.rows ? result?.rows[0] : []) as any[];

  const dataArray = JSON.parse(dataString[0]);

  return dataArray;
};
