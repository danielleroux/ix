import { r as registerInstance, c as createEvent, h, H as Host } from "./index.439a7cb2.js";
import { l as luxon } from "./luxon-5e3f1b6f.9d732001.js";
import "./_commonjsHelpers-5ec8f9b7.dcee6898.js";
const timePickerCss = `label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input,input:-webkit-autofill{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-input--background) inset !important;-webkit-text-fill-color:var(--theme-input--color) !important;border-color:var(--theme-input--border-color) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover,input:hover{border-color:var(--theme-input--border-color--hover);background-color:var(--theme-input--background--hover)}input.focus,input:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus)}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder{color:transparent}input:disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{height:3.25rem;padding:0.375rem 1.25rem 0.375rem 0.5rem}textarea,textarea:-webkit-autofill{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-input--background) inset !important;-webkit-text-fill-color:var(--theme-input--color) !important;border-color:var(--theme-input--border-color) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover,textarea:hover{border-color:var(--theme-input--border-color--hover);background-color:var(--theme-input--background--hover)}textarea.focus,textarea:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus)}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder{color:transparent}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}:host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .form-control,:host .form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}:host .form-control::-moz-placeholder,:host .form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}:host .form-control::placeholder,:host .form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}:host .form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,:host .form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}:host .form-control:focus-visible{color:var(--theme-input--color)}:host .form-control[type=number]{text-align:right}:host .form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .form-control.readonly,:host .form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host .form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only,:host .form-control[readonly],:host .form-control[readOnly],:host .form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}:host .form-control:read-only::-moz-placeholder,:host .form-control[readonly]::-moz-placeholder,:host .form-control[readOnly]::-moz-placeholder,:host .form-control.readonly::-moz-placeholder{color:transparent}:host .form-control:-moz-read-only::placeholder{color:transparent}:host .form-control:read-only::placeholder,:host .form-control[readonly]::placeholder,:host .form-control[readOnly]::placeholder,:host .form-control.readonly::placeholder{color:transparent}:host .form-control:disabled,:host .form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}:host .form-control:disabled::-moz-placeholder,:host .form-control.disabled::-moz-placeholder{color:transparent}:host .form-control:disabled::placeholder,:host .form-control.disabled::placeholder{color:transparent}:host .form-control-plaintext{outline:0}:host .form-group{position:relative}:host .input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}:host .input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}:host .input-wrapper>input{padding-inline-start:2.2rem}:host select.form-control{padding:0 0.312rem}:host textarea.form-control{padding:0.375rem 0.5rem}:host input.disabled,:host input:disabled{color:var(--theme-input--color--disabled)}:host input:-moz-read-only{cursor:default}:host input:read-only,:host input.readonly{cursor:default}:host .header{display:flex;align-items:center;justify-content:center;height:2.5rem}:host .clock{display:flex;justify-content:center;align-items:center;padding:4.25rem 0}:host input,:host .time-reference{width:2.625rem;height:1.5rem;text-align:center;margin-top:0.25rem;margin-bottom:0.25rem;}:host input::-webkit-outer-spin-button,:host input::-webkit-inner-spin-button,:host .time-reference::-webkit-outer-spin-button,:host .time-reference::-webkit-inner-spin-button{-webkit-appearance:none;margin:0 0.3125rem}:host input[type=number],:host .time-reference[type=number]{-moz-appearance:textfield}:host .form-control[type=number]{text-align:center}:host .columns{display:flex;flex-direction:column;align-items:center;justify-content:space-around}:host .column-seperator{display:flex;align-items:center;margin:0 0.25rem}:host .button{display:flex;justify-content:flex-end}:host .default-space{margin-left:1rem}:host .text-align{text-align:center}:host .hidden{display:none}:host .time-reference{margin-top:0.5rem;margin-bottom:0.5rem}`;
const TimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this._time = luxon.DateTime.now();
    this.format = "TT";
    this.corners = "rounded";
    this.individual = true;
    this.showHour = false;
    this.showMinutes = false;
    this.showSeconds = false;
    this.time = luxon.DateTime.now().toFormat(this.format);
    this.showTimeReference = void 0;
    this.timeReference = luxon.DateTime.fromFormat(this.time, this.format).toFormat("a");
    this.textSelectTime = "Done";
    this.hourInputRef = void 0;
    this.minuteInputRef = void 0;
    this.secondInputRef = void 0;
    this.referenceInputRef = void 0;
  }
  get hour() {
    return this._time.hour;
  }
  get minutes() {
    return this._time.minute;
  }
  get seconds() {
    return this._time.second;
  }
  setInputValue(inputElement, value, max) {
    if (value > max) {
      inputElement.value = max.toString();
    } else if (value < 0) {
      inputElement.value = "0";
    } else {
      inputElement.value = value.toString();
    }
    this.updateAndEmitTime();
  }
  updateAndEmitTime() {
    this._time = this._time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value)
    });
    this.setHourAccordingToReference();
    this.emitTimeChange();
  }
  toggleInputValue(inputElement, currentValue, step, max) {
    if (step === "up") {
      if (currentValue === max) {
        inputElement.value = "0";
      } else {
        inputElement.stepUp();
      }
    } else {
      if (currentValue === 0) {
        inputElement.value = max.toString();
      } else {
        inputElement.stepDown();
      }
    }
  }
  toggleHourInputWithRef(inputElement, currentValue, step) {
    if (step === "up") {
      if (currentValue === this.getMaxHour()) {
        inputElement.value = "0";
      } else {
        inputElement.stepUp();
      }
    } else {
      if (this.showTimeReference && this.timeReference === "PM" && currentValue === 12 || currentValue === 0) {
        inputElement.value = this.getMaxDisplayedHour().toString();
      } else {
        inputElement.stepDown();
      }
    }
  }
  updateInput(step, { hours = void 0, minutes = void 0, seconds = void 0 }) {
    if (hours) {
      if (this.showTimeReference) {
        this.toggleHourInputWithRef(this.hourInputRef, this.hour, step);
      } else {
        this.toggleInputValue(this.hourInputRef, this.hour, step, 23);
      }
    }
    if (minutes) {
      this.toggleInputValue(this.minuteInputRef, this.minutes, step, 59);
    }
    if (seconds) {
      this.toggleInputValue(this.secondInputRef, this.seconds, step, 59);
    }
    this.updateAndEmitTime();
  }
  changeReference() {
    if (this.timeReference === "AM") {
      this.timeReference = "PM";
    } else {
      this.timeReference = "AM";
    }
    this.setHourAccordingToReference();
    this.emitTimeChange();
  }
  setHourAccordingToReference() {
    if (!this.showTimeReference) {
      return;
    }
    let hour = Number(this.hourInputRef.value);
    if (this.timeReference === "PM")
      hour += 12;
    this._time = this._time.set({ hour });
  }
  emitTimeChange() {
    const time = this._time.toFormat(this.format);
    this.timeChange.emit(time);
  }
  componentWillLoad() {
    this._time = luxon.DateTime.fromFormat(this.time, this.format);
    if (this.showTimeReference === void 0) {
      const matchedKeys = Object.keys(luxon.DateTime.fromFormatExplain(this.time, this.format).matches);
      this.showTimeReference = matchedKeys.includes("a");
    }
  }
  async getCurrentTime() {
    return this._time.toFormat(this.format);
  }
  getDisplayedHour() {
    if (this.showTimeReference && this.timeReference === "PM") {
      return this._time.hour - 12;
    }
    return this._time.hour;
  }
  getMaxDisplayedHour() {
    if (this.showTimeReference) {
      return 11;
    }
    return 23;
  }
  getMaxHour() {
    if (this.showTimeReference && this.timeReference === "AM") {
      return 11;
    }
    return 23;
  }
  render() {
    let hideHour = !this.showHour;
    let hideMinutes = !this.showMinutes;
    let hideSeconds = !this.showSeconds;
    const hideTimeReference = !this.showTimeReference;
    const hideIndividual = !this.individual;
    if (hideHour && hideMinutes && hideSeconds) {
      hideHour = false;
      hideMinutes = false;
      hideSeconds = false;
    }
    const hideHourSeperator = hideMinutes || hideHour;
    const hideMinutesSeperator = hideSeconds || hideMinutes;
    return h(Host, null, h("ix-date-time-card", { individual: this.individual, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("ix-typography", { variant: "default-title" }, "Time")), h("div", { class: "clock" }, h("div", { class: { columns: true, hidden: hideHour } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput("up", { hours: true }), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: "hours", type: "number", placeholder: "HH", min: "0", max: this.getMaxDisplayedHour(), value: this.getDisplayedHour(), ref: (ref) => this.hourInputRef = ref, onChange: () => this.setInputValue(this.hourInputRef, Number(this.hourInputRef.value), this.getMaxDisplayedHour()) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput("down", { hours: true }), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), h("div", { class: { "column-seperator": true, hidden: hideHourSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideMinutes } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput("up", { minutes: true }), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: "minutes", type: "number", placeholder: "MM", min: "0", max: "59", value: this.minutes, ref: (ref) => this.minuteInputRef = ref, onChange: () => this.setInputValue(this.minuteInputRef, Number(this.minuteInputRef.value), 59) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput("down", { minutes: true }), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), h("div", { class: { "column-seperator": true, hidden: hideMinutesSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideSeconds } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput("up", { seconds: true }), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("input", { class: "form-control", name: "seconds", type: "number", placeholder: "SS", min: "0", max: "59", value: this.seconds, ref: (ref) => this.secondInputRef = ref, onChange: () => this.setInputValue(this.secondInputRef, Number(this.secondInputRef.value), 59) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput("down", { seconds: true }), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" })), h("div", { class: {
      columns: true,
      "default-space": true,
      hidden: hideTimeReference
    } }, h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-up", variant: "primary", class: "arrows" }), h("div", { class: "time-reference" }, this.timeReference), h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-down", variant: "primary", class: "arrows" }))), h("div", { class: { button: true, hidden: hideIndividual } }, h("ix-button", { onClick: () => this.done.emit(this._time.toFormat(this.format)) }, this.textSelectTime))));
  }
};
TimePicker.style = timePickerCss;
export {
  TimePicker as ix_time_picker
};
