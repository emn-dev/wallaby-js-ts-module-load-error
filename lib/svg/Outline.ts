import BasePath from "./BasePath";

import { wrap } from "../wraps";

export default class Outline extends BasePath {
  type: string = "Outline";

  wrap() {
    return wrap();
  }
}
