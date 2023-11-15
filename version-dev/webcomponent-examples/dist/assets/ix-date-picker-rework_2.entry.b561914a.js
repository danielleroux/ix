import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.439a7cb2.js";
import { d as dayjs_min, c as customParseFormat } from "./customParseFormat-24740b74.df7faf9e.js";
import { c as createCommonjsModule, a as commonjsGlobal } from "./_commonjsHelpers-5ec8f9b7.dcee6898.js";
import { O as OnListener } from "./listener-421d39bd.c044e68c.js";
var isLeapYear = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
});
var isoWeeksInYear = createCommonjsModule(function(module, exports) {
  !function(e, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    return function(e, n) {
      n.prototype.isoWeeksInYear = function() {
        var e2 = this.isLeapYear(), n2 = this.endOf("y").day();
        return 4 === n2 || e2 && 5 === n2 ? 53 : 52;
      };
    };
  });
});
var localeData = createCommonjsModule(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u = function(n2, e2, t2, r2, u2) {
        var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
          return n3.slice(0, r2);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e3) {
          return f[(e3 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u(i(), "months");
      }, t.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
});
var weekday = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekday = function(e2) {
        var t2 = this.$locale().weekStart || 0, i = this.$W, n = (i < t2 ? i + 7 : i) - t2;
        return this.$utils().u(e2) ? n : this.subtract(n, "day").add(e2, "day");
      };
    };
  });
});
var weekOfYear = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (void 0 === i2 && (i2 = null), null !== i2)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
          if (f2.isBefore(s))
            return 1;
        }
        var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e2) {
        return void 0 === e2 && (e2 = null), this.week(e2);
      };
    };
  });
});
const datePickerReworkCss = ":host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .fontSize{font-size:16px}:host .selector .capitalize{text-transform:capitalize}:host .selector .month-dropdown-item{margin-left:4px;margin-right:4px}:host .selector .month-dropdown-item:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .wrapper{display:flex}:host .wrapper .overflow{overflow-y:scroll;max-height:250px}:host .grid{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-weekday--color);border:none;background:none;cursor:initial}:host .grid .calendar-item:focus-visible{background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}:host .button{display:flex;justify-content:flex-end}:host .hidden{display:none}";
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
dayjs_min.extend(customParseFormat);
dayjs_min.extend(isoWeeksInYear);
dayjs_min.extend(isLeapYear);
dayjs_min.extend(localeData);
dayjs_min.extend(weekday);
dayjs_min.extend(weekOfYear);
const DatePickerRework = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.DAYS_IN_WEEK = 7;
    this.format = "YYYY/MM/DD";
    this.range = true;
    this.corners = "rounded";
    this.from = void 0;
    this.to = void 0;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.textSelectDate = "Done";
    this.weekStartIndex = 0;
    this.dayJsLocale = void 0;
    this.standaloneAppearance = true;
    this.currFromDate = void 0;
    this.currToDate = void 0;
    this.selectedYear = void 0;
    this.tempYear = void 0;
    this.startYear = void 0;
    this.endYear = void 0;
    this.selectedMonth = void 0;
    this.tempMonth = void 0;
    this.dropdownButtonRef = void 0;
    this.yearContainerRef = void 0;
    this.dayNames = void 0;
    this.monthNames = void 0;
    this.firstMonthRef = void 0;
    this.focusedDay = 1;
    this.focusedDayElem = void 0;
  }
  watchFromPropHandler(newValue) {
    var _a;
    this.currFromDate = newValue ? dayjs_min(newValue, this.format, true) : void 0;
    if ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid()) {
      this.selectedYear = this.currFromDate.year();
      this.selectedMonth = this.currFromDate.month();
    }
  }
  watchToPropHandler(newValue) {
    var _a;
    this.currToDate = newValue ? dayjs_min(newValue, this.format, true) : void 0;
    if ((_a = this.currToDate) === null || _a === void 0 ? void 0 : _a.isValid()) {
      this.selectedYear = this.currToDate.year();
      this.selectedMonth = this.currToDate.month();
    }
  }
  watchDayJsLocalePropHandler(newValue) {
    dayjs_min.locale(newValue);
    this.setTranslations();
  }
  async getCurrentDate() {
    var _a, _b, _c;
    const _from = ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid()) ? this.currFromDate.format(this.format) : void 0;
    const _to = ((_b = this.currToDate) === null || _b === void 0 ? void 0 : _b.isValid()) ? (_c = this.currToDate) === null || _c === void 0 ? void 0 : _c.format(this.format) : void 0;
    if (this.range) {
      return {
        from: _from,
        to: _to
      };
    }
    return {
      from: _from,
      to: void 0
    };
  }
  handleKeyUp(event) {
    if (!this.isDayFocus) {
      return;
    }
    let _focusedDay = this.focusedDay;
    switch (event.key) {
      case "ArrowLeft":
        _focusedDay--;
        break;
      case "ArrowRight":
        _focusedDay++;
        break;
      case "ArrowUp":
        _focusedDay = _focusedDay - 7;
        break;
      case "ArrowDown":
        _focusedDay = _focusedDay + 7;
        break;
      default:
        return;
    }
    if (_focusedDay > this.getDaysInCurrentMonth()) {
      _focusedDay = _focusedDay - this.getDaysInCurrentMonth();
      this.changeToAdjacentMonth(1);
      this.monthChangedFromFocus = true;
    } else if (_focusedDay < 1) {
      this.changeToAdjacentMonth(-1);
      _focusedDay = _focusedDay + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }
    this.focusedDay = _focusedDay;
  }
  getDaysInCurrentMonth() {
    return dayjs_min().month(this.selectedMonth).year(this.selectedYear).daysInMonth();
  }
  onDayBlur() {
    this.isDayFocus = false;
  }
  onDayFocus() {
    this.isDayFocus = true;
  }
  componentWillLoad() {
    var _a, _b, _c, _d;
    dayjs_min.locale(this.dayJsLocale);
    this.setTranslations();
    this.currFromDate = this.from !== void 0 ? dayjs_min(this.from, this.format, true) : void 0;
    this.currToDate = this.to !== void 0 ? dayjs_min(this.to, this.format, true) : void 0;
    const year = (_b = (_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.year()) !== null && _b !== void 0 ? _b : dayjs_min().year();
    this.startYear = year - 5;
    this.endYear = year + 5;
    this.selectedMonth = (_d = (_c = this.currFromDate) === null || _c === void 0 ? void 0 : _c.month()) !== null && _d !== void 0 ? _d : dayjs_min().month();
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  componentDidRender() {
    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }
    const dayElem = this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`);
    dayElem.focus();
  }
  setTranslations() {
    this.dayNames = this.rotateWeekDayNames(dayjs_min.weekdays(), this.weekStartIndex);
    this.monthNames = dayjs_min.months();
  }
  rotateWeekDayNames(weekdays, index) {
    const clone = [...weekdays];
    if (index === 0) {
      return clone;
    }
    index = -index;
    const len = weekdays.length;
    clone.push(...clone.splice(0, (-index % len + len) % len));
    return clone;
  }
  onDone() {
    this.getCurrentDate().then((date) => {
      this.dateSelect.emit(date);
    });
  }
  calculateCalendar() {
    const calendar = [];
    const month = dayjs_min().month(this.selectedMonth).year(this.selectedYear);
    const monthStart = month.startOf("month");
    const monthEnd = month.endOf("month");
    let startWeek = monthStart.week();
    let endWeek = monthEnd.week();
    let monthStartWeekDayIndex = monthStart.weekday();
    let monthEndWeekDayIndex = monthEnd.weekday();
    if (this.weekStartIndex !== 0) {
      const weekdays = dayjs_min.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday()];
      monthStartWeekDayIndex = this.dayNames.findIndex((d) => d === monthStartWeekDayName);
      const monthEndWeekDayName = weekdays[monthEnd.weekday()];
      monthEndWeekDayIndex = this.dayNames.findIndex((d) => d === monthEndWeekDayName);
    }
    let correctLastWeek = false;
    if (endWeek === 1) {
      endWeek = monthEnd.isoWeeksInYear() + 1;
      correctLastWeek = true;
    }
    let correctFirstWeek = false;
    if (startWeek === monthEnd.isoWeeksInYear()) {
      startWeek = 1;
      correctFirstWeek = true;
    }
    let currDayNumber = 1;
    for (let i = startWeek; i <= endWeek && currDayNumber <= 31; i++) {
      const daysArr = [];
      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        if (i === startWeek && j < monthStartWeekDayIndex || i === endWeek && j > monthEndWeekDayIndex) {
          daysArr.push(void 0);
        } else {
          daysArr.push(currDayNumber);
          currDayNumber++;
        }
      }
      calendar.push({
        weekNumber: i,
        dayNumbers: daysArr
      });
    }
    if (correctLastWeek) {
      calendar[calendar.length - 1].weekNumber = 1;
    }
    if (correctFirstWeek) {
      calendar[0].weekNumber = monthEnd.isoWeeksInYear();
    }
    this.calendar = calendar;
  }
  selectTempYear(event, year) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.tempYear = year;
  }
  focusMonth() {
    this.firstMonthRef.focus();
  }
  infiniteScrollYears() {
    const scroll = this.yearContainerRef.scrollTop;
    const maxScroll = this.yearContainerRef.scrollHeight;
    const atTop = scroll === 0;
    const atBottom = Math.round(scroll + this.yearContainerRef.offsetHeight) >= maxScroll;
    const limit = 200;
    if (this.endYear - this.startYear > limit)
      return;
    if (atTop) {
      const first = this.yearContainerRef.firstElementChild;
      this.startYear -= 5;
      this.yearContainerRef.scrollTo(0, first.offsetTop);
      return;
    }
    if (atBottom) {
      const last = this.yearContainerRef.lastElementChild;
      this.endYear += 5;
      this.yearContainerRef.scrollTo(0, last.offsetTop);
    }
  }
  selectMonth(month) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
    this.hostElement.shadowRoot.querySelector("ix-dropdown").show = false;
  }
  changeToAdjacentMonth(number) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }
  }
  selectDay(selectedDay) {
    const date = dayjs_min(new Date(this.selectedYear, this.selectedMonth, selectedDay));
    if (!this.range || this.currFromDate === void 0) {
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    if (this.currToDate !== void 0) {
      this.currFromDate = date;
      this.currToDate = void 0;
      this.onDateChange();
      return;
    }
    if (date.isBefore(this.currFromDate)) {
      this.currToDate = this.currFromDate;
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    this.currToDate = date;
    this.onDateChange();
  }
  onDateChange() {
    this.getCurrentDate().then((date) => {
      this.dateChange.emit(date);
      if (this.range) {
        this.dateRangeChange.emit(date);
      }
    });
  }
  getDayClasses(day) {
    var _a, _b;
    if (!day) {
      return;
    }
    const todayObj = dayjs_min();
    const selectedDayObj = dayjs_min(new Date(this.selectedYear, this.selectedMonth, day));
    return {
      "calendar-item": true,
      "empty-day": day === void 0,
      today: todayObj.isSame(selectedDayObj, "day"),
      selected: ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isSame(selectedDayObj, "day")) || ((_b = this.currToDate) === null || _b === void 0 ? void 0 : _b.isSame(selectedDayObj, "day")),
      range: selectedDayObj.isAfter(this.currFromDate, "day") && this.currToDate !== void 0 && selectedDayObj.isBefore(this.currToDate, "day"),
      disabled: !this.isWithinMinMaxDate(selectedDayObj)
    };
  }
  isWithinMinMaxYear(year) {
    const minDateYear = this.minDate ? dayjs_min(this.minDate, this.format, true).year() : void 0;
    const maxDateYear = this.maxDate ? dayjs_min(this.maxDate, this.format, true).year() : void 0;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxMonth(month) {
    const minDateObj = this.minDate ? dayjs_min(this.minDate, this.format, true) : void 0;
    const maxDateObj = this.maxDate ? dayjs_min(this.maxDate, this.format, true) : void 0;
    const minDateMonth = minDateObj === null || minDateObj === void 0 ? void 0 : minDateObj.month();
    const maxDateMonth = maxDateObj === null || maxDateObj === void 0 ? void 0 : maxDateObj.month();
    const isBefore = minDateMonth ? this.tempYear === minDateObj.year() && month < minDateMonth : false;
    const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year() && month > maxDateMonth : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxDate(date) {
    const _minDate = this.minDate ? dayjs_min(this.minDate, this.format, true) : void 0;
    const _maxDate = this.maxDate ? dayjs_min(this.maxDate, this.format, true) : void 0;
    const isBefore = _minDate ? date.isBefore(_minDate, "day") : false;
    const isAfter = _maxDate ? date.isAfter(_maxDate, "day") : false;
    return !isBefore && !isAfter;
  }
  renderYears() {
    const rows = [];
    for (let year = this.startYear; year <= this.endYear; year++) {
      rows.push(h("div", { key: year, class: {
        arrowYear: true,
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxYear(year)
      }, onClick: (event) => this.selectTempYear(event, year), onKeyUp: (event) => {
        if (event.key === "Enter") {
          this.selectTempYear(null, year);
          this.focusMonth();
        }
      }, tabIndex: 0 }, h("ix-icon", { class: {
        hidden: this.tempYear !== year,
        arrowPosition: true
      }, name: "chevron-right", size: "12" }), h("div", { style: { "min-width": "max-content" } }, `${year}`)));
    }
    return rows;
  }
  render() {
    return h(Host, null, h("ix-date-time-card", { corners: this.corners, standaloneAppearance: this.standaloneAppearance }, h("div", { class: "header", slot: "header" }, h("ix-icon-button", { onClick: () => this.changeToAdjacentMonth(-1), ghost: true, icon: "chevron-left", variant: "primary", class: "arrows" }), h("div", { class: "selector" }, h("ix-button", { ghost: true, ref: (ref) => this.dropdownButtonRef = ref }, h("span", { class: "fontSize capitalize" }, this.monthNames[this.selectedMonth], " ", this.selectedYear)), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom-start" }, h("div", { class: "wrapper" }, h("div", { class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => this.yearContainerRef = ref }, this.renderYears()), h("div", { class: "overflow" }, this.monthNames.map((month, index) => h("div", { key: month, ref: (ref) => {
      if (month === this.monthNames[0]) {
        this.firstMonthRef = ref;
      }
    }, class: {
      arrowYear: true,
      "month-dropdown-item": true,
      selected: this.tempYear === this.selectedYear && this.tempMonth === index,
      "disabled-item": !this.isWithinMinMaxMonth(index)
    }, onClick: () => this.selectMonth(index), onKeyUp: (event) => event.key === "Enter" && this.selectMonth(index), tabIndex: 0 }, h("ix-icon", { class: {
      hidden: this.tempYear !== this.selectedYear || this.tempMonth !== index,
      checkPosition: true
    }, name: "single-check", size: "16" }), h("div", null, h("span", { class: "capitalize monthMargin" }, `${month} ${this.tempYear}`)))))))), h("ix-icon-button", { onClick: () => this.changeToAdjacentMonth(1), ghost: true, icon: "chevron-right", variant: "primary", class: "arrows" })), h("div", { class: "grid" }, h("div", { class: "calendar-item week-day" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day" }, name.slice(0, 3))), this.calendar.map((week) => {
      return h(Fragment, null, h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => h("div", { key: day, id: `day-cell-${day}`, class: this.getDayClasses(day), onClick: () => this.selectDay(day), onKeyUp: (e) => e.key === "Enter" && this.selectDay(day), tabIndex: day === this.focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur() }, day)));
    })), h("div", { class: {
      button: true,
      hidden: !this.range || !this.standaloneAppearance
    } }, h("ix-button", { onClick: () => this.onDone() }, this.textSelectDate))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "from": ["watchFromPropHandler"],
      "to": ["watchToPropHandler"],
      "dayJsLocale": ["watchDayJsLocalePropHandler"]
    };
  }
};
__decorate([
  OnListener("keydown")
], DatePickerRework.prototype, "handleKeyUp", null);
DatePickerRework.style = datePickerReworkCss;
const timePickerReworkCss = `label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input,input:-webkit-autofill{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-input--background) inset !important;-webkit-text-fill-color:var(--theme-input--color) !important;border-color:var(--theme-input--border-color) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover,input:hover{border-color:var(--theme-input--border-color--hover);background-color:var(--theme-input--background--hover)}input.focus,input:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus)}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder{color:transparent}input:disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{height:3.25rem;padding:0.375rem 1.25rem 0.375rem 0.5rem}textarea,textarea:-webkit-autofill{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-input--background) inset !important;-webkit-text-fill-color:var(--theme-input--color) !important;border-color:var(--theme-input--border-color) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover,textarea:hover{border-color:var(--theme-input--border-color--hover);background-color:var(--theme-input--background--hover)}textarea.focus,textarea:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus)}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder{color:transparent}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}:host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .form-control,:host .form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}:host .form-control::-moz-placeholder,:host .form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}:host .form-control::placeholder,:host .form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:focus-visible{color:var(--theme-input--color)}:host .form-control[type=number]{text-align:right}:host .form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .form-control.readonly,:host .form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host .form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only,:host .form-control[readonly],:host .form-control[readOnly],:host .form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only::-moz-placeholder,:host .form-control[readonly]::-moz-placeholder,:host .form-control[readOnly]::-moz-placeholder,:host .form-control.readonly::-moz-placeholder{color:transparent}:host .form-control:-moz-read-only::placeholder{color:transparent}:host .form-control:read-only::placeholder,:host .form-control[readonly]::placeholder,:host .form-control[readOnly]::placeholder,:host .form-control.readonly::placeholder{color:transparent}:host .form-control:disabled,:host .form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}:host .form-control:disabled::-moz-placeholder,:host .form-control.disabled::-moz-placeholder{color:transparent}:host .form-control:disabled::placeholder,:host .form-control.disabled::placeholder{color:transparent}:host .form-control-plaintext{outline:0}:host .form-group{position:relative}:host .input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}:host .input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}:host .input-wrapper>input{padding-inline-start:2.2rem}:host select.form-control{padding:0 0.312rem}:host textarea.form-control{padding:0.375rem 0.5rem}:host input.disabled,:host input:disabled{color:var(--theme-input--color--disabled)}:host input:-moz-read-only{cursor:default}:host input:read-only,:host input.readonly{cursor:default}@media (max-width: 576px){:host .clock{padding:1.5rem 0}:host .header{height:1.5rem !important}}@media (min-width: 576px){:host .clock{padding:4.25rem 0}:host .header{height:2.5rem !important}}:host .header{display:flex;align-items:center;justify-content:center;height:2.5rem}:host .flex{display:flex}:host .clock{display:flex;justify-content:center;align-items:center}:host input,:host .time-reference{width:2.625rem;height:1.5rem;text-align:center;margin-top:0.25rem;margin-bottom:0.25rem;}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host .time-reference::-webkit-outer-spin-button,:host .time-reference::-webkit-inner-spin-button{-webkit-appearance:none;margin:0 0.3125rem}:host input[type=number],:host .time-reference[type=number]{-moz-appearance:textfield}:host .form-control[type=number]{text-align:center}:host .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .column-seperator{display:flex;align-items:center;margin:0 0.25rem}:host .button{display:flex;justify-content:flex-end}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}:host .hidden{display:none}:host .time-reference{margin-top:0.5rem;margin-bottom:0.5rem}`;
dayjs_min.extend(customParseFormat);
const TimePickerRework = class {
  watchTimePropHandler(newValue) {
    this._time = dayjs_min(newValue, this.format, true);
    if (!this._time.isValid()) {
      throw new Error("Format is not supported or not correct");
    }
  }
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeSelect = createEvent(this, "timeSelect", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.format = "HH:mm:ss";
    this.corners = "rounded";
    this.standaloneAppearance = true;
    this.showHours = true;
    this.showMinutes = true;
    this.showSeconds = true;
    this.time = dayjs_min().format(this.format);
    this.timeReference = void 0;
    this.textSelectTime = "Done";
    this._time = void 0;
    this._timeRef = void 0;
    this._formattedTime = void 0;
    this._time = dayjs_min(this.time, this.format);
    if (!this._time.isValid()) {
      console.error("Invalid time format. The configured format does not match the format of the passed time.");
      return;
    }
    this._timeRef = this.format.includes("A") ? dayjs_min(this.time, this.format).format("A") : void 0;
    this.formatTime();
  }
  formatTime() {
    const [hour, minutes, seconds] = this._time.format(this.format).split(" ")[0].split(":");
    this._formattedTime = {
      hours: hour,
      minutes,
      seconds
    };
  }
  onInternalTimeChange() {
    this.timeChange.emit(this._time.format(this.format));
    if (this._timeRef)
      this._timeRef = this._time.format("A");
  }
  timeUpdate(unit, value) {
    let maxValue = dayjs_min().endOf("day").get(unit);
    if (this._timeRef === "PM" && unit === "hours")
      value += 12;
    if (this._timeRef === "AM" && unit === "hours")
      maxValue = 12;
    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }
    this._time = this._time.set(unit, value);
    return value;
  }
  changeTimeReference() {
    this._timeRef = this._timeRef === "AM" ? "PM" : "AM";
    if (!this._time.format("A").includes(this._timeRef)) {
      this._time = this._time.add(12, "hour");
    }
  }
  async getCurrentTime() {
    return this._time.format(this.format);
  }
  render() {
    let timepickerInformation = [
      {
        unit: "hours",
        placeholder: "HH",
        hidden: !this.showHours
      },
      {
        unit: "minutes",
        placeholder: "MM",
        hidden: !this.showMinutes
      },
      {
        unit: "seconds",
        placeholder: "SS",
        hidden: !this.showSeconds
      }
    ];
    timepickerInformation = timepickerInformation.filter((item) => !item.hidden);
    return h(Host, null, h("ix-date-time-card", { standaloneAppearance: this.standaloneAppearance, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("ix-typography", { variant: "default-title" }, "Time")), h("div", { class: "clock" }, timepickerInformation.map((descriptor, index) => h("div", { class: "flex" }, h("div", { class: { columns: true, hidden: descriptor.hidden } }, h("ix-icon-button", { size: "16", onClick: () => this._time = this._time.add(1, descriptor.unit), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: descriptor.unit, type: "number", placeholder: descriptor.placeholder, value: this._formattedTime ? this._formattedTime[descriptor.unit] : null, onKeyDown: (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown")
        return;
      const value = e.key === "ArrowUp" ? 1 : -1;
      this._time = this._time.add(value, descriptor.unit);
      e.preventDefault();
    }, onChange: (e) => {
      let inputElement = e.target;
      inputElement.value = this.timeUpdate(descriptor.unit, +inputElement.value).toString();
    } }), h("ix-icon-button", { size: "16", onClick: () => this._time = this._time.subtract(1, descriptor.unit), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), index !== timepickerInformation.length - 1 && h("div", { class: {
      "column-seperator": true,
      hidden: descriptor.hidden
    } }, ":"))), h("div", { class: {
      columns: true,
      "default-space": true,
      hidden: this._timeRef === void 0
    } }, h("ix-icon-button", { size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("div", { class: "time-reference" }, this._timeRef), h("ix-icon-button", { size: "16", onClick: () => this.changeTimeReference(), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" }))), h("div", { class: { button: true, hidden: !this.standaloneAppearance } }, h("ix-button", { onClick: () => this.timeSelect.emit(this._time.format(this.format)) }, this.textSelectTime))));
  }
  static get watchers() {
    return {
      "time": ["watchTimePropHandler"],
      "_time": ["formatTime", "onInternalTimeChange"]
    };
  }
};
TimePickerRework.style = timePickerReworkCss;
export {
  DatePickerRework as ix_date_picker_rework,
  TimePickerRework as ix_time_picker_rework
};
