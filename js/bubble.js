
define(function (require,exports,module) {
    var oLi = document.querySelector('.skill');
    var aDiv = oLi.querySelectorAll('div');

    function rnd(n,m) {
        return Math.random()*(m-n)+n;
    }

    function bubble1() {
        for (var i = 0; i < aDiv.length; i++) {
            aDiv[i].style.animation = 'biu 1s 1';
            (function (i) {
                aDiv[i].addEventListener('animationend',function () {
                    this.style.animation = 'float '+rnd(2,5).toFixed(2)+'s infinite';
                })
            })(i);
        }
    }

    exports.div = aDiv;
    exports.bub = function () {

        if (oLi.offsetLeft>=0) {
            bubble1();
        }
    }
    exports.bubble = bubble1;
})
