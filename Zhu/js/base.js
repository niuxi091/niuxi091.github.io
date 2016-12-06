/**
 * Created by Neil on 16/10/7.
 */
function $(fn) {
    if (document.addEventListener) {
        document.addEventListener('DOMCotentLoaded',fn,false);
    }else{
        document.onreadystatechange = function () {
            if (document.readyState == 'complete') {
                fn && fn ();
            }
        }
    }
}
$(function () {
    var oBox = document.getElementById('box');
    var oPh = document.getElementById('ph');
    var oAll = document.getElementById('all');
    var oI = oPh.getElementsByTagName('i')[0];
    oAll.onmouseover = function () {
        oPh.className = 'active';
        oBox.style.display = 'block';
        oI.style.background = 'url("img/wechat1.jpg")';
    };
    oAll.onmouseout = function () {
        oPh.className = '';
        oBox.style.display = 'none';
        oI.style.background = 'url("img/wechat.png")';
    };
    //----------------------
    var oNav = document.getElementById('nav');
    var aEle = oNav.children;
    var sGz = '';
    for(var i = 0; i < aEle.length; i++){
        aEle[i].onmouseover = function () {
            if(this.children.length ==2){
                sGz = this.children[0].className;
                this.children[0].className += ' active';
                var oUl = this.children[1];
                oUl.style.display = 'block';
                oUl.style.zIndex = '1';
                this.children[0].style.zIndex = '2';
                oUl.style.background = '#fff';
            }
        };
        aEle[i].onmouseout = function () {
            if(this.children.length ==2){
                this.children[0].className = sGz;
                var oUl = this.children[1];
                oUl.style.display = 'none';
                oUl.style.zIndex = '';
            }
        };
    }
    //------------吸顶条-----------
    var oHnav = document.getElementById('hnav');
    var oHnav2 = document.getElementById('hnav2');
    var hLeft = oHnav.offsetLeft;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= oHnav.offsetTop){
            oHnav.style.position = 'fixed';
            oHnav.style.top = 0+'px';
            oHnav.style.left =hLeft+'px';
            oHnav.style.zIndex='999';
            oHnav2.style.display = 'block';
        }else{
            oHnav.style.position = 'relative';
            oHnav2.style.display = 'none';
            oHnav.style.zIndex = '';
        }
    };
    //-----------------------------
    var oCity = document.getElementById('city');
    var oCity2 = oCity.children[1];
    oCity.onmouseover = function () {
        oCity2.style.display = 'block';
    };
    oCity.onmouseout = function () {
        oCity2.style.display = 'none';
    };
    //------------------------------
    var oS1 = document.getElementById('s1');
    var oTxt = document.getElementById('txt');
    oTxt.onfocus = function () {
        oS1.style.display = 'none';
    };
    oTxt.onblur = function () {
        oS1.style.display = 'block';
    };
    oS1.onclick = function () {
        oTxt.focus();
    };
    //-------------------------------

    //-------------------------------
    var oBan = document.getElementById('banner');
    var aBs = oBan.getElementsByTagName('span');
    var oOl = oBan.getElementsByTagName('ol')[0];
    var aOli = oOl.getElementsByTagName('li');
    var oBu = oBan.getElementsByTagName('ul')[0];
    var timer = null;
    var n =0;
    function tab(obj,obj2,index) {
        for(var i = 0; i < obj.length; i++){
            obj[i].className = '';
            obj[obj.length-1].className = 'mn';
        }
        obj[index].className += ' acy';
        move(obj2,{left:index * -450},{duration:500,easing:'ease-out'});
    }
    function autoTab() {
        timer = setInterval(function () {
            n++;
            if (n == 6){
                n=0;
            }
            tab(aOli,oBu,n);
        },3000);
    }
    autoTab();
    for(var j = 0; j < aOli.length; j++){
        (function (index) {
            aOli[j].onmouseover = function () {
                n = index;
                tab(aOli,oBu,n);
            };
        })(j);
    }
    oBan.onmouseover = function () {
        clearInterval(timer);
        for(var i = 0; i < aBs.length; i++){
            aBs[i].style.display = 'block';
        }
    };
    oBan.onmouseleave = function () {
        autoTab();
        for(var i = 0; i < aBs.length; i++){
            aBs[i].style.display = 'none';
        }
    };
    aBs[1].onclick = function () {
        n++;
        if(n == 6) n=0;
        tab(aOli,oBu,n);
    };
    aBs[0].onclick = function () {
        n--;
        if(n < 0) n=5;
        tab(aOli,oBu,n);
    };
    //----------------------------------
    (function () {
        var oXx = document.getElementById('xx');
        var aXl = oXx.children;
        for(var i = 0; i < aXl.length;i++){
            aXl[i].onmouseover = function () {
                if (this.children.length == 2){
                    move(this.children[1],{top:0},{duration:200});
                }
            };
            aXl[i].onmouseout = function () {
                if (this.children.length == 2){
                    move(this.children[1],{top:96},{duration:200});
                }
            };
        }
    })();
    (function () {
        var oM51 = document.getElementById('m51');
        var oM52 = document.getElementById('m52');
        var aCard1 = getByClass(oM51,'ca');
        var aCard2 = getByClass(oM52,'ca');
        var oChc1 = getByClass(oM51,'chc');
        var oChc2 = getByClass(oM52,'chc');
        for(var i =0; i < aCard1.length; i++){
            aCard1[i].index = i;
            aCard1[i].onmouseover = function () {
                aCard1[0].className = 'ca tj1';
                aCard1[1].className = 'ca tj2';
                for(var i = 0; i < aCard1.length; i++){
                    oChc1[i].style.display = 'none';
                    oChc1[i].style.opacity = 0;
                }
                this.className += ' on';
                oChc1[this.index].style.display = 'block';
                move(oChc1[this.index],{opacity:1});
            };
        }
        for(var j = 0; j < aCard2.length; j++){
            aCard2[j].index = j;
            aCard2[j].onmouseover = function () {
                aCard2[0].className = 'ca tj1';
                aCard2[1].className = 'ca tj2';
                for(var x = 0; x < aCard2.length; x++){
                    oChc2[x].style.display = 'none';
                    oChc2[x].style.opacity = 0;
                }
                this.className += ' on';
                oChc2[this.index].style.display = 'block';
                move(oChc2[this.index],{opacity:1});
            };
        }
    })();
    //-------------------------------------
    (function () {
        var oRl = document.getElementById('r-lis');
        var oCa = getByClass(oRl,'csc')[0];
        var aCac = oCa.getElementsByTagName('li');
        var oCc = getByClass(oRl,'cscc')[0];
        var aCcc = oCc.getElementsByTagName('li');
        for(var i = 0; i < aCac.length; i++){
            aCac[i].index = i;
            aCac[i].onmouseover = function () {
                for(var i = 0; i < aCac.length; i++){
                    aCac[i].className = '';
                    aCcc[i].style.display = 'none';
                }
                aCac[aCac.length-1].className = 'last ';
                this.className += 'on';
                aCcc[this.index].style.display = 'block';
            };
        }
    })();
    (function () {
        var oFk = document.getElementById('fk');
        var oFkc = document.getElementById('fkc');
        var oCl = oFkc.getElementsByTagName('span')[0];
        oFk.onmouseover = function () {
            move(oFk,{left:0},{easing:'ease-out'});
        };
        oFk.onmouseout = function () {
            move(oFk,{left:-116},{easing:'ease-out'});
        };
        oFk.onclick = function () {
            setTimeout(function () {
                move(oFkc,{left:0},{easing:'ease-out'});
            },1000);
        };
        oCl.onclick = function () {
            move(oFkc,{left:-1280},{easing:'ease-out'});
        };
    })();

})
    
function findInArr(item,arr) {
    for(var i = 0; i < arr.length; i++)
        if(item == arr[i]) return true;
    return false;
}
function getByClass(oParent,sClass) {
    if (document.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aEle = oParent.document.getElementsByTagName('*');
        var arr = [];
        for(var i = 0; i < aEle.length; i++){
            var tmp = aEle[i].className.split(' ');
            if (findInArr(sClass,tmp)) arr.push(aEle[i]);
        }
        return arr;
    }
}

    
