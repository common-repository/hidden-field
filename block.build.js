/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp = wp,
    apiFetch = _wp.apiFetch;
var Fragment = wp.element.Fragment;
var RichText = wp.editor.RichText;


registerBlockType('mdlr/hidden-field', {
    title: __('Hidden field'),
    icon: 'hidden',
    category: 'common',
    attributes: {
        // Necessary for saving block content.
        hidden_field_val: {
            type: "string",
            placeholder: "Add hidden field value"
        },
        hidden_field_name: {
            type: "string",
            placeholder: "Add hidden field name"
        }
    },
    edit: function edit(props) {
        var _props$attributes = props.attributes,
            hidden_field_val = _props$attributes.hidden_field_val,
            hidden_field_name = _props$attributes.hidden_field_name,
            setAttributes = props.setAttributes;

        return wp.element.createElement(
            Fragment,
            null,
            ' ',
            wp.element.createElement(RichText, { tagName: 'p',
                placeholder: __("Enter hidden field name..."),
                value: hidden_field_name,
                onChange: function onChange(value) {
                    return setAttributes({ hidden_field_name: value });
                },
                keepPlaceholderOnFocus: true
            }),
            wp.element.createElement(RichText, { tagName: 'p',
                placeholder: __("Enter hidden field value..."),
                value: hidden_field_val,
                onChange: function onChange(value) {
                    return setAttributes({ hidden_field_val: value });
                },
                keepPlaceholderOnFocus: true
            }),
            ' '
        );
    },
    save: function save(props) {
        var _props$attributes2 = props.attributes,
            hidden_field_val = _props$attributes2.hidden_field_val,
            hidden_field_name = _props$attributes2.hidden_field_name,
            setAttributes = props.setAttributes;

        return wp.element.createElement('input', { type: 'hidden',
            value: hidden_field_val,
            name: hidden_field_name
        });
    }
});

/***/ })
/******/ ]);