import moment from 'moment';
import {Platform} from 'react-native';
import {bodyDateFormatter} from 'utils/date_formatter';
import {keys} from './data';

export const createRequestBody = (values: any) => {
  const body = new FormData();
  keys.map(item => {
    if (item.label === 'logo_img') {
      body.append('logo_img', {
        uri:
          Platform.OS === 'android'
            ? values.logo_img[0].uri
            : values.logo_img[0].uri.replace('file://', ''),
        name: values.logo_img[0].fileName,
        type: values.logo_img[0].type,
      });
      return;
    }
    body.append(
      item.label,
      item.type === 'date'
        ? bodyDateFormatter(values[item.label])
        : item.type === 'time'
        ? moment(values[item.label]).format('HH:mm')
        : values[item.label],
    );
  });
  return body;
};
