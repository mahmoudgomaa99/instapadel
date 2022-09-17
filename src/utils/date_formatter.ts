export const dateFormatter = (date: any) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '/' + mm + '/' + yyyy;
};

export const bodyDateFormatter = (date: any) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return yyyy + '-' + mm + '-' + dd;
};

export const dateFormatterForMinDatePicker = (date: any) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;

  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return mm + '/' + dd + '/' + yyyy;
};

export const plusDayeDateFormatterForMinDatePicker = (date: any) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;

  let dd = date.getDate();
  dd = dd + 1;

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return mm + '/' + dd + '/' + yyyy;
};
