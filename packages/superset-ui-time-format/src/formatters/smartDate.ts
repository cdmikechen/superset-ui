/* eslint-disable sort-keys */

import createMultiFormatter, { getFormatFunc } from '../factories/createMultiFormatter';
// import { getLocaleDef } from '../TimeFormats';

function getConfig() {
  return {
    id: 'smart_date',
    label: 'Adaptative Formatting',
    formats: smartFormat,
  };
}

let smartFormat = {
  millisecond: '.%Lms',
  second: ':%Ss',
  minute: '%I:%M',
  hour: '%I %p',
  day: '%a %d',
  week: '%b %d',
  month: '%B',
  year: '%Y',
};

// function smartDateFormatter(date: Date) {
//   return createMultiFormatter(getConfig())(date);
// }
//
// export function getSmartDateFormatter() {
//   return createMultiFormatter(getConfig());
// }

let smartDateFormatter = createMultiFormatter(getConfig());

export function restSmartDateFormatter() {
  let multiFormatFunc = getFormatFunc(false, smartFormat);
  smartDateFormatter.resetFunction({
    formatFunc: (date: Date) => multiFormatFunc(date)(date),
  });
}

export default smartDateFormatter;
