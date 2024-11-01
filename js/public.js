var _protocol = (('https:' == document.location.protocol) ? 'https:': 'http:');
$(".all_games_nav li").hover(function() {
    var _index = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $(".all-game-js").hide().eq(_index).show();
}).eq(0).trigger('hover');

// 右侧导航
$(function() {
    var lastRmenuStatus = false;
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top > 200) {
            $(".float-menu").data("expanded", true);
        } else {
            $(".float-menu").data("expanded", false);
        }
        if ($(".float-menu").data("expanded") != lastRmenuStatus) {
            lastRmenuStatus = $(".float-menu").data("expanded");
            if (lastRmenuStatus) {
                $(".fm-m5").slideDown();
            } else {
                $(".fm-m5").slideUp();
            }
        }
    });
});

// 返回顶部滑动
function gotoTop(acceleration, stime) {
    acceleration = acceleration || 0.1;
    stime = stime || 10;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
    var speeding = 1 + acceleration;
    window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

    // 如果距离不为零, 继续调用函数
    if (x > 0 || y > 0) {
        var run = "gotoTop(" + acceleration + ", " + stime + ")";
        window.setTimeout(run, stime);
    }
}

// 搜索下来
$('.top-select').focus(function() {
    $('.search-rem').show();
});
$('.top-select').blur(function() {
    setTimeout(function() {
        $('.search-rem').hide();
    },
    120);
});
// 搜索下拉列表
$(".ss-xl li").hover(function() {
    var _index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
}).eq(0).trigger('hover');

//顶部导航
function nav() {
    if (document.getElementById('nav-box')) {
        var $liCur = $(".nav-box>li.cur"),
        curP = $liCur.position().left,
        curW = $liCur.outerWidth(true),
        $slider = $(".nav-line"),
        $targetEle = $(".nav-box>li:not('.last')"),
        $navBox = $(".nav-box");
        $slider.stop(true, true).animate({
            "left": curP,
            "width": curW
        });
        $targetEle.mouseenter(function() {
            var $_parent = $(this); //.parent(),
            _width = $_parent.outerWidth(true),
            posL = $_parent.position().left;
            $slider.stop(true, true).animate({
                "left": posL,
                "width": _width
            },
            "fast");
        });
        $navBox.mouseleave(function(cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({
                "left": cur,
                "width": wid
            },
            "fast");
        });
    }
};
nav();
