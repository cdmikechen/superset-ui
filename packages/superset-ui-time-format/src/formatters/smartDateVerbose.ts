/* eslint-disable sort-keys */

import createMultiFormatter, { getFormatFunc } from '../factories/createMultiFormatter';
// import { getLocaleDef } from '../TimeFormats';

function getConfig() {
  return {
    id: 'smart_date_verbose',
    label: 'Verbose Adaptative Formatting',
    formats: verboseFormatter,
  };
}

let verboseFormatter = {
  millisecond: '.%L',
  second: '%a %b %d, %I:%M:%S %p',
  minute: '%a %b %d, %I:%M %p',
  hour: '%a %b %d, %I %p',
  day: '%a %b %-e',
  week: '%a %b %-e',
  month: '%b %Y',
  year: '%Y',
};

// function smartDateVerboseFormatter(date: Date) {
//   return createMultiFormatter(getConfig())(date);
// }
//
// export function getSmartDateVerboseFormatter() {
//   return createMultiFormatter(getConfig());
// }

const smartDateVerboseFormatter = createMultiFormatter(getConfig());

export function restSmartDateVerboseFormatter() {
  let multiFormatFunc = getFormatFunc(false, verboseFormatter);
  smartDateVerboseFormatter.resetFunction({
    formatFunc: (date: Date) => multiFormatFunc(date)(date),
  });
}

export default smartDateVerboseFormatter;
