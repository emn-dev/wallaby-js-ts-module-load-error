import { Path } from "paper/dist/paper-core";
import Emitter from "~/svg/mixins/Emitter";
import { BaseItem } from "./BaseItem";

const BaseClass = Emitter(Path);

export default class BasePath extends BaseClass implements BaseItem {
  type: string = "BaseGroup";
  _stylesheet: any = null;
  _picked: boolean = false;
  _hasError: boolean = false;

  get stylesheet() {
    return this._stylesheet;
  }

  set stylesheet(stylesheet) {
    this._stylesheet = stylesheet;
    this.applyStyles();
  }

  get picked() {
    return this._picked;
  }

  set picked(value) {
    this._picked = value;
    this.applyStyles();
  }

  get excluded() {
    return this.data.excluded;
  }

  get hasError() {
    return this._hasError;
  }

  applyStyles() {
    this.set(this.stylesheet && this.stylesheet.base);
    if (this.picked && this.stylesheet?.picked)
      this.set(this.stylesheet.picked);
    if (this.hasError && this.stylesheet?.error)
      this.set(this.stylesheet.error);
    if (this.excluded && this.stylesheet?.excluded)
      this.set(this.stylesheet.excluded);
  }
}
