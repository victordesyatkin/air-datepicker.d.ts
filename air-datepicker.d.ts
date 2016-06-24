declare interface DatepickerOptions 
{
    classes?: string;
    inline?: boolean;
    language?: string;
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
    navTitles?: {days?: string; months?: string; years?: string;};
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

    onSelect?: (formattedDate: string, date: Date, inst: DatepickerInstance) => void;
    onChangeMonth?: ( month: number, year: number) => void;
    onChangeYear?: ( year: number) => void;
    onChangeDecade?: ( decade: number[]) => void;
    onChangeView?: ( view: "days" | "months" | "years") => void;
    onRenderCell?: ( date: Date, cellType: "day" | "month" | "year") => void;
}

declare interface DatepickerEventObject extends JQueryEventObject 
{
    date: Date;
    format(format?: string): string;
}

declare interface DatepickerInstance
{
    show(): DatepickerInstance;
    hide(): DatepickerInstance;
    next(): DatepickerInstance;
    prev(): DatepickerInstance;
    selectDate(date: Date): DatepickerInstance;
    removeDate(date: Date): DatepickerInstance;
    clear(): DatepickerInstance
    update(field: string): DatepickerInstance
    update(options: DatepickerOptions): DatepickerInstance;
}

declare interface DatepickerStatic
{
    (): JQuery;
    (options: DatepickerOptions): JQuery;
}

declare interface JQuery
{
    datepicker: DatepickerStatic;
    data(type: "datepicker"): DatepickerInstance; 
}

declare interface JQueryEventObject
{

}

declare interface JQuery
{
    datepicker: DatepickerStatic;
}