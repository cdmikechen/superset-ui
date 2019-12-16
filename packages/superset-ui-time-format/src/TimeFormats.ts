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
  LOCAL_DEF: TimeLocaleDefinition;
  constructor(localeDef: TimeLocaleDefinition) {
    this.LOCAL_DEF = localeDef;
  }

  getLocaleDef() {
    return this.LOCAL_DEF;
  }

  setLocaleDef(localeDef: TimeLocaleDefinition) {
    console.log(localeDef);
    timeFormatLocale(localeDef);
    this.LOCAL_DEF = localeDef;
  }
}

import { makeSingleton } from '@superset-ui/core';
const getD3LocaleDefInstance = makeSingleton(LocaleDef);

export function getLocaleDef() {
  return getD3LocaleDefInstance().getLocaleDef();
}

export function setLocaleDef(localeDef: TimeLocaleDefinition) {
  return getD3LocaleDefInstance().setLocaleDef(localeDef);
}

export default TimeFormats;
