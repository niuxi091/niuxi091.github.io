define(function (require,exports,module) {
    exports.ajax = function () {
        var oSide =document.querySelector('.col-md-3');
        var a = document.documentElement.clientHeight;
        oSide.style.height = a + 'px';
        ////////////////////////////////
        var $list = $('.lst');
        $('.head-por').on('mouseover mouseout',function () {
            $('h1').toggleClass('animated headShake');
        });
        $.ajax({
            url : 'data.txt',
            cache : false,
            success : function (data) {
                var data = eval('('+data+')');
                for (var i = 0; i < data.length;i++){
                    var template = '<div class="col-xs-12 col-md-4" style="margin-bottom: 30px;">'+
                            '<div class="thumbnail">'+
                            '<img src="'+data[i].img+'" alt="...">'+
                            '<div class="caption">'+
                            '<h3>'+data[i].title+'</h3>'+
                            '<p>'+data[i].content+'</p>'+
                            '<p>'+
                            '<a href="'+data[i].href+'" target="_blank" class="btn btn-primary" role="button">查看案例</a>'+
                            '</p>'+
                            '</div>'+
                            '</div>'+
                            '</div>';
                    $list.append(template);
                }
            }
        })
    }
})
