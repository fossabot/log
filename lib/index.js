"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edges = {
  bottomLeft: '┗',
  horizontal: '━',
  topLeft: '┏',
  vertical: '┃'
};

var max = function max(a, b) {
  return a > b ? a : b;
};

function log(content, option) {
  option.length = option.length || 10;
  option.color = option.color || _chalk.default.cyan;
  option.title = option.title || '';
  option.middle = true;
  var keyLength = 0;
  var valueLength = 0;

  for (var _key in content) {
    if (content.hasOwnProperty(_key)) {
      if (_key.length > keyLength) {
        keyLength = _key.length;
      }

      if (content[_key].toString().length > valueLength) {
        valueLength = content[_key].toString().length;
      }
    }
  }

  var maxLength = max(option.length, keyLength + valueLength + 6);
  var top = "".concat(Edges.topLeft, " ").concat(option.title, " ").padEnd(maxLength, Edges.horizontal);
  console.log(option.color(top));

  for (var _key2 in content) {
    if (content.hasOwnProperty(_key2)) {
      var keyString = option.middle ? _key2.padStart(keyLength, ' ') : _key2.padEnd(keyLength, ' ');

      var contentString = content[_key2].toString();

      var each = "".concat(Edges.vertical, " ").concat(keyString, " : ").concat(contentString);
      console.log(option.color(each));
    }
  }

  var bottom = Edges.bottomLeft.padEnd(maxLength, Edges.horizontal);
  console.log(option.color(bottom));
}