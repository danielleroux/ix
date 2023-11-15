import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.439a7cb2.js";
import { d as dayjs_min, c as customParseFormat } from "./customParseFormat-24740b74.df7faf9e.js";
import "./_commonjsHelpers-5ec8f9b7.dcee6898.js";
const dateDropdownCss = ":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0.25rem 1rem}";
dayjs_min.extend(customParseFormat);
const CUSTOM_RANGE_LABEL = "Custom...";
const DateDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.format = "YYYY-MM-DD";
    this.range = true;
    this.from = null;
    this.to = null;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.initialSelectedDateRangeName = "";
    this.customRangeAllowed = true;
    this.dateRangeOptions = [];
    this.hideDatePicker = true;
    this.currentlySelectedDateRangeName = void 0;
    this.associatedDateRangeValue = void 0;
    this.savedDateRangeName = void 0;
    this.datePickerRange = void 0;
    this.triggerRef = void 0;
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
  }
  initialSelectedDateRangeNameChanged() {
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
  }
  updateSelectedDateRange(newDateRangeName) {
    const dateRangeOption = this.dateRangeOptions.find((option) => option.label === newDateRangeName);
    const selectedDateRangeName = dateRangeOption ? newDateRangeName : "No range set";
    if (dateRangeOption) {
      this.setSelectedDateRange(newDateRangeName, dateRangeOption.getValue);
    }
    this.savedDateRangeName = selectedDateRangeName;
  }
  associatedDateRangeValueChanged() {
    this.savedDateRangeName = this.currentlySelectedDateRangeName;
    this.dateRangeChange.emit(this.associatedDateRangeValue);
    this.closeDropdown();
  }
  async getDateRange() {
    return this.associatedDateRangeValue;
  }
  setSelectedDateRange(dateRangeName, getDateRange) {
    this.currentlySelectedDateRangeName = dateRangeName;
    if (dateRangeName !== CUSTOM_RANGE_LABEL) {
      const { from, to } = getDateRange();
      this.associatedDateRangeValue = {
        from: from ? from.format(this.format) : void 0,
        to: to ? to.format(this.format) : void 0
      };
    } else {
      this.hideDatePicker = false;
    }
  }
  closeDropdown() {
    this.hostElement.shadowRoot.querySelector("ix-dropdown").show = false;
  }
  reInitializeValuesOnDropdownOpen(e) {
    if (this.savedDateRangeName !== CUSTOM_RANGE_LABEL) {
      this.hideDatePicker = true;
    }
    if (e.detail === true) {
      if (this.savedDateRangeName != this.currentlySelectedDateRangeName) {
        this.currentlySelectedDateRangeName = this.savedDateRangeName;
      }
    }
  }
  render() {
    return h(Host, null, h("ix-dropdown-button", { label: this.savedDateRangeName === CUSTOM_RANGE_LABEL ? this.associatedDateRangeValue.from + " \u2014 " + this.associatedDateRangeValue.to : this.savedDateRangeName, variant: "primary", icon: "history", ref: (ref) => this.triggerRef = ref, class: "button-width" }), h("ix-dropdown", { class: "min-width max-height", trigger: this.triggerRef, "close-behavior": "outside", placement: "bottom-start", onShowChanged: (e) => this.reInitializeValuesOnDropdownOpen(e) }, h("ix-layout-grid", { "no-margin": "true" }, h("ix-row", null, h("ix-col", { class: "no-margin border-right" }, this.dateRangeOptions.map((dateRangeOption) => h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.setSelectedDateRange(dateRangeOption.label, dateRangeOption.getValue), checked: this.currentlySelectedDateRangeName === dateRangeOption.label })), h("div", { hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { label: CUSTOM_RANGE_LABEL, checked: this.currentlySelectedDateRangeName === CUSTOM_RANGE_LABEL, onClick: (e) => {
      this.setSelectedDateRange(CUSTOM_RANGE_LABEL, void 0);
      e.preventDefault();
    } }))), h("ix-col", { class: "no-margin", hidden: this.hideDatePicker }, h("ix-date-picker", { individual: false, onDateRangeChange: (e) => this.datePickerRange = e.detail, format: this.format, range: this.range, from: this.from, to: this.to, minDate: this.minDate, maxDate: this.maxDate }), h("div", { class: "pull-right" }, h("ix-button", { onClick: () => {
      this.associatedDateRangeValue = this.datePickerRange;
    } }, "Done")))))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "dateRangeOptions": ["initialSelectedDateRangeNameChanged"],
      "initialSelectedDateRangeName": ["initialSelectedDateRangeNameChanged"],
      "associatedDateRangeValue": ["associatedDateRangeValueChanged"]
    };
  }
};
DateDropdown.style = dateDropdownCss;
export {
  DateDropdown as ix_date_dropdown
};
