define(function (require,exports,module) {
    exports.ajax = function () {
        function ml() {
            var oC = document.getElementById("content");
            var oS = document.getElementById("self");
            oC.style.marginLeft = oS.offsetWidth + "px";
        };
        ml();
        window.onresize = function () {
            ml();
        }
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
                var data = data.split('!');
                for (var i = 0; i < data.length;i++){
                    var a = JSON.parse(data[i]);
                    var template = '<div class="col-xs-12 col-md-4" style="margin-bottom: 30px;">'+
                            '<div class="thumbnail">'+
                            '<img src="'+a.img+'" alt="...">'+
                            '<div class="caption">'+
                            '<h3>'+a.title+'</h3>'+
                            '<p>'+a.content+'</p>'+
                            '<p>'+
                            '<a href="'+a.href+'" target="_blank" class="btn btn-primary" role="button">查看案例</a>'+
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
