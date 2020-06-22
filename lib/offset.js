import flatten from "lodash/flatten";

export function offsetPath() {
  let result = [];

  result = flatten([[1], [2]]);

  return result;
}

export default offsetPath;
