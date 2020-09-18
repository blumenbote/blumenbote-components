"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleLoginButton = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GoogleLoginButton = function GoogleLoginButton(props) {
  var UIComponent = props.UIComponent,
      onSuccess = props.onSuccess,
      onFailure = props.onFailure,
      onRequest = props.onRequest,
      responseType = props.responseType,
      handleSuccessGoogleLogin = props.handleSuccessGoogleLogin;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      unmounted = _useState4[0],
      setUnmounted = _useState4[1];

  (0, _react.useEffect)(function () {
    insertGapiScript();
    return function () {
      setUnmounted(true);
      var element = document.getElementById('google-login');

      if (element) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);
  /**
   * loading script for the google's api
   */

  var insertGapiScript = function insertGapiScript() {
    var js = window.document.createElement('script');
    js.id = 'google-login';
    js.src = 'https://apis.google.com/js/api.js';
    js.async = true;
    js.defer = true;

    js.onload = function () {
      initializeGoogleSignIn();
    };

    window.document.body.appendChild(js);
  };
  /**
   * Start Login google
   */


  var initializeGoogleSignIn = function initializeGoogleSignIn() {
    window.gapi.load('auth2', function () {
      console.log(window.gapi.auth2);
      var GoogleAuth = window.gapi.auth2.getAuthInstance();

      if (!GoogleAuth) {
        window.gapi.auth2.init({
          apiKey: 'AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs',
          client_id: '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile'
        }).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
            var signedIn;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!unmounted) {
                      setLoaded(true);
                      signedIn = res.isSignedIn.get();

                      if (signedIn) {
                        handleSigninSuccess(res.currentUser.get());
                      }
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), function (err) {
          setLoaded(true);
          console.log(err);
        });
      } else if (GoogleAuth.isSignedIn.get()) {
        setLoaded(true);
        handleSigninSuccess(GoogleAuth.currentUser.get());
      } else if (!unmounted) {
        setLoaded(true);
      }
    });
    window.gapi.load('signin2', function () {
      window.gapi.signin2.render('my-signin2', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onSuccess,
        onfailure: onFailure
      });
    });
  };
  /**
   * handling response of google
   * @param {EventTarget} e Click button event
   */


  var signIn = function signIn(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }

    if (loaded) {
      var GoogleAuth = window.gapi.auth2.getAuthInstance();
      var options = {
        apiKey: 'AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs',
        client_id: '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile'
      };
      onRequest();

      if (responseType === 'code') {
        GoogleAuth.grantOfflineAccess(options).then(function (res) {
          return onSuccess(res);
        }, function (err) {
          return onFailure(err);
        });
      } else {
        GoogleAuth.signIn(options).then(function (res) {
          return handleSigninSuccess(res);
        }, function (err) {
          return onFailure(err);
        });
      }
    }
  };
  /**
   * Function that return token of the user
   * @param {object} result from Google
   */


  var handleSigninSuccess = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
      var basicProfile, authResponse, response;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              basicProfile = res.getBasicProfile();
              authResponse = res.getAuthResponse();
              res.googleId = basicProfile.getId();
              res.tokenObj = authResponse;
              res.tokenId = authResponse.id_token;
              res.accessToken = authResponse.access_token;
              res.profileObj = {
                googleId: basicProfile.getId(),
                imageUrl: basicProfile.getImageUrl(),
                email: basicProfile.getEmail(),
                name: basicProfile.getName(),
                givenName: basicProfile.getGivenName(),
                familyName: basicProfile.getFamilyName()
              };
              console.log('responseGoogle', res);
              _context2.next = 10;
              return ordering.users().auth(res);

            case 10:
              response = _context2.sent;
              console.log('responseApi', response);
              handleSuccessGoogleLogin(basicProfile);
              onSuccess(res);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSigninSuccess(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    signIn: signIn
  })));
};

exports.GoogleLoginButton = GoogleLoginButton;
GoogleLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
    * property to get response code if type "code"
    */
  responseType: _propTypes.default.string,

  /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
  handleSuccessGoogleLogin: _propTypes.default.func,

  /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
  onSuccess: _propTypes.default.func,

  /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
  onFailure: _propTypes.default.func,

  /**
     * handling response of google
     * google response when the user is logging
     */
  onRequest: _propTypes.default.func,

  /**
   * loading script for the google's api
   */
  insertGapiScript: _propTypes.default.func,

  /**
   * Start Login google
   */
  initializeGoogleSignIn: _propTypes.default.func,

  /**
   * handling response of google
   */
  signIn: _propTypes.default.func,

  /**
   * Function that return token of the user
   */
  handleSigninSuccess: _propTypes.default.func,

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleLoginButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};