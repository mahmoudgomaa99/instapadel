import moment from 'moment';
import {Platform} from 'react-native';
import {bodyDateFormatter} from 'utils/date_formatter';
import {keys} from './data';

export const createRequestBody = (values: any) => {
  const body = new FormData();
  keys.map(item => {
    if (item.label === '_method') {
      body.append('_method', 'PUT');
      return;
    }
    if (item.label === 'user_avatar') {
      if (values.user_avatar) {
        body.append('user_avatar', {
          uri:
            Platform.OS === 'android'
              ? values.user_avatar[0].uri
              : values.user_avatar[0].uri.replace('file://', ''),
          name: values.user_avatar[0].fileName,
          type: values.user_avatar[0].type,
        });
      }

      return;
    }
    body.append(
      item.label,
      item.type === 'date'
        ? bodyDateFormatter(values[item.label])
        : values[item.label],
    );
  });
  return body;
};
