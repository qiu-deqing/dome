/*
*  跨浏览器的javascript库 dome，调用方法尽量遵循ecma及w3c规范
*  第一部分定义dome，Dome声明
*  第二部分定义对ecma及w3c的支持
*  第三部分定义dome扩展
*  第四部分定义Dome类包含属性及方法
*  作者：qiudeqing
*/
/**
* @module dome
**/
(function (window, undefined) {

  /*
  * 第一部分：定义dome，Dome声明
  **/
  var dome = {};

  /**
  * 包含指定dom元素的包装类
  * @class Dome
  * @constructor
  **/
  function Dome(elements) {
    var i,
      len;
    for (i = 0, len = elements.length; i < len; ++i) {
      this[i] = elements[i];
    } // end for
    this.length = len;
  } // end Dome()
  
  Dome.fn = Dome.prototype = {
    constructor: Dome
  }; // end Dome.prototype
  
  /*
  * 第二部分：处理浏览器对ECMAScript及w3c的支持
  **/
  /**
  * 检查Array.prototype.forEach()，提供兼容版本
  * JavaScript1.6, ECMAScript 5th
  * @method Array.prototype.forEach
  * @param fn {function} 对数组每一个元素调用的函数fn(d,i,array)
  * @param scope {Object} fn调用的this
  * @chainable
  **/
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
      "use strict";
      var i, len;
      for (i = 0, len = this.length; i < len; ++i) {
        if (i in this) {
          fn.call(scope, this[i], i, this);
        } // end if
      } // end for
    }; // end forEach()
    return this;
  } // end if: forEach
  
  /**
  * 检查Array.prototype.map(callback, [,thisArg])，提供兼容版本
  * JavaScript1.6 ECMAScript 5th
  * @method Array.prototype.map
  * @param callback {Function} 针对每一个非空元素调用，使用返回值构造新数组，原数组元素为空
  *                            对应生成的位置为空
  * @param thisArg {Object} callback调用上下文
  * @return {Array} 返回callback返回元素组成的数组
  **/
  if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
      var results,
        item,
        i,
        len;
      
      len = this.length;
      results = new Array(len);
      for (i = 0; i < len; ++i) {
        if (i in this) {
          results[k] = callback.call(thisArg, this[i], i, this);
        } // end if
      } // end for
      return results;
    }; // end map()
  } // end if
  
  /*
  * 第三部分：对dome全局对象扩展
  **/
  /**
  * 以多各类扩展第一个类，如果只含一个参数，则扩展调用者，不支持深扩展
  * @method dome.extend
  * @param target {Object} 需要被扩展的对象，如果只传入一个参数，使用target扩展dome
  * @param obj1...objN {Object} 一个到多个对象，用于对target进行扩展
  * @return target {Object} 返回被扩展的对象
  **/
  dome.extend  = function () {
    var target = arguments[0] || {},
      options,
      name,
      i = 1,
      length = arguments.length;
    
    if (typeof target !== "object") {
      target = {};
    } // end if
    if (length === i) {
      target = this;
      --i;
    } // end if
    
    for ( ; i < length; ++i) {
      // only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
      
        for (name in options) {
          target[name] = options[name];
        } // end for-in: loop all properties
        
      } // end if
    } // end for: loop all objects
    
    return target;
  }; // end extend()
  
  /**
  * 返回包含所有目标元素的Dome对象
  * @method dome.selectAll
  * @param selector {string} css选择器选择元素
  * @param selector {Array Like Object} 元素集合
  * @param selector {Element} 单个元素
  * @return 包含目标元素的Dome对象
  **/
  dome.selectAll = function (selector) {
    var elements;
    if (typeof selector === "string") {
      elements = document.querySelectorAll(selector);
    } // end if
    else if (dome.isArrayLike(selector)) {
      elements = selector;
    } // end else if
    else {
      elements = [selector]
    } // end else
    return new Dome(elements);
  } // end selectAll()
  
  /**
  * @method dome.isFunction
  * @param obj {Any} 需要判断是否为函数的对象
  * @return {boolean} ture：是函数，false：不是函数
  **/
  dome.isFunction = function (obj) {
    return (typeof obj) === "function";
  }; // end isFunction()
  
  /**
  * @method dome.isArray
  * @param obj {Object} 需要检查是否为数组的对象
  * @return {boolean} true：是数组；false：不是数组
  **/
  dome.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }; // end isArray()
  
  /**
  * 判断传入参数是否为类数组：如果对象包含合法length属性，则认为其是类数组对象
  * @method dome.isArrayLike
  * @param o {Object} 需要检查的对象
  * @return {boolean} true：传入对象是类数组对象；false：传入对象不是类数组对象
  **/
  dome.isArrayLike = function (o) {
    if (o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296) { // length < 2^32
        return true;
    } else {
      return false;
    } // end else
  }; // end isArrayLike()
  
  /**
  * 以数组array元素依次调用操作函数fn,scope为fn调用上下文
  * @method dome.forEach
  * @param array {Array} 需要处理的数组
  * @param fn {Function} 对数组元素调用的操作
  * @param scope {Object} fn调用上下文
  * @chainable
  **/
  dome.forEach = function (array, fn, scope) {
    if (!dome.isArrayLike(array)) {
      throw TypeError( array + " is not array like");
    } // end if
    return Array.prototype.forEach.call(array, fn, scope);
  }; // end forEach()
  
  /**
  * 返回对目标数组元素调用fn得到的返回值组成的数组
  * @method dome.map
  * @param array {Array} 需要映射的数组
  * @param fn {function} 对数组元素进行映射的函数
  * @param scope {Object} fn调用时的上下文
  * @return {Array} 映射后生成的数组
  **/
  dome.map = function (array, fn, scope) {
    if (!dome.isArrayLike(array)) {
      throw TypeError( array + " is not array like");
    } // end if  
    return Array.prototype.map.call(array, fn, scope);
  }; // end map()
  
  
  /*
  * 第四部分：定义Dome方法及属性
  **/
  Dome.fn.extend = dome.extend;
  Dome.fn.map = function (callback, scope) {
    return Array.prototype.map.call(this, callback, scope);
  }; // end map()
  Dome.fn.forEach = function (callback, scope) {
    this.map(callback, scope);
    return this;
  }; // end froEach()
  
  window.dome = dome;
})(window);













