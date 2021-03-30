declare interface AirDatepickerOptions {
  classes?: string;
  inline?: boolean;
  language?: string | AirDatepickerLanguageInstance;
  startDate?: Date;
  firstDay?: number;
  weekends?: number[];
  dateFormat?: string;
  altField?: string | JQuery;
  altFieldDateFormat?: string;
  toggleSelected?: boolean;
  keyboardNav?: boolean;
  position?: string;
  offset?: number;
  view?: "days" | "months" | "years";
  minView?: "days" | "months" | "years";
  showOtherMonths?: boolean;
  selectOtherMonths?: boolean;
  moveToOtherMonthsOnSelected?: boolean;
  showOtherYears?: boolean;
  selectOtherYears?: boolean;
  moveToOtherYearsOnSelected?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disableNavWhenOutOfRange?: boolean;
  multipleDates?: boolean | number;
  multipleDatesSeparator?: string;
  range?: boolean;
  todayButton?: boolean | Date;
  clearButton?: boolean;
  showEvent?: string;
  autoClose?: boolean;
  prevHtml?: string;
  nextHtml?: string;
  navTitles?: { days?: string; months?: string; years?: string };
  monthsField?: string;
  timepicker?: boolean;
  dateTimeSeparator?: string;
  timeFormat?: string;
  minHours?: number;
  maxHours?: number;
  minMinutes?: number;
  maxMinutes?: number;
  hoursStep?: number;
  minutesStep?: number;

  onSelect?: (
    formattedDate: string,
    date: Date,
    inst: AirDatepickerInstance
  ) => void;
  onChangeMonth?: (month: number, year: number) => void;
  onChangeYear?: (year: number) => void;
  onChangeDecade?: (decade: number[]) => void;
  onChangeView?: (
    view: "days" | "months" | "years",
    inst: AirDatepickerInstance
  ) => void;
  onRenderCell?: (date: Date, cellType: "day" | "month" | "year") => void;
}

declare interface AirDatepickerEventObject extends JQueryEventObject {
  date: Date;
  format(format?: string): string;
}

declare interface AirDatepickerLanguageInstance {
  days: string[];
  daysShort: string[];
  daysMin: string[];
  months: string[];
  monthsShort: string[];
  today: string;
  clear: string;
  dateFormat: string;
  timeFormat: string;
  firstDay: number;
}

declare interface AirDatepickerInstance {
  selectedDates: Date[];
  show(): AirDatepickerInstance;
  hide(): AirDatepickerInstance;
  next(): AirDatepickerInstance;
  prev(): AirDatepickerInstance;
  selectDate(date: Partial<Date[]>): AirDatepickerInstance;
  removeDate(date: Date): AirDatepickerInstance;
  clear(): AirDatepickerInstance;
  update(field: string): AirDatepickerInstance;
  update(options: AirDatepickerOptions): AirDatepickerInstance;
  formatDate(format: string, date: Date): string;
  destroy(): void;
}

declare interface AirDatepickerStatic {
  (): JQuery;
  (options: AirDatepickerOptions): JQuery;
}

declare interface JQuery {
  datepicker: AirDatepickerStatic;
  data(type: "datepicker"): AirDatepickerInstance;
}

declare interface JQueryEventObject {}

declare interface JQuery {
  datepicker: AirDatepickerStatic;
}
