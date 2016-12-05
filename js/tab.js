define(function (require,exports,module) {
    var bub = require('bubble');
    exports.tab = function () {
        $('#tab li').click(function () {
            if ($('.sko').offset().left==0) {
                var n = bub.div.length;
                for(var x =0; x < n; x++){
                    bub.div[x].style.animation = '';
                }
            }else{
                bub.bubble();
            }
            $('.bb').animate({
                left : this.offsetWidth * $(this).index()
            })
            $('ol').animate({left:-($(this).index())*$('.card ol li').eq(0).width()});
        })

    }
})
