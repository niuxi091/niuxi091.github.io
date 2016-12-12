function domReady(fn) {
    if (document.addEventListener){
        document.addEventListener('DOMContentLoaded',fn,false);
    }else{
        document.onreadystatechange = function () {
            if (this.readyState == 'complete'){
                fn && fn();
            }
        }
    }
}

function banner(obj) {
    obj.addEventListener('touchstart',function (ev) {
        var disX = ev.targetTouches[0].clientX - obj.offsetLeft;
        obj.addEventListener('touchmove',function (ev) {
            var x = ev.targetTouches[0].clientX - disX;
            obj.style.left = x + 'px';
        })
    },false);

}

function init() {
    var oOl = document.querySelector('ol');
    var content = document.querySelector('.content');
    var arr = ['#e00202','#ff4800','#ff7300','#ff9d00','#ffa800','#ffb400','#ffba00','#fcd000','#ffd719','#ffe152'];
    var i;
    for (i = 0; i < 10; i++){
        var oLi = document.createElement('li');
        oLi.innerHTML ='<div class="num">'+(i+1)+'</div>'+
            '<div class="img">'+
            '<img src="img/g'+(i+1)+'.jpg" alt="商品'+(i+1)+'">'+
            '</div>'+
            '<div class="con">'+
            '<p>已售68432<br/><span>2.3</span>折 ¥<b>299</b></p>'+
            '<div>¥51</div>'+
            '</div>';
        oOl.appendChild(oLi);
    }
    var aNum = document.querySelectorAll('.num');
    for( i = 0; i < aNum.length;i++){
        aNum[i].style.backgroundColor = arr[i];
    }
    var arr2 = ['精彩商品  逛起来！','品质生活  逛起来！','品牌折扣  逛起来！'];
    var arr3 = ['商品团','生活团','品牌团'];
    var arr4 = ['服饰','配饰','美妆','鞋包','食品','家居','运动','电器','百货','母婴','数码','更多','美食','教育','酒店','电影','生活服务','卡券','摄影','粮油生鲜','门票','休闲娱乐','','','七匹狼','粉红女…','卓诗尼','收纳博士','惠氏','夏乐','帕克伦','古今','九牧','诺奥','红豆','曼秀雷敦'];
    for(i = 0; i < 3; i++){
        var oDl = document.createElement('dl');
        var oDiv = document.createElement('div');
        oDl.innerHTML ='<dt class="dt'+i+'">'+arr3[i]+'</dt>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>'+
            '<dd></dd>';
        oDiv.innerHTML = arr2[i];
        oDiv.classList.add('box');
        content.appendChild(oDl);
        content.appendChild(oDiv);
    }
    var aDd = document.querySelectorAll('dd');
    var oIn;
    for (i = 0; i < aDd.length; i++){
        aDd[i].innerHTML = arr4[i];
        oIn = aDd[i].innerHTML;
        if (oIn == '服饰'||oIn == '家居'||oIn == '电器'||oIn == '美食'||oIn == '卡券'||oIn == '粮油生鲜'||oIn == '卡券'||oIn == '粉红女…'||oIn == '收纳博士'||oIn == '九牧'){
            aDd[i].classList.add('on');
        }
    }
}