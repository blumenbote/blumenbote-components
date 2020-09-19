"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ConfigContext = require("../ConfigContext");

var _SessionContext = require("../SessionContext");

var _WebsocketContext = require("../WebsocketContext");

var _OrderContext = require("../OrderContext");

var _LanguageContext = require("../LanguageContext");

var _ApiContext = require("../ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */

exports.OrderingContext = OrderingContext;

var OrderingProvider = function OrderingProvider(_ref) {
  var settings = _ref.settings,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: Object.assign(settings.api, {
      project: settings.project
    })
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, null, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, null, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, null, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    settings: Object.assign(settings.socket, {
      project: settings.project
    })
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, null, children)))))));
};

exports.OrderingProvider = OrderingProvider;