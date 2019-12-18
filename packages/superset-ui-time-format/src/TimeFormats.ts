export const LOCAL_PREFIX = 'local!';

const DATABASE_DATETIME = '%Y-%m-%d %H:%M:%S';
const DATABASE_DATETIME_REVERSE = '%d-%m-%Y %H:%M:%S';
const US_DATE = '%m/%d/%Y';
const INTERNATIONAL_DATE = '%d/%m/%Y';
const DATABASE_DATE = '%Y-%m-%d';
const TIME = '%H:%M:%S';

const TimeFormats = {
  DATABASE_DATE,
  DATABASE_DATETIME,
  DATABASE_DATETIME_REVERSE,
  INTERNATIONAL_DATE,
  TIME,
  US_DATE,
};

import { TimeLocaleDefinition, timeFormatLocale } from 'd3-time-format';

export class LocaleDef {
  LOCAL_DEF: TimeLocaleDefinition = {
    dateTime: '%x, %X',
    date: '%-m/%-d/%Y',
    time: '%-I:%M:%S %p',
    periods: ['AM', 'PM'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    shortMonths: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  };

  // LOCAL_DEF: TimeLocaleDefinition = {
  //     "dateTime": "%x %A %X",
  //     "date": "%Y年%-m月%-d日",
  //     "time": "%H:%M:%S",
  //     "periods": ["上午", "下午"],
  //     "days": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  //     "shortDays": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  //     "months": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  //     "shortMonths": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  // };

  getLocaleDef() {
    return this.LOCAL_DEF;
  }

  setLocaleDef(localeDef: TimeLocaleDefinition) {
    timeFormatLocale(localeDef);
    this.LOCAL_DEF = localeDef;
  }
}

import { makeSingleton } from '@superset-ui/core';
const getD3LocaleDefInstance = makeSingleton(LocaleDef);

export function getLocaleDef() {
  console.log(JSON.stringify(getD3LocaleDefInstance().getLocaleDef()));
  return getD3LocaleDefInstance().getLocaleDef();
}

export function setLocaleDef(localeDef: TimeLocaleDefinition) {
  return getD3LocaleDefInstance().setLocaleDef(localeDef);
}

export default TimeFormats;
