import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.439a7cb2.js";
import { l as luxon } from "./luxon-5e3f1b6f.9d732001.js";
import "./_commonjsHelpers-5ec8f9b7.dcee6898.js";
const datePickerCss = ":host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .fontSize{font-size:16px}:host .selector .capitalize{text-transform:capitalize}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .wrapper{display:flex}:host .wrapper .overflow{overflow-y:scroll;max-height:250px}:host .grid{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default;pointer-events:none}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-ix--color);border:none;background:none;cursor:initial}:host .grid .calendar-item:focus-visible{background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}:host .button{display:flex;justify-content:flex-end}:host .hidden{display:none}";
const DatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.done = createEvent(this, "done", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.daysInWeek = 7;
    this.dayNames = luxon.Info.weekdays();
    this.monthNames = luxon.Info.months();
    this.format = "yyyy/LL/dd";
    this.range = true;
    this.individual = true;
    this.corners = "rounded";
    this.from = luxon.DateTime.now().toFormat(this.format);
    this.to = null;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.eventDelimiter = " - ";
    this.textSelectDate = "Done";
    this.yearValue = this.year;
    this.today = luxon.DateTime.now();
    this.monthValue = this.month;
    this.calendar = [];
    this.years = [...Array(10).keys()].map((year) => year + this.year - 5);
    this.tempYear = this.yearValue;
    this.tempMonth = this.monthValue;
    this.start = luxon.DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day
    });
    this.end = this.to ? luxon.DateTime.fromFormat(this.to, this.format) : null;
    this.dropdownButtonRef = void 0;
    this.yearContainerRef = void 0;
  }
  get year() {
    if (this.from !== null) {
      return luxon.DateTime.fromFormat(this.from, this.format).year;
    }
    return luxon.DateTime.now().year;
  }
  get day() {
    if (this.from !== null) {
      return luxon.DateTime.fromFormat(this.from, this.format).day;
    }
    return null;
  }
  get month() {
    if (this.from !== null) {
      return luxon.DateTime.fromFormat(this.from, this.format).month;
    }
    return luxon.DateTime.now().month;
  }
  onDone() {
    var _a, _b;
    this.done.emit(this.getOutputFormat());
    this.dateSelect.emit({
      from: (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format),
      to: (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format)
    });
  }
  onDateChange() {
    var _a, _b;
    const from = (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format);
    const to = (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format);
    this.from = from;
    this.to = to;
    if (this.eventDelimiter) {
      this.dateChange.emit(this.getOutputFormat());
    } else {
      this.dateChange.emit({
        from,
        to
      });
    }
    if (this.range) {
      this.dateRangeChange.emit({
        from,
        to
      });
    }
  }
  getStartOfMonth(year = luxon.DateTime.local().get("year"), month = luxon.DateTime.local().get("month")) {
    return luxon.DateTime.local(year, month).startOf("month");
  }
  getEndOfMonth(year = luxon.DateTime.local().get("year"), month = luxon.DateTime.local().get("month")) {
    return luxon.DateTime.local(year, month).endOf("month");
  }
  getDaysInMonth(start = this.getStartOfMonth(), end = this.getEndOfMonth()) {
    return Math.ceil(end.diff(start, "days").days);
  }
  calculateCalendar() {
    const start = this.getStartOfMonth(this.yearValue, this.monthValue);
    const end = this.getEndOfMonth(this.yearValue, this.monthValue);
    const totalDays = this.getDaysInMonth(start, end);
    const totalWeeks = 6;
    const totalDaysInWeeks = totalWeeks * this.daysInWeek;
    const startWeekDay = start.weekday;
    const prependDays = startWeekDay - 1;
    const appendDays = totalDaysInWeeks - totalDays - prependDays;
    let weekdays = [];
    const calendar = [];
    let days = [...new Array(totalDaysInWeeks).keys()].map((day) => day + 1);
    days.unshift(...new Array(prependDays));
    days = days.slice(0, days.length - prependDays - appendDays);
    days.push(...new Array(appendDays));
    weekdays = days.reduce((result, item, index) => {
      const weekIndex = Math.floor(index / this.daysInWeek);
      if (!result[weekIndex])
        result[weekIndex] = [];
      result[weekIndex].push(item);
      return result;
    }, []);
    for (let index = 1; index <= totalWeeks; index++) {
      const week = weekdays[index - 1];
      const firstWeekDay = week.find((day) => day !== void 0);
      const weekNumber = firstWeekDay ? luxon.DateTime.local(this.yearValue, this.monthValue, weekdays[index - 1][0]).weekNumber : void 0;
      calendar.push([weekNumber, week]);
    }
    this.calendar = calendar;
  }
  changeMonth(number) {
    if (this.monthValue + number < 1) {
      this.yearValue--;
      this.monthValue = 12;
    } else if (this.monthValue + number > 12) {
      this.yearValue++;
      this.monthValue = 1;
    } else {
      this.monthValue += number;
    }
    this.calculateCalendar();
  }
  selectMonth(month) {
    this.monthValue = month;
    this.yearValue = this.tempYear;
    this.tempMonth = month;
    this.hostElement.shadowRoot.querySelector("ix-dropdown").show = false;
  }
  infiniteScrollYears() {
    const scroll = this.yearContainerRef.scrollTop;
    const maxScroll = this.yearContainerRef.scrollHeight;
    const atTop = scroll === 0;
    const atBottom = scroll + this.yearContainerRef.getBoundingClientRect().height === maxScroll;
    const limit = 200;
    if (this.years.length > limit)
      return;
    if (atTop) {
      this.years = [
        ...[...Array(5).keys()].map((year) => year + this.years[0] - 5),
        ...this.years
      ];
      this.yearContainerRef.scroll({ behavior: "smooth", top: scroll + 100 });
    }
    if (atBottom) {
      this.years = [
        ...this.years,
        ...[...Array(5).keys()].map((year) => year + this.years[this.years.length - 1])
      ];
      this.yearContainerRef.scroll({ behavior: "smooth", top: scroll - 50 });
    }
  }
  selectTempYear(event, year) {
    event.stopPropagation();
    this.tempYear = year;
  }
  getDayClasses(day) {
    var _a, _b;
    if (!day) {
      return;
    }
    const todayLocal = luxon.DateTime.local();
    const dayLocal = luxon.DateTime.local(this.yearValue, this.monthValue, day);
    const dayIso = dayLocal.toISO();
    const startIso = (_a = this.start) === null || _a === void 0 ? void 0 : _a.toISO();
    const endIso = (_b = this.end) === null || _b === void 0 ? void 0 : _b.toISO();
    const isToday = Math.ceil(dayLocal.diff(todayLocal, "days").days) === 0;
    return {
      "calendar-item": true,
      "empty-day": day === void 0,
      today: isToday,
      selected: this.start && dayIso === startIso || this.end && dayIso === endIso,
      range: this.start && this.end && dayIso > startIso && dayIso < endIso,
      disabled: !this.isWithinMinMax(dayLocal)
    };
  }
  selectDay(day) {
    const date = luxon.DateTime.local(this.yearValue, this.monthValue, day);
    const isStartBeforeEnd = this.start && this.start.toISO() < date.toISO();
    const isSameDay = this.start && !this.end && this.start.toISO() === date.toISO();
    if (day === void 0)
      return;
    if (isSameDay) {
      this.start = null;
      this.onDateChange();
      return;
    }
    if (this.range) {
      if (this.start === null) {
        this.start = date;
      } else if (this.end === null) {
        if (isStartBeforeEnd) {
          this.end = date;
        } else {
          this.end = this.start;
          this.start = date;
        }
      } else {
        this.start = date;
        this.end = null;
      }
    } else {
      this.start = date;
    }
    this.onDateChange();
  }
  getOutputFormat() {
    if (!this.start) {
      return null;
    }
    if (!this.end) {
      return this.start.toFormat(this.format);
    }
    return [
      this.start.toFormat(this.format),
      this.end.toFormat(this.format)
    ].join(this.eventDelimiter);
  }
  isWithinMinMax(date) {
    const dateIso = date.toISO();
    const _minDate = this.minDate ? luxon.DateTime.fromFormat(this.minDate, this.format) : null;
    const _maxDate = this.maxDate ? luxon.DateTime.fromFormat(this.maxDate, this.format) : null;
    return (!_minDate || _minDate.toISO() <= dateIso) && (!_maxDate || _maxDate.toISO() >= dateIso);
  }
  componentWillLoad() {
    if (this.from === null) {
      this.start = null;
    }
    if (this.year !== null) {
      this.yearValue = this.year;
    }
    if (this.month) {
      this.monthValue = this.month;
    }
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  async getCurrentDate() {
    var _a, _b;
    return {
      start: (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format),
      end: (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format)
    };
  }
  render() {
    return h(Host, null, h("ix-date-time-card", { individual: this.individual, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("ix-icon-button", { onClick: () => this.changeMonth(-1), ghost: true, icon: "chevron-left", variant: "primary", class: "arrows" }), h("div", { class: "selector" }, h("ix-button", { ghost: true, ref: (ref) => this.dropdownButtonRef = ref }, h("span", { class: "fontSize capitalize" }, this.monthNames[this.monthValue - 1], " ", this.yearValue)), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom-start" }, h("div", { class: "wrapper" }, h("div", { class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => this.yearContainerRef = ref }, this.years.map((year) => h("div", { key: year, class: { arrowYear: true }, onClick: (event) => this.selectTempYear(event, year) }, h("ix-icon", { class: {
      hidden: this.tempYear !== year,
      arrowPosition: true
    }, name: "chevron-right", size: "12" }), h("div", { style: { "min-width": "max-content" } }, `${year}`)))), h("div", { class: "overflow" }, this.monthNames.map((month, index) => h("div", { key: month, class: {
      arrowYear: true,
      selected: this.tempMonth - 1 === index
    }, onClick: () => this.selectMonth(index + 1) }, h("ix-icon", { class: {
      hidden: this.tempMonth - 1 !== index,
      checkPosition: true
    }, name: "single-check", size: "16" }), h("div", null, h("span", { class: { capitalize: true, monthMargin: true } }, `${month} ${this.tempYear}`)))))))), h("ix-icon-button", { onClick: () => this.changeMonth(1), ghost: true, icon: "chevron-right", variant: "primary", class: "arrows" })), h("div", { class: "grid" }, h("div", { class: "calendar-item week-day" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3))), this.calendar.map((week) => {
      return h(Fragment, null, h("div", { class: "calendar-item week-number" }, week[0]), week[1].map((day) => h("div", { key: day, class: this.getDayClasses(day), onClick: () => this.selectDay(day) }, day)));
    })), h("div", { class: { button: true, hidden: !this.individual || !this.range } }, h("ix-button", { onClick: () => this.onDone() }, this.textSelectDate))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DatePicker.style = datePickerCss;
export {
  DatePicker as ix_date_picker
};
