import * as lodash from 'lodash';

let minLen = 2;

function isValid() {
  return lodash.trim(name).length >= minLen;
}

export default {
  isValid
};