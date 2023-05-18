"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _avatars = require("@dicebear/avatars");
var identiconStyle = _interopRequireWildcard(require("@dicebear/avatars-identicon-sprites"));
var _AccountProvider = require("../KoinosAccountProvider/AccountProvider");
var _ProfileProvider = require("../KoinosAccountProvider/ProfileProvider");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Avatar(_ref) {
  var src = _ref.src,
    size = _ref.size;
  var _useAccount = (0, _AccountProvider.useAccount)(),
    address = _useAccount.address;
  var _useProfile = (0, _ProfileProvider.useProfile)(),
    avatarSrc = _useProfile.avatarSrc;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasError = _useState2[0],
    setHasError = _useState2[1];
  (0, _react.useEffect)(function () {
    setHasError(false);
  }, [address, src, avatarSrc, setHasError]);
  if (!hasError && (src || avatarSrc)) {
    return /*#__PURE__*/_react.default.createElement(_react2.Image, {
      fallback: /*#__PURE__*/_react.default.createElement(_react2.SkeletonCircle, {
        height: size,
        width: size,
        flexShrink: "0"
      }),
      src: src || avatarSrc,
      width: size,
      height: size,
      borderRadius: "50%",
      borderWidth: "1px",
      overflow: "hidden",
      alt: "KAP Account Avatar",
      onError: function onError() {
        return setHasError(true);
      }
    });
  } else {
    var identicon = (0, _avatars.createAvatar)(identiconStyle, {
      seed: address
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: identicon
      },
      style: {
        display: "block",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: "0",
        background: "white"
      }
    });
  }
}
var _default = Avatar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3QyIiwiX2F2YXRhcnMiLCJpZGVudGljb25TdHlsZSIsIl9BY2NvdW50UHJvdmlkZXIiLCJfUHJvZmlsZVByb3ZpZGVyIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJkZWZhdWx0IiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsImkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwibGVuZ3RoIiwiYXJyMiIsIl9pIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnIiLCJyZXR1cm4iLCJpc0FycmF5IiwiQXZhdGFyIiwiX3JlZiIsInNyYyIsInNpemUiLCJfdXNlQWNjb3VudCIsInVzZUFjY291bnQiLCJhZGRyZXNzIiwiX3VzZVByb2ZpbGUiLCJ1c2VQcm9maWxlIiwiYXZhdGFyU3JjIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJJbWFnZSIsImZhbGxiYWNrIiwiU2tlbGV0b25DaXJjbGUiLCJoZWlnaHQiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsIm92ZXJmbG93IiwiYWx0Iiwib25FcnJvciIsImlkZW50aWNvbiIsImNyZWF0ZUF2YXRhciIsInNlZWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInN0eWxlIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Lb2lub3NBY2NvdW50Q29ubmVjdG9yL0F2YXRhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW1hZ2UsIFNrZWxldG9uQ2lyY2xlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUF2YXRhciB9IGZyb20gXCJAZGljZWJlYXIvYXZhdGFyc1wiO1xuaW1wb3J0ICogYXMgaWRlbnRpY29uU3R5bGUgZnJvbSBcIkBkaWNlYmVhci9hdmF0YXJzLWlkZW50aWNvbi1zcHJpdGVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIi4uL0tvaW5vc0FjY291bnRQcm92aWRlci9BY2NvdW50UHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVByb2ZpbGUgfSBmcm9tIFwiLi4vS29pbm9zQWNjb3VudFByb3ZpZGVyL1Byb2ZpbGVQcm92aWRlclwiO1xuXG5pbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xuICBzcmM/OiBzdHJpbmc7XG4gIHNpemU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gQXZhdGFyKHsgc3JjLCBzaXplIH06IEF2YXRhclByb3BzKSB7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGF2YXRhclNyYyB9ID0gdXNlUHJvZmlsZSgpO1xuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEhhc0Vycm9yKGZhbHNlKTtcbiAgfSwgW2FkZHJlc3MsIHNyYywgYXZhdGFyU3JjLCBzZXRIYXNFcnJvcl0pO1xuXG4gIGlmICghaGFzRXJyb3IgJiYgKHNyYyB8fCBhdmF0YXJTcmMpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbWFnZVxuICAgICAgICBmYWxsYmFjaz17PFNrZWxldG9uQ2lyY2xlIGhlaWdodD17c2l6ZX0gd2lkdGg9e3NpemV9IGZsZXhTaHJpbms9XCIwXCIgLz59XG4gICAgICAgIHNyYz17c3JjIHx8IGF2YXRhclNyY31cbiAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIGFsdD1cIktBUCBBY2NvdW50IEF2YXRhclwiXG4gICAgICAgIG9uRXJyb3I9eygpID0+IHNldEhhc0Vycm9yKHRydWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGlkZW50aWNvbiA9IGNyZWF0ZUF2YXRhcihpZGVudGljb25TdHlsZSwgeyBzZWVkOiBhZGRyZXNzIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpZGVudGljb24gfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO0FBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO0FBQ0EsSUFBQUcsY0FBQSxHQUFBSix1QkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUksZ0JBQUEsR0FBQUosT0FBQTtBQUNBLElBQUFLLGdCQUFBLEdBQUFMLE9BQUE7QUFBc0UsU0FBQU0seUJBQUFDLFdBQUEsZUFBQUMsT0FBQSxrQ0FBQUMsaUJBQUEsT0FBQUQsT0FBQSxRQUFBRSxnQkFBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxXQUFBLFdBQUFBLFdBQUEsR0FBQUcsZ0JBQUEsR0FBQUQsaUJBQUEsS0FBQUYsV0FBQTtBQUFBLFNBQUFSLHdCQUFBWSxHQUFBLEVBQUFKLFdBQUEsU0FBQUEsV0FBQSxJQUFBSSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxXQUFBRCxHQUFBLFFBQUFBLEdBQUEsYUFBQUUsT0FBQSxDQUFBRixHQUFBLHlCQUFBQSxHQUFBLDRCQUFBRyxPQUFBLEVBQUFILEdBQUEsVUFBQUksS0FBQSxHQUFBVCx3QkFBQSxDQUFBQyxXQUFBLE9BQUFRLEtBQUEsSUFBQUEsS0FBQSxDQUFBQyxHQUFBLENBQUFMLEdBQUEsWUFBQUksS0FBQSxDQUFBRSxHQUFBLENBQUFOLEdBQUEsU0FBQU8s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