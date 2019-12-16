/* eslint-disable sort-keys */

import createMultiFormatter from '../factories/createMultiFormatter';
import { getLocaleDef } from '../TimeFormats';

function getConfig() {
  return {
    id: 'smart_date_verbose',
    label: 'Verbose Adaptative Formatting',
    formats: {
      millisecond: '.%L',
      second: '%a %b %d, %I:%M:%S %p',
      minute: '%a %b %d, %I:%M %p',
      hour: '%a %b %d, %I %p',
      day: '%a %b %-e',
      week: '%a %b %-e',
      month: '%b %Y',
      year: '%Y',
    },
    locale: getLocaleDef(),
  };
}

function smartDateVerboseFormatter(date: Date) {
  return createMultiFormatter(getConfig())(date);
}

export function getSmartDateVerboseFormatter() {
  return createMultiFormatter(getConfig());
}

export default smartDateVerboseFormatter;
