/**
 * Created by Neil on 16/9/29.
 */
function getStyle(obj, name) {
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
}
function move(obj, json, options) {
    clearInterval(obj.timer);
    options = options || {};
    options.easing = options.easing || 'linear';
    options.duration = options.duration || 800;
    var start = {};
    var count = Math.floor(options.duration / 30);
    var dis = {};
    for (var name in json) {
        start[name] = parseFloat(getStyle(obj, name));
        dis[name] = json[name] - start[name];
    }
    var n = 0;
    obj.timer = setInterval(function () {
        n++;
        for (var name in json) {
            switch (options.easing) {
                case 'linear':
                    var a = n / count;
                    var cur = start[name] + dis[name] * a;
                    break;
                case 'ease-in':
                    var a = n / count;
                    var cur = start[name] + dis[name] * a * a * a;
                    break;
                case 'ease-out':
                    var a = 1 - n / count;
                    var cur = start[name] + dis[name] * (1 - a * a * a);
            }
            if (name == 'opacity') {
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:' + (cur * 100) + ')';
            } else {
                obj.style[name] = cur + 'px';
            }
        }
        if (n == count) {
            clearInterval(obj.timer);
            options.complete && options.complete();
        }
    }, 30);
}