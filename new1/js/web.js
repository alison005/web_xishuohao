jQuery(".slide1").slide({mainCell:".slide1images .uls",autoPlay:true,delayTime:1000,vis:1,effect:"fade"});
jQuery(".slide2").slide({mainCell:".slide2images .uls",titCell:".slide2hd .uls li",autoPlay:true,delayTime:1000,vis:1,effect:"fade"});

jQuery(".slide3").slide({mainCell:".slide3images .uls",autoPlay:true,delayTime:1000,vis:1,effect:"fade"});
jQuery(".slide4").slide({mainCell:".slide4images .uls",autoPlay:true,delayTime:1000,vis:1,effect:"fade"});
jQuery(".slide5").slide({mainCell:".slide5images .uls",autoPlay:true,delayTime:1000,vis:1,effect:"fade"});



var myVid=document.getElementById("Music");

//

function ToggleMusic(){
	if(myVid.paused){
		$("#MusicToggleButton").html('点击暂停音乐');
		myVid.play();
	}else{
		$("#MusicToggleButton").html('点击播放音乐');
		myVid.pause();
	}
}

$(document).ready(function(){
	
	$("#PhotoShowGundong1").jcarousellite_gundong({btn:1,list:".PictureList1 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong2").jcarousellite_gundong({btn:1,list:".PictureList2 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})
	$("#PhotoShowGundong3").jcarousellite_gundong({btn:1,list:".PictureList3 li","visible":1,"auto":2500,"speed":300,"afterEnd":function(){}})

})

//滚动
$.fn.jcarousellite_gundong = function(options) {
    var self = $(this);
    if (self.length === 0) {
        return;
    }

    var items = options.list, liobj = self.find(items), liobj_parent = liobj.parent(), liobj_len = liobj.length, config;

    if (liobj_len <= options.visible) {
        self.css({
            "margin": "0 auto",
            "width": liobj_parent.outerWidth()
        })
        return;
    } else {
        var width = liobj.outerWidth()
          , margin = parseInt(liobj.css("margin-left")) + parseInt(liobj.css("margin-right"))
          , liwidth = width + margin;

        self.css({
            "overflow": "visible",
            "margin-left": "auto",
            "margin-right": "auto",
            "width": liwidth * options.visible
        })
    }

    if (liobj.is("div")) {
        liobj.wrap("<li></li>");
        self.find("li").wrapAll("<ul class='templist'></ul>");
        liobj = self.find(".templist li");
        self.find(".templist").wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
    } else {
        liobj_parent.wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
    }

    if (options.btn !== 0) {
        if (!options.circular) {
            self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left" ><span></span></a>');
        } else {
            self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>');
        }
    }

    self.find(".gundong").each(function(index) {
        var myself = $(this);
        config = {
            btnPrev: myself.find(".move_left"),
            btnNext: myself.find(".move_right"),
            visible: 1,
            auto: 2500,
            speed: 300
        };
        if (options.btn === 0) {
            $.extend(config, {
                btnPrev: null,
                btnNext: null
            });
        }
        $.extend(config, options);
        myself.find(".jCarouselLite:eq(" + index + ")").jCarouselLite(config);
    })
}


