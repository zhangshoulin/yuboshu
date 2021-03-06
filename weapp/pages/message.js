"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    items: [],
    state: 0,
    pageIndex: 1,
    pageSize: 10,
    hasMore: true
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onReachBottom: function onReachBottom() {
    var _this2 = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.loadData();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: {
    format: function format(text) {
      if (!text) {
        return;
      }

      return text.replace(/\\n/g, '\n');
    },
    loadData: function loadData() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api.Notice.getSysMsg(_this3.pageIndex, _this3.pageSize);

              case 2:
                res = _context3.sent;

                if (!res) {
                  _context3.next = 28;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 7;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  item.message.content = _this3.format(item.message.content);

                  _this3.items.push(item);
                }

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 15:
                _context3.prev = 15;
                _context3.prev = 16;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 18:
                _context3.prev = 18;

                if (!_didIteratorError) {
                  _context3.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context3.finish(18);

              case 22:
                return _context3.finish(15);

              case 23:
                _this3.pageIndex++;
                _this3.hasMore = res.length === _this3.pageSize;
                _this3.state = 2;
                _context3.next = 29;
                break;

              case 28:
                _this3.state = 1;

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 11, 15, 23], [16,, 18, 22]]);
      }))();
    },
    onRetry: function onRetry() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.state = 0;
                _this4.pageIndex = 1;
                _context4.next = 4;
                return _this4.loadData();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onRead: function onRead(id, index) {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var isRead;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api.Notice.setRead(id);

              case 2:
                isRead = _context5.sent;

                if (isRead) {
                  _this5.items[index].isRead = true;
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"mp-page":{"path":"../components/mp-page"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"}},"on":{"7-0":["retry"]}}, handlers: {'7-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'7-1': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onRead(item.id, index)
      })();
    
  }}}, models: {} });