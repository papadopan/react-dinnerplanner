'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ReactFontFace(WrappedComponent, config) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(FontFace, _Component);

    function FontFace(props) {
      _classCallCheck(this, FontFace);

      //test for minimum and type to use
      //file case
      var _this = _possibleConstructorReturn(this, (FontFace.__proto__ || Object.getPrototypeOf(FontFace)).call(this, props));

      if (!config.google && !config.file) {
        throw Error('no fonts configured for react-font-face');
      }

      _this.state = {
        google: config.google,
        file: config.file

        // THE SHAPE OF EAH OBJECT WITHIN ARRAY
        // fontFamily: config.fontFamily,
        // fontStyle:  config.fontStyle,
        // fontWeight: config.fontWeight,
        // unicodeRange: config.unicodeRange,
        // file: config.file,
        // fontType: config.fontType,
        // fileLocal: config.fontLocal
      };
      return _this;
    }

    _createClass(FontFace, [{
      key: 'render',
      value: function render() {
        var _state = this.state,
            google = _state.google,
            file = _state.file;

        // BUILD THE IMPORT FOR GOOFLE FONTS

        var googleImport = '';
        if (google) {
          var googleFontImportString = '';
          for (var item in google) {
            // TODO: dont add pipe on last item - doesnt break file request but Google doesnt use it in their wizard
            googleFontImportString += google[item].replace(/ /g, "+") + '|';
          }
          googleImport = '@import url(\'https://fonts.googleapis.com/css?family=' + googleFontImportString + '\');';
        }

        var fontList = '';
        if (file) {
          var fontListArray = file.map(function (item) {
            return '@font-face {\n              font-family: \'' + item.fontFamily + '\';\n              font-style: \'' + item.fontStyle + '\';\n              font-weight: \'' + item.fontWeight + '\';\n              src: local(' + item.fileLocal + '), url(' + item.file + ') format(\'' + item.fontType + '\');\n              unicode-range: \'' + item.unicodeRange + '\';\n            }';
          });
          fontList = fontListArray.join("");
        }
        // BUILD THE DECLARATION FOR LOCAL FILES

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
              'style',
              { type: 'text/css' },
              ' \n                ' + googleImport + '\n                ' + fontList + '\n            '
            )
          ),
          _react2.default.createElement(WrappedComponent, this.props)
        );
      }
    }]);

    return FontFace;
  }(_react.Component), _class.propTypes = {
    google: _propTypes2.default.array,
    file: _propTypes2.default.array
  }, _temp;
}

exports.default = ReactFontFace;