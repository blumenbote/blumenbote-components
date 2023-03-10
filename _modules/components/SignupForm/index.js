"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage signup behavior without UI component
 */
var SignupForm = function SignupForm(props) {
  var _configs$email_otp_si, _configs$phone_otp_si, _configs$full_details;
  var UIComponent = props.UIComponent,
    useChekoutFileds = props.useChekoutFileds,
    handleButtonSignupClick = props.handleButtonSignupClick,
    handleSuccessSignup = props.handleSuccessSignup,
    externalPhoneNumber = props.externalPhoneNumber,
    handleCustomSignup = props.handleCustomSignup,
    notificationState = props.notificationState,
    isCustomerMode = props.isCustomerMode,
    numOtpInputs = props.numOtpInputs;
  var requestsState = {};
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    login = _useSession2[1].login;
  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useState = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      email: '',
      cellphone: externalPhoneNumber || '',
      password: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    signupData = _useState4[0],
    setSignupData = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    verifyPhoneState = _useState6[0],
    setVerifyPhoneState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    checkPhoneCodeState = _useState8[0],
    setCheckPhoneCodeState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    willVerifyOtpState = _useState10[0],
    setWillVerifyOtpState = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    otpState = _useState12[0],
    setOtpState = _useState12[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState13 = (0, _react.useState)({
      code: '',
      version: ''
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    reCaptchaValue = _useState14[0],
    setReCaptchaValue = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isReCaptchaEnable = _useState16[0],
    setIsReCaptchaEnable = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    promotionsEnabled = _useState18[0],
    setPromotionsEnabled = _useState18[1];
  var useSignUpOtpEmail = (configs === null || configs === void 0 ? void 0 : (_configs$email_otp_si = configs.email_otp_signup_enabled) === null || _configs$email_otp_si === void 0 ? void 0 : _configs$email_otp_si.value) === '1';
  var useSignUpOtpCellphone = (configs === null || configs === void 0 ? void 0 : (_configs$phone_otp_si = configs.phone_otp_signup_enabled) === null || _configs$phone_otp_si === void 0 ? void 0 : _configs$phone_otp_si.value) === '1';
  var useSignUpFullDetails = useSignUpOtpEmail || useSignUpOtpCellphone ? (configs === null || configs === void 0 ? void 0 : (_configs$full_details = configs.full_details_signup_enabled) === null || _configs$full_details === void 0 ? void 0 : _configs$full_details.value) === '1' : true;
  var defaultSignUpTab = useSignUpFullDetails ? 'default' : useSignUpOtpEmail ? 'otpEmail' : 'otpCellphone';
  var _useState19 = (0, _react.useState)(defaultSignUpTab),
    _useState20 = _slicedToArray(_useState19, 2),
    signUpTab = _useState20[0],
    setSignUpTab = _useState20[1];
  /**
   * Default fuction for signup workflow
   */
  var handleSignupClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var data, newData, source, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!handleCustomSignup) {
              _context.next = 3;
              break;
            }
            handleCustomSignup(values || signupData);
            return _context.abrupt("return");
          case 3:
            data = values || signupData;
            if (!isReCaptchaEnable) {
              _context.next = 12;
              break;
            }
            if (!((reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code) === '')) {
              _context.next = 10;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: [t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')]
              },
              loading: false
            });
            return _context.abrupt("return");
          case 10:
            data.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            data.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 12:
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              data.notification_token = notificationState.notification_token;
              data.notification_app = notificationState.notification_app;
            }
            if (promotionsEnabled) {
              data.settings = {
                notification: {
                  newsletter: true,
                  promotions: true
                },
                sms: {
                  newsletter: true,
                  promotions: true
                }
              };
            }
            if (isCustomerMode) {
              data.phone = data.cellphone;
            }
            newData = Object.fromEntries(Object.entries(data).filter(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                _ = _ref3[0],
                v = _ref3[1];
              return v !== '';
            }));
            _context.prev = 16;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            source = {};
            requestsState.signup = source;
            _context.next = 22;
            return ordering.users().save(newData, {
              cancelToken: source
            });
          case 22:
            response = _context.sent;
            setFormState({
              result: response.content,
              loading: false
            });
            if (!response.content.error) {
              events.emit('singup_user', response.content.result);
              if (handleSuccessSignup) {
                handleSuccessSignup(response.content.result);
              }
            }
            _context.next = 30;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](16);
            if (_context.t0.constructor.name !== 'Cancel') {
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });
            }
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[16, 27]]);
    }));
    return function handleSignupClick(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};
    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }
    setSignupData(_objectSpread(_objectSpread({}, signupData), currentChanges));
  };

  /**
   * Update recaptcha value
   * @param {string} value of recaptcha
   */
  var setReCaptcha = function setReCaptcha(value) {
    setReCaptchaValue(value);
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _validationFields$fie7;
    return !useChekoutFileds || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie2 = _validationFields$fie.checkout) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2[fieldName]) || !validationFields.loading && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.checkout) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.checkout) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6[fieldName]) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11, _validationFields$fie12, _validationFields$fie13, _validationFields$fie14, _validationFields$fie15;
    return fieldName === 'password' || useChekoutFileds && !validationFields.loading && ((_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.checkout) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9[fieldName]) && ((_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 ? void 0 : (_validationFields$fie11 = _validationFields$fie10.checkout) === null || _validationFields$fie11 === void 0 ? void 0 : (_validationFields$fie12 = _validationFields$fie11[fieldName]) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.enabled) && ((_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : (_validationFields$fie14 = _validationFields$fie13.checkout) === null || _validationFields$fie14 === void 0 ? void 0 : (_validationFields$fie15 = _validationFields$fie14[fieldName]) === null || _validationFields$fie15 === void 0 ? void 0 : _validationFields$fie15.required);
  };

  /**
  * function to send verify code with twilio
  * @param {Object} values object with cellphone and country code values
  */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var response, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context2.next = 4;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
                cellphone: values.cellphone,
                country_phone_code: "+".concat(values.country_phone_code)
              }))
            });
          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();
          case 7:
            res = _context2.sent;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _context2.t0.message
              }
            }));
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function sendVerifyPhoneCode(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(isReCaptchaEnable && reCaptchaValue === null)) {
              _context3.next = 3;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context3.abrupt("return");
          case 3:
            body = {
              type: 4,
              channel: signUpTab === 'otpEmail' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (signupData === null || signupData === void 0 ? void 0 : signupData.email);
            cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (signupData === null || signupData === void 0 ? void 0 : signupData.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.country_phone_code) || signupData.country_phone_code;
            setSignupData(_objectSpread(_objectSpread({}, signupData), {}, {
              email: email,
              cellphone: cellphone,
              country_phone_code: countryPhoneCode
            }));
            _context3.prev = 8;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true,
              result: {
                error: false,
                result: null
              }
            }));
            setWillVerifyOtpState(true);
            if (signUpTab === 'otpCellphone') {
              body.country_phone_code = countryPhoneCode;
              body.cellphone = cellphone;
            } else {
              body.email = email;
            }
            _context3.next = 14;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 14:
            response = _context3.sent;
            _context3.next = 17;
            return response.json();
          case 17:
            _yield$response$json = _context3.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context3.next = 23;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                result: result,
                error: null
              }
            }));
            return _context3.abrupt("return");
          case 23:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: true,
                result: result
              }
            }));
            _context3.next = 29;
            break;
          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](8);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: true,
                result: _context3.t0.message
              }
            }));
          case 29:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[8, 26]]);
    }));
    return function generateOtpCode(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var body, _res$result, response, res, _res$result2, _res$result2$session;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            body = _objectSpread({}, values);
            _context4.prev = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context4.next = 6;
            return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 6:
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            res = _context4.sent;
            if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
              login({
                user: res === null || res === void 0 ? void 0 : res.result,
                token: res === null || res === void 0 ? void 0 : (_res$result2 = res.result) === null || _res$result2 === void 0 ? void 0 : (_res$result2$session = _res$result2.session) === null || _res$result2$session === void 0 ? void 0 : _res$result2$session.access_token
              });
              if (handleSuccessSignup) {
                handleSuccessSignup(res === null || res === void 0 ? void 0 : res.result);
              }
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: res
            }));
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context4.t0.message
              }
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 14]]);
    }));
    return function checkVerifyPhoneCode(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkVerifyByOtpCode = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _signupData$country_p;
      var _credentials, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _credentials = signUpTab === 'otpEmail' ? {
              email: signupData === null || signupData === void 0 ? void 0 : signupData.email,
              one_time_password: otpState
            } : {
              country_phone_code: signupData === null || signupData === void 0 ? void 0 : (_signupData$country_p = signupData.country_phone_code) === null || _signupData$country_p === void 0 ? void 0 : _signupData$country_p.replace('+', ''),
              cellphone: signupData === null || signupData === void 0 ? void 0 : signupData.cellphone,
              one_time_password: otpState
            };
            if (!isReCaptchaEnable) {
              _context5.next = 8;
              break;
            }
            if (!(reCaptchaValue === null)) {
              _context5.next = 7;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context5.abrupt("return");
          case 7:
            _credentials.verification_code = reCaptchaValue;
          case 8:
            _context5.prev = 8;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true,
              result: {
                error: false
              }
            }));
            _context5.next = 12;
            return ordering.users().auth(_credentials);
          case 12:
            _yield$ordering$users = _context5.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            if (!error && result !== null && result !== void 0 && result.id) {
              login({
                user: result,
                token: result === null || result === void 0 ? void 0 : (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });
              if (handleSuccessSignup) {
                handleSuccessSignup(result);
              }
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  result: result,
                  error: false
                }
              }));
            } else {
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  result: result,
                  error: true
                }
              }));
            }
            _context5.next = 22;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](8);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context5.t0.message
              }
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[8, 19]]);
    }));
    return function checkVerifyByOtpCode() {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * function to change promotions enabled
   */
  var handleChangePromotions = function handleChangePromotions() {
    setPromotionsEnabled(!promotionsEnabled);
  };
  (0, _react.useEffect)(function () {
    var _configs$security_rec;
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$security_rec = configs.security_recaptcha_signup) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');
  }, [configs]);
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      checkVerifyByOtpCode();
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    return function () {
      if (requestsState.signup) {
        requestsState.signup.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    validationFields: validationFields,
    signupData: signupData,
    showField: showField,
    isRequiredField: isRequiredField,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonSignupClick: handleButtonSignupClick || handleSignupClick,
    generateOtpCode: generateOtpCode,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptcha,
    handleChangePromotions: handleChangePromotions,
    setOtpState: setOtpState,
    otpState: otpState,
    setSignUpTab: setSignUpTab,
    signUpTab: signUpTab,
    setWillVerifyOtpState: setWillVerifyOtpState,
    willVerifyOtpState: willVerifyOtpState,
    useSignUpFullDetails: useSignUpFullDetails,
    useSignUpOtpEmail: useSignUpOtpEmail,
    useSignUpOtpCellphone: useSignUpOtpCellphone
  })));
};
exports.SignupForm = SignupForm;
SignupForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to change default signup behavior
   */
  handleButtonSignupClick: _propTypes.default.func,
  /**
   * Function to get signup success event
   * @param {Object} user User with session data
   */
  handleSuccessSignup: _propTypes.default.func,
  /**
   * Function to continue as guest behavior
   */
  handleContinueAsGuest: _propTypes.default.func,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useChekoutFileds: _propTypes.default.bool,
  /**
   * Custom function
   */
  handleCustomSignup: _propTypes.default.func,
  /**
   * handleCustomClick, function to get click event and return reset password data without default behavior
   */
  handleCustomSendReview: _propTypes.default.func,
  /**
   * Components types before signup form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after signup form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: _propTypes.default.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
SignupForm.defaultProps = {
  useChekoutFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};