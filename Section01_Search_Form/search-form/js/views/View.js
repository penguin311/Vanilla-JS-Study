import { emit, on } from "../helpers.js";

const tag = "[View]";

export default class View {
  constructor(element) {
    if (!element) throw "no element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  //원래의 display 로 복구하는 역할
  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    emit(this.element, eventName, data);
    return this;
  }
}
