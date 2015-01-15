(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/tmcw/src/people-hose/index.js":[function(require,module,exports){
var leftpad = require('leftpad');
function getAPerson() {
    return 'guy-' + leftpad(~~(Math.random() * 10), 8) + '.png';
}

var last = +new Date();
document.body.onmousemove = function(e) {
    if (e.button || e.which && +new Date() - last > 100) {
        var im = document.body.appendChild(document.createElement('img'));
        im.src = getAPerson();
        im.style.position = 'absolute';
        im.style.pointerEvents = 'none';
        im.style.left = e.clientX + 'px';
        im.style.height = '300px';
        im.style.marginLeft = '-150px';
        im.style.top = e.clientY + 'px';
        last = +new Date();
        var images = document.getElementsByTagName('img');
        var toSort = [];
        for (var i = 0; i < images.length; i++) {
            toSort.push([parseInt(images[i].style.top.replace('px', ''), 10), images[i]]);
        }
        toSort.sort(function(a, b) { return a[0] - b[0]; });
        toSort.forEach(function(a, i) {
            a[1].style.zIndex = i;
        });
    }
};

},{"leftpad":"/Users/tmcw/src/people-hose/node_modules/leftpad/index.js"}],"/Users/tmcw/src/people-hose/node_modules/leftpad/index.js":[function(require,module,exports){
module.exports = function(str, width, char) {
    char = char || '0';
    str = str.toString();
    while (str.length < width) str = char + str;
    return str;
};

},{}]},{},["/Users/tmcw/src/people-hose/index.js"]);
