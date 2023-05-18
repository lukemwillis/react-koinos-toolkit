"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = /*#__PURE__*/_react2.default.forwardRef(function CTA(_ref, ref) {
  var size = _ref.size,
    onClick = _ref.onClick,
    label = _ref.label,
    secondary = _ref.secondary,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading;
  var _useState = (0, _react2.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var buttonBackground = (0, _react.useColorModeValue)("brand.navy", "brand.orange");
  var buttonForeground = (0, _react.useColorModeValue)("brand.orange", "white");
  return /*#__PURE__*/_react2.default.createElement(_react.Button, {
    variant: secondary ? "outline" : "solid",
    width: {
      base: "100%",
      sm: "auto"
    },
    minWidth: "unset",
    fontWeight: "bold",
    background: secondary ? "transparent" : buttonBackground,
    borderColor: buttonBackground,
    color: secondary ? buttonBackground : "white",
    borderWidth: "2px",
    boxSizing: "border-box",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    _hover: {
      background: "transparent",
      borderColor: buttonForeground,
      borderWidth: "2px",
      color: buttonForeground
    },
    size: size,
    onClick: onClick,
    ref: ref,
    isDisabled: disabled,
    isLoading: loading
  }, label);
});
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0MiIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJkZWZhdWx0IiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsImkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwibGVuZ3RoIiwiYXJyMiIsIl9pIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnIiLCJyZXR1cm4iLCJpc0FycmF5IiwiX2RlZmF1bHQiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJDVEEiLCJfcmVmIiwicmVmIiwic2l6ZSIsIm9uQ2xpY2siLCJsYWJlbCIsInNlY29uZGFyeSIsIl9yZWYkZGlzYWJsZWQiLCJkaXNhYmxlZCIsIl9yZWYkbG9hZGluZyIsImxvYWRpbmciLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJob3ZlciIsInNldEhvdmVyIiwiYnV0dG9uQmFja2dyb3VuZCIsInVzZUNvbG9yTW9kZVZhbHVlIiwiYnV0dG9uRm9yZWdyb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJ2YXJpYW50Iiwid2lkdGgiLCJiYXNlIiwic20iLCJtaW5XaWR0aCIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm94U2l6aW5nIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiX2hvdmVyIiwiaXNEaXNhYmxlZCIsImlzTG9hZGluZyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Lb2lub3NBY2NvdW50Q29ubmVjdG9yL0NUQS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29sb3JNb2RlVmFsdWUsIFJlc3BvbnNpdmVWYWx1ZSwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQ1RBUHJvcHMge1xuICBzaXplOiBSZXNwb25zaXZlVmFsdWU8c3RyaW5nPjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgbGFiZWw6IHN0cmluZztcbiAgc2Vjb25kYXJ5PzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ1RBKFxuICB7XG4gICAgc2l6ZSxcbiAgICBvbkNsaWNrLFxuICAgIGxhYmVsLFxuICAgIHNlY29uZGFyeSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGxvYWRpbmcgPSBmYWxzZVxuICB9OiBDVEFQcm9wcyxcbiAgcmVmOiBSZWFjdC5Gb3J3YXJkZWRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+XG4pIHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJ1dHRvbkJhY2tncm91bmQgPSB1c2VDb2xvck1vZGVWYWx1ZShcImJyYW5kLm5hdnlcIiwgXCJicmFuZC5vcmFuZ2VcIik7XG4gIGNvbnN0IGJ1dHRvbkZvcmVncm91bmQgPSB1c2VDb2xvck1vZGVWYWx1ZShcImJyYW5kLm9yYW5nZVwiLCBcIndoaXRlXCIpO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHZhcmlhbnQ9e3NlY29uZGFyeSA/IFwib3V0bGluZVwiIDogXCJzb2xpZFwifVxuICAgICAgd2lkdGg9e3sgYmFzZTogXCIxMDAlXCIsIHNtOiBcImF1dG9cIn19XG4gICAgICBtaW5XaWR0aD1cInVuc2V0XCJcbiAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgIGJhY2tncm91bmQ9e3NlY29uZGFyeSA/IFwidHJhbnNwYXJlbnRcIiA6IGJ1dHRvbkJhY2tncm91bmR9XG4gICAgICBib3JkZXJDb2xvcj17YnV0dG9uQmFja2dyb3VuZH1cbiAgICAgIGNvbG9yPXtzZWNvbmRhcnkgPyBidXR0b25CYWNrZ3JvdW5kIDogXCJ3aGl0ZVwifVxuICAgICAgYm9yZGVyV2lkdGg9XCIycHhcIlxuICAgICAgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcihmYWxzZSl9XG4gICAgICBfaG92ZXI9e3tcbiAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJDb2xvcjogYnV0dG9uRm9yZWdyb3VuZCxcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMnB4XCIsXG4gICAgICAgIGNvbG9yOiBidXR0b25Gb3JlZ3JvdW5kLFxuICAgICAgfX1cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBpc0Rpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9CdXR0b24+XG4gICk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLE9BQUEsR0FBQUMsdUJBQUEsQ0FBQUYsT0FBQTtBQUF1RCxTQUFBRyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUYsd0JBQUFNLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBRSxPQUFBLENBQUFGLEdBQUEseUJBQUFBLEdBQUEsNEJBQUFHLE9BQUEsRUFBQUgsR0FBQSxVQUFBSSxLQUFBLEdBQUFULHdCQUFBLENBQUFDLFdBQUEsT0FBQVEsS0FBQSxJQUFBQSxLQUFBLENBQUFDLEdBQUEsQ0FBQUwsR0FBQSxZQUFBSSxLQUFBLENBQUFFLEdBQUEsQ0FBQU4sR0FBQSxTQUFBTyxNQUFBLFdBQUFDLHFCQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLEdBQUEsSUFBQVosR0FBQSxRQUFBWSxHQUFBLGtCQUFBSCxNQUFBLENBQUFJLFNBQUEsQ0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFmLEdBQUEsRUFBQVksR0FBQSxTQUFBSSxJQUFBLEdBQUFSLHFCQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQVgsR0FBQSxFQUFBWSxHQUFBLGNBQUFJLElB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