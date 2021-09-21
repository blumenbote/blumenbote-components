"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderList = function OrderList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      orders = props.orders,
      orderIds = props.orderIds,
      orderStatus = props.orderStatus,
      orderBy = props.orderBy,
      orderDirection = props.orderDirection,
      useDefualtSessionManager = props.useDefualtSessionManager,
      paginationSettings = props.paginationSettings,
      asDashboard = props.asDashboard,
      customArray = props.customArray,
      userCustomerId = props.userCustomerId,
      activeOrders = props.activeOrders,
      isDynamicSort = props.isDynamicSort;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    loading: !orders,
    error: null,
    orders: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null,
    messages: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      updateOtherStatus = _useState8[0],
      setUpdateOtherStatus = _useState8[1];

  var _useState9 = (0, _react.useState)({
    param: orderBy,
    direction: orderDirection
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      sortBy = _useState10[0],
      setSortBy = _useState10[1];

  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};

  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page) {
      var otherStatus,
          pageSize,
          options,
          searchByStatus,
          source,
          functionFetch,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              otherStatus = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
              pageSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : paginationSettings.pageSize;
              options = {
                query: {
                  orderBy: "".concat(sortBy.direction === 'desc' ? '-' : '').concat(sortBy.param),
                  page: page,
                  page_size: pageSize
                }
              };

              if (orderIds || orderStatus) {
                options.query.where = [];

                if (orderIds) {
                  options.query.where.push({
                    attribute: 'id',
                    value: orderIds
                  });
                }

                if (orderStatus) {
                  searchByStatus = (otherStatus === null || otherStatus === void 0 ? void 0 : otherStatus.length) > 0 ? otherStatus : orderStatus;
                  options.query.where.push({
                    attribute: 'status',
                    value: searchByStatus
                  });
                }
              }

              if (userCustomerId) {
                options.query.where.push({
                  attribute: 'customer_id',
                  value: parseInt(userCustomerId, 10)
                });
              }

              source = {};
              requestsState.orders = source;
              options.cancelToken = source;
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
              _context.next = 11;
              return functionFetch.get(options);

            case 11:
              return _context.abrupt("return", _context.sent);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loadOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(isNextPage, searchByOtherStatus) {
      var keepOrders,
          pageSize,
          nextPage,
          response,
          _args2 = arguments;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              keepOrders = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
              pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize;

              if (session.token) {
                _context2.next = 5;
                break;
              }

              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false
              }));
              return _context2.abrupt("return");

            case 5:
              _context2.prev = 5;
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              nextPage = !isNextPage ? pagination.currentPage + 1 : 1;
              _context2.next = 10;
              return getOrders(nextPage, searchByOtherStatus, pageSize);

            case 10:
              response = _context2.sent;

              if (searchByOtherStatus) {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)),
                  error: response.content.error ? response.content.result : null
                });
              } else {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : response.content.result,
                  error: response.content.error ? response.content.result : null
                });
              }

              if (!response.content.error) {
                setPagination({
                  currentPage: keepOrders ? pagination.currentPage : response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: keepOrders ? pagination.totalPages : response.content.pagination.total_pages,
                  total: keepOrders ? pagination.total : response.content.pagination.total,
                  from: keepOrders ? 1 : response.content.pagination.from,
                  to: keepOrders ? pagination.to : response.content.pagination.to
                });
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](5);

              if (_context2.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context2.t0.message]
                }));
              }

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 15]]);
    }));

    return function loadOrders(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(orderId) {
      var url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
              _context3.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context3.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setMessages({
                  messages: result,
                  loading: false,
                  error: null
                });
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context3.t0.Messages]
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function loadMessages(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (orders || customArray) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: (orders === null || orders === void 0 ? void 0 : orders.lenght) > 0 ? orders : customArray || [],
        loading: false
      }));
    } else {
      loadOrders();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id));

      if (found) {
        orders = orderList.orders.filter(function (_order) {
          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
          }

          var valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status)) || updateOtherStatus.length === 0 || updateOtherStatus.includes(parseInt(_order.status));

          if (!valid) {
            pagination.total--;
            setPagination(_objectSpread({}, pagination));
          }

          return valid;
        });
      } else {
        orders = [order].concat(_toConsumableArray(orderList.orders));
        pagination.total++;
        setPagination(_objectSpread({}, pagination));
      }
    };

    var handleAddNewOrder = function handleAddNewOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
      var newOrder = [order].concat(_toConsumableArray(orderList.orders));
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: newOrder,
        loading: false
      }));
    };

    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleAddNewOrder);
    };
  }, [orderList.orders, pagination, socket]);
  (0, _react.useEffect)(function () {
    var _session$user, _session$user2;

    if (!session.user) return;
    var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 0 ? 'orders' : "orders_".concat(userCustomerId || (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id));
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session, userCustomerId]);

  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(searchByOtherStatus) {
      var response;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context4.prev = 1;
              _context4.next = 4;
              return getOrders(pagination.currentPage + 1, searchByOtherStatus);

            case 4:
              response = _context4.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context4.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function loadMoreOrders(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var goToPage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(page) {
      var response;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context5.prev = 1;
              _context5.next = 4;
              return getOrders(page);

            case 4:
              response = _context5.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);

              if (_context5.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context5.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
    }));

    return function goToPage(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!orderList.loading) {
      var ordersSorted = orderList.orders.sort(function (a, b) {
        if (activeOrders) {
          return new Date(b.created_at) - new Date(a.created_at);
        }

        return new Date(a.created_at) - new Date(b.created_at);
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: ordersSorted
      }));
    }
  }, [orderList.loading]);
  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */

  (0, _react.useEffect)(function () {
    if (isDynamicSort) {
      loadOrders(true, []);
    }
  }, [sortBy]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    setSortBy: setSortBy,
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    loadOrders: loadOrders,
    loadMessages: loadMessages,
    messages: messages,
    setMessages: setMessages,
    setUpdateOtherStatus: setUpdateOtherStatus
  })));
};

exports.OrderList = OrderList;
OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }

    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },

  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,

  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

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
OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};