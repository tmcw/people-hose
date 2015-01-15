var getImages = require('google-images'),
    queue = require('queue-async'),
    request = require('request'),
    path = require('path'),
    fs = require('fs'),
    leftpad = require('leftpad'),
    exec = require('child_process').exec,
    _ = require('lodash');

var q = queue(1);
var q2 = queue(1);

// collect the men
_.range(0, 10).forEach(function(page) {
    q.defer(function(callback) {
        getImages.search({
            'for': 'white businessman',
            page: page,
            callback: function(err, im) {
                callback(null, im);
            }
        });
    });
});

q.awaitAll(function(err, res) {
    _.flatten(res).forEach(function(r, i) {
        var filename = 'guy-' + leftpad(i, 8) + path.extname(r.url);
        request(r.url)
            .pipe(fs.createWriteStream(filename))
            .on('end', function() {
                exec('gm mogrify ' + filename + ' -format png -transparent white -fuzz 5');
        });
    });
});
