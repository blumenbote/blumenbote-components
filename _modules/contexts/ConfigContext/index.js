"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfig = exports.ConfigProvider = exports.ConfigContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../ApiContext");

var _LanguageContext = require("../LanguageContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);
/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */


var ConfigContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */

exports.ConfigContext = ConfigContext;

var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)({
    loading: true,
    configs: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var refreshConfigs = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$confi, _yield$ordering$confi2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.configs().asDictionary().get();

            case 4:
              _yield$ordering$confi = _context.sent;
              _yield$ordering$confi2 = _yield$ordering$confi.content;
              error = _yield$ordering$confi2.error;
              result = _yield$ordering$confi2.result;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                configs: error ? {} : result
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function refreshConfigs() {
      return _ref2.apply(this, arguments);
    };
  }();

  var parsePrice = function parsePrice(value) {
    var _state$configs$format, _state$configs$format2, _state$configs$format3, _state$configs$format4, _state$configs$format5;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_state$configs$format = state.configs.format_number_decimal_length) === null || _state$configs$format === void 0 ? void 0 : _state$configs$format.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_state$configs$format2 = state.configs.format_number_decimal_separator) === null || _state$configs$format2 === void 0 ? void 0 : _state$configs$format2.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_state$configs$format3 = state.configs.format_number_thousand_separator) === null || _state$configs$format3 === void 0 ? void 0 : _state$configs$format3.value) || '.',
      currency: (options === null || options === void 0 ? void 0 : options.currency) || ((_state$configs$format4 = state.configs.format_number_currency) === null || _state$configs$format4 === void 0 ? void 0 : _state$configs$format4.value) || '$',
      currencyPosition: (options === null || options === void 0 ? void 0 : options.currencyPosition) || ((_state$configs$format5 = state.configs.format_number_currency_position) === null || _state$configs$format5 === void 0 ? void 0 : _state$configs$format5.value) || 'left'
    };
    var number = parseNumber(value, formatNumber);

    if (formatNumber.currencyPosition === 'left') {
      number = formatNumber.currency + ' ' + number;
    } else {
      number = number + ' ' + formatNumber.currency;
    }

    return number;
  };

  var parseNumber = function parseNumber(value) {
    var _state$configs$format6, _state$configs$format7, _state$configs$format8;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    value = parseFloat(value) || 0;
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_state$configs$format6 = state.configs.format_number_decimal_length) === null || _state$configs$format6 === void 0 ? void 0 : _state$configs$format6.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_state$configs$format7 = state.configs.format_number_decimal_separator) === null || _state$configs$format7 === void 0 ? void 0 : _state$configs$format7.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_state$configs$format8 = state.configs.format_number_thousand_separator) === null || _state$configs$format8 === void 0 ? void 0 : _state$configs$format8.value) || '.'
    };
    var number = value.toFixed(formatNumber.decimal);
    number = number.toString();

    if (number.indexOf('.')) {
      number = number.replace('.', formatNumber.separator);
    } else if (number.indexOf(',')) {
      number = number.replace(',', formatNumber.separator);
    }

    var numberParts = number.split(formatNumber.separator);
    numberParts[0] = numberParts[0].replace(/(.)(?=(\d{3})+$)/g, '$1' + formatNumber.thousand);
    number = numberParts.join(formatNumber.separator);
    return number;
  };

  var parseDate = function parseDate(date) {
    var _state$configs$format9;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_state$configs$format9 = state.configs.format_time) === null || _state$configs$format9 === void 0 ? void 0 : _state$configs$format9.value) || '24';
    var formatDate = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || (formatTime === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = formatDate.utc ? _dayjs.default.utc(date, formatDate.inputFormat).local() : (0, _dayjs.default)(date, formatDate.inputFormat);

    return _date.format(formatDate.outputFormat);
  };

  var parseTime = function parseTime(time) {
    var _state$configs$format10;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!time) return '00:00';

    var _formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_state$configs$format10 = state.configs.format_time) === null || _state$configs$format10 === void 0 ? void 0 : _state$configs$format10.value) || '24';

    var formatTime = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['HH:mm', 'hh:mm A', 'hh:mm'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || (_formatTime === '24' ? 'HH:mm' : 'hh:mm A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(time, formatTime.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = formatTime.utc ? _dayjs.default.utc(time, formatTime.inputFormat).local() : (0, _dayjs.default)(time, formatTime.inputFormat);

    return _date.format(formatTime.outputFormat);
  };

  var parseDistance = function parseDistance(distance) {
    var _state$configs$distan, _state$configs$distan2;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    distance = parseFloat(distance) || 0;
    var unit = (options === null || options === void 0 ? void 0 : options.unit) || 'KM';

    if (((_state$configs$distan = state.configs.distance_unit_km) === null || _state$configs$distan === void 0 ? void 0 : _state$configs$distan.value) === '1') {
      unit = 'KM';
    }

    if ((_state$configs$distan2 = state.configs.distance_unit) === null || _state$configs$distan2 === void 0 ? void 0 : _state$configs$distan2.value) {
      var _state$configs$distan3;

      unit = (_state$configs$distan3 = state.configs.distance_unit) === null || _state$configs$distan3 === void 0 ? void 0 : _state$configs$distan3.value;
    }

    if (unit.toUpperCase() === 'MI') {
      return parseNumber(distance * 1.621371, options) + ' ' + t('MI', 'mi');
    } else {
      return parseNumber(distance, options) + ' ' + t('KM', 'km');
    }
  };

  var functions = {
    refreshConfigs: refreshConfigs,
    parsePrice: parsePrice,
    parseNumber: parseNumber,
    parseDate: parseDate,
    parseTime: parseTime,
    parseDistance: parseDistance
  };
  (0, _react.useEffect)(function () {
    if (!languageState.loading) {
      refreshConfigs();
    }
  }, [languageState]);
  return /*#__PURE__*/_react.default.createElement(ConfigContext.Provider, {
    value: [state, functions]
  }, children);
};
/**
 * Hook to get and update configs state
 */


exports.ConfigProvider = ConfigProvider;

var useConfig = function useConfig() {
  var configManager = (0, _react.useContext)(ConfigContext);
  return configManager || [{}, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))];
};

exports.useConfig = useConfig;