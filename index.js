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
