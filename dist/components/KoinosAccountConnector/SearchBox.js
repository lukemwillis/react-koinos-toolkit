"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchBox;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _icons = require("@chakra-ui/icons");
var _CTA = _interopRequireDefault(require("./CTA"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SearchBox(_ref) {
  var placeholder = _ref.placeholder,
    _ref$buttonLabel = _ref.buttonLabel,
    buttonLabel = _ref$buttonLabel === void 0 ? "Search" : _ref$buttonLabel,
    _ref$inlineButton = _ref.inlineButton,
    inlineButton = _ref$inlineButton === void 0 ? false : _ref$inlineButton,
    _ref$onSearch = _ref.onSearch,
    onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
    inputRef = _ref.inputRef,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    setValue = _ref.setValue,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
    secondaryCTA = _ref.secondaryCTA;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    internalSetQuery = _useState2[1];
  var altRef = (0, _react.useRef)(null);
  var setQuery = function setQuery(val) {
    if (setValue) {
      setValue(val);
    } else {
      internalSetQuery(val);
    }
  };
  (0, _react.useEffect)(function () {
    if (!autoFocus) return;
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    } else if (altRef.current) {
      altRef.current.focus();
    }
  }, [autoFocus, inputRef, altRef]);
  (0, _react.useEffect)(function () {
    internalSetQuery(value);
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react2.InputGroup, {
    maxWidth: "30em"
  }, /*#__PURE__*/_react.default.createElement(_react2.Input, {
    placeholder: placeholder,
    fontSize: "xl",
    size: "lg",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === "Enter" && query.length > 0) {
        window.open("https://kap.domains/search?q=".concat(query));
        onSearch();
      }
    },
    ref: inputRef || altRef,
    _focusVisible: {
      borderColor: (0, _react2.useColorModeValue)("brand.navy", "white")
    },
    paddingRight: inlineButton && query ? "7em" : "16",
    onFocus: function onFocus(e) {
      return e.target.select();
    }
  }), !inlineButton && /*#__PURE__*/_react.default.createElement(_react2.InputLeftElement, {
    pointerEvents: "none",
    fontSize: "lg",
    margin: "1",
    color: "gray.500"
  }, /*#__PURE__*/_react.default.createElement(_icons.SearchIcon, null)), /*#__PURE__*/_react.default.createElement(_react2.InputRightElement, {
    pointerEvents: inlineButton && query ? "auto" : "none",
    fontSize: "lg",
    margin: "1",
    color: "gray.500",
    width: "auto"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    gap: "2",
    alignItems: "center",
    paddingRight: "2"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, null, ".koin"), inlineButton && query && /*#__PURE__*/_react.default.createElement("a", {
    href: query.length > 0 ? "https://kap.domains/search?q=".concat(query) : "#"
  }, /*#__PURE__*/_react.default.createElement(_CTA.default, {
    size: "sm",
    onClick: onSearch,
    label: buttonLabel,
    secondary: secondaryCTA
  }))))), !inlineButton && /*#__PURE__*/_react.default.createElement("a", {
    href: query.length > 0 ? "https://kap.domains/search?q=".concat(query) : "#"
  }, /*#__PURE__*/_react.default.createElement(_CTA.default, {
    size: "lg",
    onClick: onSearch,
    label: buttonLabel,
    secondary: secondaryCTA
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3QyIiwiX2ljb25zIiwiX0NUQSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJsZW5ndGgiLCJhcnIyIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVyciIsInJldHVybiIsImlzQXJyYXkiLCJTZWFyY2hCb3giLCJfcmVmIiwicGxhY2Vob2xkZXIiLCJfcmVmJGJ1dHRvbkxhYmVsIiwiYnV0dG9uTGFiZWwiLCJfcmVmJGlubGluZUJ1dHRvbiIsImlubGluZUJ1dHRvbiIsIl9yZWYkb25TZWFyY2giLCJvblNlYXJjaCIsImlucHV0UmVmIiwiX3JlZiR2YWx1ZSIsInNldFZhbHVlIiwiX3JlZiRhdXRvRm9jdXMiLCJhdXRvRm9jdXMiLCJzZWNvbmRhcnlDVEEiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJxdWVyeSIsImludGVybmFsU2V0UXVlcnkiLCJhbHRSZWYiLCJ1c2VSZWYiLCJzZXRRdWVyeSIsInZhbCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIklucHV0R3JvdXAiLCJtYXhXaWR0aCIsIklucHV0IiwiZm9udFNpemUiLCJzaXplIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlVcCIsIndpbmRvdyIsIm9wZW4iLCJjb25jYXQiLCJyZWYiLCJfZm9jdXNWaXNpYmxlIiwiYm9yZGVyQ29sb3IiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInBhZGRpbmdSaWdodCIsIm9uRm9jdXMiLCJzZWxlY3QiLCJJbnB1dExlZnRFbGVtZW50IiwicG9pbnRlckV2ZW50cyIsIm1hcmdpbiIsImNvbG9yIiwiU2VhcmNoSWNvbiIsIklucHV0UmlnaHRFbGVtZW50Iiwid2lkdGgiLCJGbGV4IiwiZ2FwIiwiYWxpZ25JdGVtcyIsIlRleHQiLCJocmVmIiwib25DbGljayIsImxhYmVsIiwic2Vjb25kYXJ5Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvS29pbm9zQWNjb3VudENvbm5lY3Rvci9TZWFyY2hCb3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgSW5wdXQsXG4gIElucHV0R3JvdXAsXG4gIElucHV0TGVmdEVsZW1lbnQsXG4gIElucHV0UmlnaHRFbGVtZW50LFxuICBUZXh0LFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7XG4gIERpc3BhdGNoLFxuICBSZWZPYmplY3QsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgQ1RBIGZyb20gXCIuL0NUQVwiO1xuXG5pbnRlcmZhY2UgU2VhcmNoQm94UHJvcHMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgYnV0dG9uTGFiZWw/OiBzdHJpbmc7XG4gIGlubGluZUJ1dHRvbj86IGJvb2xlYW47XG4gIG9uU2VhcmNoPzogKCkgPT4gdm9pZDtcbiAgaW5wdXRSZWY/OiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG4gIHZhbHVlPzogc3RyaW5nO1xuICBzZXRWYWx1ZT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuICBzZWNvbmRhcnlDVEE/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCb3goe1xuICBwbGFjZWhvbGRlcixcbiAgYnV0dG9uTGFiZWwgPSBcIlNlYXJjaFwiLFxuICBpbmxpbmVCdXR0b24gPSBmYWxzZSxcbiAgb25TZWFyY2ggPSAoKSA9PiB7fSxcbiAgaW5wdXRSZWYsXG4gIHZhbHVlID0gXCJcIixcbiAgc2V0VmFsdWUsXG4gIGF1dG9Gb2N1cyA9IHRydWUsXG4gIHNlY29uZGFyeUNUQSxcbn06IFNlYXJjaEJveFByb3BzKSB7XG4gIGNvbnN0IFtxdWVyeSwgaW50ZXJuYWxTZXRRdWVyeV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gIGNvbnN0IGFsdFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBzZXRRdWVyeSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGlmIChzZXRWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWxTZXRRdWVyeSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXV0b0ZvY3VzKSByZXR1cm47XG5cbiAgICBpZiAoaW5wdXRSZWYgJiYgaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoYWx0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGFsdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzLCBpbnB1dFJlZiwgYWx0UmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnRlcm5hbFNldFF1ZXJ5KHZhbHVlKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElucHV0R3JvdXAgbWF4V2lkdGg9XCIzMGVtXCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBmb250U2l6ZT1cInhsXCJcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleVVwPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgcXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9rYXAuZG9tYWlucy9zZWFyY2g/cT0ke3F1ZXJ5fWApO1xuICAgICAgICAgICAgICBvblNlYXJjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZiB8fCBhbHRSZWZ9XG4gICAgICAgICAgX2ZvY3VzVmlzaWJsZT17e1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiYnJhbmQubmF2eVwiLCBcIndoaXRlXCIpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0PXtpbmxpbmVCdXR0b24gJiYgcXVlcnkgPyBcIjdlbVwiIDogXCIxNlwifVxuICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiBlLnRhcmdldC5zZWxlY3QoKX1cbiAgICAgICAgLz5cbiAgICAgICAgeyFpbmxpbmVCdXR0b24gJiYgKFxuICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXG4gICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIjFcIlxuICAgICAgICAgICAgY29sb3I9e1wiZ3JheS41MDBcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgIDwvSW5wdXRMZWZ0RWxlbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgPElucHV0UmlnaHRFbGVtZW50XG4gICAgICAgICAgcG9pbnRlckV2ZW50cz17aW5saW5lQnV0dG9uICYmIHF1ZXJ5ID8gXCJhdXRvXCIgOiBcIm5vbmVcIn1cbiAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICBtYXJnaW49XCIxXCJcbiAgICAgICAgICBjb2xvcj17XCJncmF5LjUwMFwifVxuICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxleCBnYXA9XCIyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHBhZGRpbmdSaWdodD1cIjJcIj5cbiAgICAgICAgICAgIHsvKiBUT0RPIHVzZSBkb21haW4gKi99XG4gICAgICAgICAgICA8VGV4dD4ua29pbjwvVGV4dD5cbiAgICAgICAgICAgIHtpbmxpbmVCdXR0b24gJiYgcXVlcnkgJiYgKFxuICAgICAgICAgICAgICA8YSBocmVmPXtxdWVyeS5sZW5ndGggPiAwID8gYGh0dHBzOi8va2FwLmRvbWFpbnMvc2VhcmNoP3E9JHtxdWVyeX1gIDogXCIjXCJ9PlxuICAgICAgICAgICAgICAgIDxDVEFcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNlYXJjaH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtidXR0b25MYWJlbH1cbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17c2Vjb25kYXJ5Q1RBfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgeyFpbmxpbmVCdXR0b24gJiYgKFxuICAgICAgICA8YSBocmVmPXtxdWVyeS5sZW5ndGggPiAwID8gYGh0dHBzOi8va2FwLmRvbWFpbnMvc2VhcmNoP3E9JHtxdWVyeX1gIDogXCIjXCJ9PlxuICAgICAgICAgIDxDVEFcbiAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNlYXJjaH1cbiAgICAgICAgICAgIGxhYmVsPXtidXR0b25MYWJlbH1cbiAgICAgICAgICAgIHNlY29uZGFyeT17c2Vjb25kYXJ5Q1RBfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7QUFrQkEsSUFBQUUsTUFBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsSUFBQSxHQUFBQyxzQkFBQSxDQUFBSixPQUFBO0FBQXdCLFNBQUFJLHVCQUFBQyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsS0FBQUUsT0FBQSxFQUFB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