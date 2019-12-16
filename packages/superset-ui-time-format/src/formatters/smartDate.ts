/* eslint-disable sort-keys */

import createMultiFormatter from '../factories/createMultiFormatter';
import { getLocaleDef } from '../TimeFormats';

function getConfig() {
  return {
    id: 'smart_date',
    label: 'Adaptative Formatting',
    formats: {
      millisecond: '.%Lms',
      second: ':%Ss',
      minute: '%I:%M',
      hour: '%I %p',
      day: '%a %d',
      week: '%b %d',
      month: '%B',
      year: '%Y',
    },
    locale: getLocaleDef(),
  };
}

function smartDateFormatter(date: Date) {
  return createMultiFormatter(getConfig())(date);
}

export function getSmartDateFormatter() {
  return createMultiFormatter(getConfig());
}

export default smartDateFormatter;
