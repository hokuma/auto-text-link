'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoTextLink = (function (_Component) {
  _inherits(AutoTextLink, _Component);

  function AutoTextLink() {
    _classCallCheck(this, AutoTextLink);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AutoTextLink).apply(this, arguments));
  }

  _createClass(AutoTextLink, [{
    key: 'extractUrls',
    value: function extractUrls(text) {
      var urlPattern = /https?:\/\/[a-zA-Z0-9_:@!~*';/?&=$%#\-\.\(\)\+]+/g;
      return text.match(urlPattern);
    }
  }, {
    key: 'replaceUrls',
    value: function replaceUrls(text, urls, linkProps) {
      var subtractedText = text;
      var elements = [];
      forEach(urls, function (url) {
        var startIndex = subtractedText.indexOf(url);
        var endIndex = startIndex + url.length;
        var beforeUrlText = subtractedText.substring(0, startIndex);
        elements.push(beforeUrlText);
        elements.push(_react2.default.createElement(
          'a',
          _extends({}, linkProps, { href: url }),
          url
        ));
        subtractedText = subtractedText.substring(endIndex);
      });
      elements.push(subtractedMessage);
      return elements;
    }
  }, {
    key: 'render',
    value: function render() {
      var text = this.props.pchildren;
      var urls = this.extractUrls(text);
      var _props = this.props;
      var target = _props.target;
      var className = _props.className;

      var linkProps = {
        target: target,
        className: className
      };

      return _react2.default.createElement(
        'span',
        null,
        this.replaceUrls(text, urls, linkProps)
      );
    }
  }]);

  return AutoTextLink;
})(_react.Component);

exports.default = AutoTextLink;