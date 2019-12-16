import { utcFormat, timeFormat, timeFormatLocale } from 'd3-time-format';
import { utcUtils, localTimeUtils } from '../utils';
import TimeFormatter from '../TimeFormatter';
import { getLocaleDef } from '../TimeFormats';

type FormatsByStep = Partial<{
  millisecond: string;
  second: string;
  minute: string;
  hour: string;
  day: string;
  week: string;
  month: string;
  year: string;
}>;

export default function createMultiFormatter({
  id,
  label,
  description,
  formats = {},
  useLocalTime = false,
}: {
  id: string;
  label?: string;
  description?: string;
  formats?: FormatsByStep;
  useLocalTime?: boolean;
}) {
  const {
    millisecond = '.%L',
    second = ':%S',
    minute = '%I:%M',
    hour = '%I %p',
    day = '%a %d',
    week = '%b %d',
    month = '%B',
    year = '%Y',
  } = formats;

  let format: (specifier: string) => (date: Date) => string;
  if (typeof getLocaleDef() === 'undefined') {
    format = useLocalTime ? timeFormat : utcFormat;
  } else {
    const localeObject = timeFormatLocale(getLocaleDef());
    format = useLocalTime ? localeObject.format : localeObject.utcFormat;
  }

  // const format = useLocalTime ? timeFormat : utcFormat;

  const formatMillisecond = format(millisecond);
  const formatSecond = format(second);
  const formatMinute = format(minute);
  const formatHour = format(hour);
  const formatDay = format(day);
  const formatFirstDayOfWeek = format(week);
  const formatMonth = format(month);
  const formatYear = format(year);

  const {
    hasMillisecond,
    hasSecond,
    hasMinute,
    hasHour,
    isNotFirstDayOfMonth,
    isNotFirstDayOfWeek,
    isNotFirstMonth,
  } = useLocalTime ? localTimeUtils : utcUtils;

  function multiFormatFunc(date: Date) {
    if (hasMillisecond(date)) {
      return formatMillisecond;
    } else if (hasSecond(date)) {
      return formatSecond;
    } else if (hasMinute(date)) {
      return formatMinute;
    } else if (hasHour(date)) {
      return formatHour;
    } else if (isNotFirstDayOfMonth(date)) {
      return isNotFirstDayOfWeek(date) ? formatDay : formatFirstDayOfWeek;
    } else if (isNotFirstMonth(date)) {
      return formatMonth;
    }

    return formatYear;
  }

  return new TimeFormatter({
    description,
    formatFunc: (date: Date) => multiFormatFunc(date)(date),
    id,
    label,
    useLocalTime,
  });
}
