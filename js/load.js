$(document).ready(function(){
		if ($("#banner").length>0)
		{
				$("#banner").ZHYslider({
						fullscreen	:true,
						arrow		:true,		
						speed: 1500, 
						space: 6000,
						auto: 7000, //自动滚动
						affect:'fade_animate',
						ctag: '.Slide_'
				})
			
			
		}
	$("#menu ul").floatlines()
	$.fn.gamelist();
	$.fn.hovers();

})
//悬停效果
$.fn.hovers=function(){
	
	//进入官网悬停
	$("._btn_go").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "self",					//应用对象
						  "",//初始CSS
						  "margin-left:40px;width:98px;",		//mouseenter动画CSS
						  "margin-left:0;width:178px;",			//mouseleave动画css
						  "{duration:1300,easing:'easeOutElastic'}",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
	//游戏悬停
	$(".games").append('<span class="border_top"></span><span class="border_right"></span><span class="border_bottom"></span><span class="border_left"></span>')
	$(".games").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "opacity:0.84;width:120%;height:120%;margin-left:-10%;margin-top:-9.1%;",		//mouseenter动画CSS
						  "opacity:1;width:100%;height:100%;margin-left:0;margin-top:0;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
					  ,[
						  ".photo",					//应用对象
						  "",//初始CSS
						  "margin-bottom:25px;",		//mouseenter动画CSS
						  "margin-bottom:15px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],[
						  ".list",					//应用对象
						  "",//初始CSS
						  "padding-top:38px;",		//mouseenter动画CSS
						  "padding-top:48px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
					  ,[
						  ".border_top",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_bottom",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_left",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_right",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "700",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ],
				  set_class:"hover_games"
				}
				
			)
	
	$(".btn_ewm").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".ewm",					//应用对象
						  "display:block;opacity:0;top:120%;",//初始CSS
						  "opacity:1;top:100%;",		//mouseenter动画CSS
						  "opacity:0;top:120%;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
	$(".news").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "self",					//应用对象
						  "",//初始CSS
						  "top:10px;",		//mouseenter动画CSS
						  "top:0px;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
}
function swiperAnimate(a) {
	clearSwiperAnimate(a.parent());
	var b = a.find(".ani");
	for (i = 0; i < b.length; i++) 
	{
					b[i].style.visibility 	= 	"visible"
					effect 					= 	b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : ""
					if (effect.indexOf("|")!=-1){
						effect=effect.split("|")[0]
					}
					
					if (b[i].className.indexOf(effect)==-1){
						b[i].className 			= 	b[i].className + " " + effect + " " + "animated"
					}else{
						b[i].className 			= 	b[i].className + "animated"
					}
					style 					= 	b[i].attributes["style"].value
					duration 				= 	b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : ""
						
					if (duration.indexOf("|")!=-1){
						duration=duration.split("|")[0]
					}
					duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";")
					delay 					= 	b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : ""
				if (delay.indexOf("|")!=-1){
					delay=delay.split("|")[0]
				}
					
					delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";")
					b[i].setAttribute("style", style)
	}
}
function clearSwiperAnimate(obj) {
	for (allBoxes = obj.find(".ani"), i = 0; i < allBoxes.length; i++)
	{
			 allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value)
			 allBoxes[i].style.visibility = "hidden"
			 allBoxes[i].className = allBoxes[i].className.replace("animated", " ")
			 allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value,effect.indexOf("|")==-1? false: effect=effect.split("|")[0], allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
	}
}

$.fn.gamelist=function(){
	var time_delay	=	null,
		time_delay2	=	null,
		GameList	=	$("#GameList"),
		top			=	$("#top"),
		btnmore		=	$("#more");
		
					if (typeof($.fn.hover_animate)!="undefined"){
							$("#GameList ul li").find(".photo").append('<span class="border_top"></span><span class="border_right"></span><span class="border_bottom"></span><span class="border_left"></span>');	
							$("#GameList ul li").hover_animate(
										{
										  aniobj:
										  [
											 
											  [
												  "self",					//应用对象
												  "",//初始CSS
												  "top:-12px;",		//mouseenter动画CSS
												  "top:0;",			//mouseleave动画css
												  "200",					//mouseenter 时间
												  "200"						//mouseleave 时间
											  ],[
												  ".border_top",					//应用对象
												  "",//初始CSS
												  "width:100%;left:0;",		//mouseenter动画CSS
												  "width:0px;left:50%;",			//mouseleave动画css
												  "600",					//mouseenter 时间
												  "300"						//mouseleave 时间
											  ],
											  [
												  ".border_bottom",					//应用对象
												  "",//初始CSS
												  "width:100%;left:0;",		//mouseenter动画CSS
												  "width:0px;left:50%;",			//mouseleave动画css
												  "600",					//mouseenter 时间
												  "300"						//mouseleave 时间
											  ],
											  [
												  ".border_left",					//应用对象
												  "",//初始CSS
												  "height:100%;top:0;",		//mouseenter动画CSS
												  "height:0px;top:50%;",			//mouseleave动画css
												  "600",					//mouseenter 时间
												  "300"						//mouseleave 时间
											  ],
											  [
												  ".border_right",					//应用对象
												  "",//初始CSS
												  "height:100%;top:0;",		//mouseenter动画CSS
												  "height:0px;top:50%;",			//mouseleave动画css
												  "600",					//mouseenter 时间
												  "300"						//mouseleave 时间
											  ]
										  ]
										}
										
									)
					}
		
			/*悬停效果*/
			$('body').on("mouseenter",btnmore.selector,function(){
					var self=$(this)
					clearTimeout(time_delay)	
					time_delay=setTimeout(function(){
								if(!self.is(":animated"))
								{
									self.addClass("hovermore");
									GameList.css({"display":"block","opacity":0}).animate({"opacity":1,"height":"372px"},{duration:800,easing:'easeInOutExpo'});
								}
					},100)
				
			}).on('mouseleave',btnmore.selector,function(){
				   clearTimeout(time_delay)	;
				   time_delay2	=	setTimeout(function(){
							var self=$(this)
							if (self.is(".hovermore"))
							{		
									GameList.animate({"height":"0"},300);
									self.removeClass("hovermore");
							}
					  })
			})
		
			$("body").on("mouseenter",GameList.selector,function(){
					clearTimeout(time_delay2);
					GameList.bind("mouseleave",function(){
						btnmore.removeClass("hovermore");
						$(this).stop(true,false).animate({"height":"0"},300);
					});
			});
	
};
//浮动线条
	$.fn.floatlines=function(){
		var obj			=	$(this),
			times		=	300,
			delaytime	=	null;
		if (obj.length===0){return;}
			obj.css("position","relative");
			
			
		obj.each(function(index, element) {
			var tab_obj		=	$(this),
			 	li			=	tab_obj.find("li.change");
				
			if (li.length>0)
			{
				tab_obj.find("li:last-child").after("<span class='lines'></span>");
				
				var width	=	li.outerWidth(),
					lileft	=	li.position().left+parseInt(li.css("margin-left")),
					lineobj	=	tab_obj.find(".lines");
					
					lineobj.css({"width":width,"left":lileft});
				
					tab_obj.find("li")
					.bind("mouseenter",function(){
						
							clearTimeout(delaytime)
							var myself		=	$(this),
								thiswidth	=	myself.outerWidth(),
								left		=	myself.position().left+parseInt(myself.css("margin-left"));
								lineobj.stop(true,false).animate({"width":thiswidth,"left":left},times);
					})
					.bind("mouseleave",function(){
						var myself		=	$(this);
							delaytime=setTimeout(function(){
									if (!myself.is(".change"))
									{
									var changeobj	=	myself.siblings(".change"),
										 left		=	changeobj.css("position","static").position().left+parseInt(changeobj.css("margin-left")),
										 width		=	changeobj.outerWidth();
										 lineobj.stop(true,false).animate({"width":width,"left":left},times);
									}
									
							
							},200)
					})
					
				
			}
		});	
	}

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});


$.fn.hover_animate=function(obj){var time_delay=null,runlist=[],runlist_end=[],create_var=[],set_var=[],self=$(this);if(self.length===0||obj.aniobj.length===0){return}if(obj.set_class===""||typeof(obj.set_class)==="undefined"){$.extend(obj,{set_class:"hover"})}if(typeof(obj.delaytime)!=="number"||typeof(obj.delaytime)==="undefined"){$.extend(obj,{delaytime:100})}var fn={csschange:function(val){val=$.trim(val);if(val===""){return""}if(val.indexOf("{")<0||val.indexOf("}")<0){val=$.trim(val);var last_fh=val.lastIndexOf(";");if(last_fh+1===val.length){val=val.substring(0,last_fh);val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}else{val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}}return $.trim(val)}};$.each(obj.aniobj,function(index,val){if(val.length<6){return}var setobj=val[0],setobj_=setobj.replace(/\.|\ |\>/g,""),animate_css=fn.csschange(val[1]),animate_start=fn.csschange(val[2]),animate_end=fn.csschange(val[3]),animate_easing=val[4],animate_easing2=val[5],animate_delay=val[6],animate_delay2=val[7],animate_css_end=val[8],run="",run_end="";if(typeof(animate_delay)==="undefined"){animate_delay=0}if(typeof(animate_delay2)==="undefined"){animate_delay2=0}if(animate_css!==""){animate_css_=".css("+animate_css+")"}else{animate_css_=""}if(setobj===""){return}create_var.push("var _"+setobj_+"");if(setobj==="self"){set_var.push("_"+setobj_+"=[self]")}else{set_var.push("_"+setobj_+'=[self].find("'+setobj+'")')}if(animate_start!==""){run="_"+setobj_+animate_css_+".stop(true,false).delay("+animate_delay+").animate("+animate_start+","+animate_easing+")"}else{run="_"+setobj_+animate_css}if(animate_css_!==""||animate_start!==""){runlist.push(run)}if(animate_end!==""){if(typeof(animate_css)!="undefined"&&animate_css!=""&&animate_css.indexOf("display:block;")){if(animate_easing.indexOf("easing")==-1){run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+",function(){$(this).css({'display':'none'});})"}else{run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")"}}else{run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")"}runlist_end.push(run_end)}});var selfobj=null;self.off(".s");$.each(create_var,function(index,val){eval(val)});self.on("mouseenter.s",function(){selfobj=$(this);$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"))});clearTimeout(time_delay);time_delay=setTimeout(function(){if(!selfobj.is(":animated")){selfobj.addClass(obj.set_class);$.each(runlist,function(index,val){eval(val)})}},obj.delaytime)}).on("mouseleave.s",function(){clearTimeout(time_delay);if(selfobj.is("."+obj.set_class)){$.each(runlist_end,function(index,val){eval(val)});selfobj.removeClass(obj.set_class)}})};

