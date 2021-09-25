"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var scrollFunction,topFunction,_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)};function cloneObject(e){if(null==e||"object"!=(void 0===e?"undefined":_typeof(e)))return e;if(e instanceof Date)return t=new Date(e.getDate());if(e instanceof Array){for(var t=[],o=0,a=e.length;o<a;o++)t[o]=e[o];return t}if(e instanceof Object){for(o in t={},e)e.hasOwnProperty(o)&&(t[o]=cloneObject(e[o]));return t}}function setCookie(e,t,o){var a,n="";o&&((a=new Date).setTime(a.getTime()+24*o*60*60*1e3),n="; expires="+a.toUTCString()),document.cookie=e+mashiro_option.cookie_version_control+"="+(t||"")+n+"; path=/"}function getCookie(e){for(var t=e+mashiro_option.cookie_version_control+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){for(var n=o[a];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}function removeCookie(e){document.cookie=e+mashiro_option.cookie_version_control+"=; Max-Age=-99999999;"}function jumpTo(e){return mashiro_global.lib.pjax_to_url(e,"#page")}function injectStyles(e){$("<div />",{html:"&shy;<style>"+e+"</style>"}).appendTo("body")}function imgError(e,t){switch(t){case 1:e.src.includes("https://cn.gravatar.com/avatar")?e.src=e.src.replace("https://cn.gravatar.com/avatar/","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/gravatar.jpg"):e.src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/default_avatar.jpg";break;case 2:e.src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/default_gavatar.jpg";break;default:e.src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/image-404.png"}}function code_highlight_style(){$("pre code").each(function(e,t){hljs.highlightBlock(t)});for(var e=0;e<$("article pre").length;e++)!function(e){var t,o={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",design:"by hojun"},a=$("pre:eq("+e+")")[0].children[0].className;for(t in"py"==(a="md"==(a="js"==(a="hljs"==(a=a.substr(0,a.indexOf(" ")).replace("language-","")).toLowerCase()?"text":a).toLowerCase()?"javascript":a).toLowerCase()?"markdown":a).toLowerCase()&&(a="python"),$("pre:eq("+e+")").addClass("highlight-wrap"),o)$("pre:eq("+e+")").attr(t,o[t]);$("pre:eq("+e+") code").attr("data-rel",a.toUpperCase())}(e);$("pre").on("click",function(e){e.target===this&&($(this).toggleClass("code-block-fullscreen"),$("html").toggleClass("code-block-fullscreen-html-scroll"))}),hljs.initLineNumbersOnLoad()}mashiro_global.variables=new function(){this.has_bot_ui=!1,this.isNight=!1,this.skinSecter=!1},mashiro_global.ini=new function(){this.normalize=function(){if(lazyload(),social_share(),mashiro_global.post_list_show_animation.ini(),copy_code_block(),window.is_app)try{setTimeout(function(){mashiro_option.app_update(!0)},1e4)}catch(e){}$("div").hasClass("poem-wrap")&&get_poem("#poem","#info"),$(function(){screen&&860<screen.width&&(!function e(){$("#banner_wave_1").css({left:"-236px"}).animate({left:"-1233px"},25e3,"linear",e)}(),function e(){$("#banner_wave_2").css({left:"0px"}).animate({left:"-1009px"},6e4,"linear",e)}()),-1!=navigator.userAgent.indexOf("AppleWebKit")&&$("body").addClass("isWebKit"),hearthstone_deck_iframe()})},this.pjax=function(){pjaxInit(),social_share(),mashiro_global.post_list_show_animation.ini(),copy_code_block(),$("div").hasClass("poem-wrap")&&get_poem("#poem","#info"),hearthstone_deck_iframe()}},mashiro_global.lib=new function(){this.removeClass=function(e,t){e=document.getElementById(e);e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},this.addClass=function(e,t){e=document.getElementById(e);e.classList?e.classList.add(t):e.className+=" "+t},this.hasClass=function(e,t){e=document.getElementById(e);return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},this.toggleClass=function(e,t){var o,a=document.getElementById(e);a.classList?a.classList.toggle(t):(0<=(e=(o=a.className.split(" ")).indexOf(t))?o.splice(e,1):o.push(t),a.className=o.join(" "))},this.saveFile=function(e,t){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var e=document.createElement("a");e.href=window.URL.createObjectURL(o.response),e.download=t,e.style.display="none",document.body.appendChild(e),e.click()},o.open("GET",e),o.send()}},mashiro_global.post_list_show_animation=new function(){this.ini=function(e){$("article.post-list-thumb").each(function(t){var o;o=e?$(window).height():$(".headertop").hasClass("headertop-bar")?0:$(window).height()-300,mashiro_global.landing_at_home||(o+=300);var a=$("article.post-list-thumb").eq(t).offset().top;$(window).height()+$(window).scrollTop()>=a&&$("article.post-list-thumb").eq(t).addClass("post-list-show"),$(window).scroll(function(){var e=$(window).scrollTop();a<=e+o&&e&&$("article.post-list-thumb").eq(t).addClass("post-list-show")})})}},mashiro_global.font_control=new function(){this.change_font=function(){$("body").hasClass("serif")?($("body").removeClass("serif"),$(".control-btn-serif").removeClass("selected"),$(".control-btn-sans-serif").addClass("selected"),setCookie("font_family","sans-serif",30)):($("body").addClass("serif"),$(".control-btn-serif").addClass("selected"),$(".control-btn-sans-serif").removeClass("selected"),setCookie("font_family","serif",30),document.body.clientWidth<=860&&addComment.createButterbar("将从网络加载字体，流量请注意"))},this.ini=function(){860<document.body.clientWidth&&(getCookie("font_family")&&"serif"!=getCookie("font_family")||$("body").addClass("serif")),"sans-serif"==getCookie("font_family")&&($("body").removeClass("sans-serif"),$(".control-btn-serif").removeClass("selected"),$(".control-btn-sans-serif").addClass("selected"))}},mashiro_global.font_control.ini();try{code_highlight_style()}catch(e){}function copy_code_block(){$("pre code").each(function(e,t){$(t).attr({id:"hljs-"+e}),$(this).after('<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-'+e+'" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a>')});new ClipboardJS(".copy-code")}function attach_image(){$("#upload-img-file").change(function(){if(10<this.files.length)return addComment.createButterbar("每次上传上限为10张.<br>10 files max per request."),0;for(e=0;e<this.files.length;e++)5242880<=this.files[e].size&&alert("图片上传大小限制为5 MB.\n5 MB max per file.\n\n「"+this.files[e].name+"」\n\n这张图太大啦~\nThis image is too large~");for(var e=0;e<this.files.length;e++){var t=this.files[e],o=new FormData;o.append("smfile",t),$.ajax({url:"https://sm.ms/api/upload",type:"POST",processData:!1,contentType:!1,data:o,beforeSend:function(e){$(".insert-image-tips").html('<i class="fa fa-spinner rotating" aria-hidden="true"></i>'),addComment.createButterbar("上传中...<br>Uploading...")},success:function(e){$(".insert-image-tips").html('<i class="fa fa-check" aria-hidden="true"></i>'),setTimeout(function(){$(".insert-image-tips").html('<i class="fa fa-picture-o" aria-hidden="true"></i>')},1e3);var t=e.data.url.replace("https://i.loli.net/","https://static.shino.cc/user-upload/");$("#upload-img-show").append('<img class="lazyload upload-image-preview" src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.2/img/svg/loader/trans.ajax-spinner-preloader.svg" data-src="'+t+'" onclick="window.open(\''+t+'\')" onerror="imgError(this)" />'),lazyload(),addComment.createButterbar("图片上传成功~<br>Uploaded successfully~"),grin(e.data.url.replace("https://i.loli.net/","{UPLOAD}"),type="Img")},error:function(){$(".insert-image-tips").html('<i class="fa fa-times" aria-hidden="true" style="color:red"></i>'),alert("上传失败，请重试.\nUpload failed, please try again."),setTimeout(function(){$(".insert-image-tips").html('<i class="fa fa-picture-o" aria-hidden="true"></i>')},1e3)}})}})}function clean_upload_images(){$("#upload-img-show").html("")}function add_upload_tips(){$('<div class="insert-image-tips popup"><i class="fa fa-picture-o" aria-hidden="true"></i><span class="insert-img-popuptext" id="uploadTipPopup">上传图片</span></div><input id="upload-img-file" type="file" accept="image/*" multiple="multiple" class="insert-image-button">').insertAfter($(".form-submit #submit")),attach_image(),$("#upload-img-file").hover(function(){$(".insert-image-tips").addClass("insert-image-tips-hover"),$("#uploadTipPopup").addClass("show")},function(){$(".insert-image-tips").removeClass("insert-image-tips-hover"),$("#uploadTipPopup").removeClass("show")})}function click_to_view_image(){$(".comment_inline_img").click(function(){var e=$(this).attr("src");window.open(e)})}function original_emoji_click(){$(".emoji-item").click(function(){grin($(this).text(),type="custom",before="`",after="` ")})}function showPopup(e){e.querySelector("#thePopup").classList.toggle("show")}function cmt_showPopup(e){var t=$(e).find("#thePopup");t.addClass("show"),$(e).find("input").blur(function(){t.removeClass("show")})}function headertop_down(){var e=$("#content").offset().top;$("html,body").animate({scrollTop:e},600)}function scrollBar(){860<document.body.clientWidth&&$(window).scroll(function(){var e=$(window).scrollTop(),t=$(document).height(),o=$(window).height(),o=parseInt(e/(t-o)*100);$("#bar").css("width",o+"%"),$("#bar").css("background","orange"),$(".toc-container").css("height",$(".site-content").outerHeight()),$(".skin-menu").removeClass("show")})}function checkBgImgCookie(){var e=getCookie("bgImgSetting");if(e?($("#banner_wave_1").addClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").addClass("banner_wave_hide_fit_skin")):($("#banner_wave_1").removeClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").removeClass("banner_wave_hide_fit_skin")),""==e)return!1;"https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/sakura.png"==e||"https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/plaid.jpg"==e||"https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/star.png"==e||"https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/point.png"==e||"https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/little-monster.png"==e?(mashiro_global.variables.skinSecter=!0,mashiro_global.variables.isNight=!1,$("#night-mode-cover").css("visibility","hidden"),$("body").css("background-image","url("+e+")"),$(".blank").css("background-color","rgba(255,255,255,1)"),$(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura")):"https://api.shino.cc/bing/"==e&&(mashiro_global.variables.skinSecter=!0,mashiro_global.variables.isNight=!0,$("#night-mode-cover").css("visibility","hidden"),$("body").css("background-image","url("+e+")"),$(".blank").css("background-color","rgba(255,255,255,1)"),$(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura"))}function no_right_click(){$(".post-thumb img").bind("contextmenu",function(e){return!1})}function nextBG(){bgindex+=1,console.log(bg[Math.abs(bgindex%bg.length)]),$(".centerbg").css("background-image",'url("'+bg[Math.abs(bgindex%bg.length)]+'")')}function preBG(){bgindex-=1,console.log(bg[Math.abs(bgindex%bg.length)]),$(".centerbg").css("background-image",'url("'+bg[Math.abs(bgindex%bg.length)]+'")')}function reload_show_date_time(){BirthDay=new Date("06/02/2017 18:00:00"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),sectimeold=timeold/1e3,secondsold=Math.floor(sectimeold),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),monitorday.innerHTML=daysold}function timeSeriesReload(e){1==e?($("#archives span.al_mon").click(function(){return $(this).next().slideToggle(400),!1}),lazyload()):function(){$("#al_expand_collapse,#archives span.al_mon").css({cursor:"s-resize"}),$("#archives span.al_mon").each(function(){var e=$(this).next().children("li").length;$(this).children("#post-num").text(e)});var e=$("#archives ul.al_post_list"),t=$("#archives ul.al_post_list:first");e.hide(1,function(){t.show()}),$("#archives span.al_mon").click(function(){return $(this).next().slideToggle(400),!1}),860<document.body.clientWidth&&$("#archives li.al_li").mouseover(function(){return $(this).children(".al_post_list").show(400),!1});var o=0;$("#al_expand_collapse").click(function(){0==o?(e.show(),o++):1==o&&(e.hide(),o--)})}()}click_to_view_image(),original_emoji_click(),scrollBar(),860<document.body.clientWidth&&checkBgImgCookie(),mashiro_global.variables.isNight?$(".changeSkin-gear, .toc").css("background","rgba(255,255,255,0.8)"):$(".changeSkin-gear, .toc").css("background","none"),$(document).ready(function(){function e(e,t){$(".skin-menu "+e).click(function(){mashiro_global.variables.skinSecter=!0,mashiro_global.variables.isNight=!1,$("#night-mode-cover").css("visibility","hidden"),$("body").css("background-image","url("+t+")"),$(".blank").css("background-color","rgba(255,255,255,1)"),$(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura"),$("#banner_wave_1").addClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").addClass("banner_wave_hide_fit_skin"),o(),setCookie("bgImgSetting",t,30)})}var t;function o(){$(".skin-menu").removeClass("show"),setTimeout(function(){$(".changeSkin-gear").css("visibility","visible")},300),mashiro_global.variables.isNight?$(".changeSkin-gear, .toc").css("background","rgba(255,255,255,0.8)"):$(".changeSkin-gear, .toc").css("background","none")}e("#sakura-bg","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/sakura.png"),e("#gribs-bg","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/plaid.jpg"),e("#pixiv-bg","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/star.png"),e("#KAdots-bg","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/point.png"),e("#totem-bg","https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/little-monster.png"),t="https://api.shino.cc/bing/",$(".skin-menu "+"#bing-bg").click(function(){mashiro_global.variables.skinSecter=!0,mashiro_global.variables.isNight=!0,$("#night-mode-cover").css("visibility","hidden"),$("body").css("background-image","url("+t+")"),$(".blank").css("background-color","rgba(255,255,255,1)"),$(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura"),$("#banner_wave_1").addClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").addClass("banner_wave_hide_fit_skin"),o(),setCookie("bgImgSetting",t,30)}),$(".skin-menu #white-bg").click(function(){mashiro_global.variables.skinSecter=!1,mashiro_global.variables.isNight=!1,$("#night-mode-cover").css("visibility","hidden"),$("body").css("background-image","none"),$(".blank").css("background-color","rgba(255,255,255,.0)"),$(".pattern-center-sakura").removeClass("pattern-center-sakura").addClass("pattern-center"),$(".headertop-bar-sakura").removeClass("headertop-bar-sakura").addClass("headertop-bar"),$("#banner_wave_1").removeClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").removeClass("banner_wave_hide_fit_skin"),o(),setCookie("bgImgSetting","",30)}),$(".skin-menu #dark-bg").click(function(){mashiro_global.variables.skinSecter=!0,mashiro_global.variables.isNight=!0,$("body").css("background-image","url(https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/starry_sky.png)"),$(".blank").css("background-color","rgba(255,255,255,.8)"),$("#night-mode-cover").css("visibility","visible"),$(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura"),$("#banner_wave_1").addClass("banner_wave_hide_fit_skin"),$("#banner_wave_2").addClass("banner_wave_hide_fit_skin"),o()}),$(".changeSkin-gear").click(function(){$(".skin-menu").toggleClass("show"),mashiro_global.variables.isNight?$(".changeSkin").css("background","rgba(255,255,255,0.8)"):$(".changeSkin").css("background","none")}),$(".skin-menu #close-skinMenu").click(function(){o()}),add_upload_tips()}),$(document).ready(function(){var e=Math.floor(Math.random()*bg.length);$(".centerbg").css("background-image",'url("'+bg[e]+'")'),$("#bg-next").click(function(){nextBG()}),$("#bg-pre").click(function(){preBG()})}),document.body.clientWidth<=860&&!window.is_app&&(scrollFunction=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?document.getElementById("moblieGoTop").style.display="block":document.getElementById("moblieGoTop").style.display="none"},topFunction=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},window.onscroll=function(){scrollFunction()}),timeSeriesReload();var pjaxInit=function(){add_upload_tips(),click_to_view_image(),original_emoji_click(),mashiro_global.font_control.ini(),$("p").remove(".head-copyright");try{code_highlight_style()}catch(e){}try{inlojv_js_getqqinfo()}catch(e){}lazyload();try{reload_show_date_time()}catch(e){}!0===mashiro_global.variables.skinSecter&&($(".pattern-center").removeClass("pattern-center").addClass("pattern-center-sakura"),$(".headertop-bar").removeClass("headertop-bar").addClass("headertop-bar-sakura"),mashiro_global.variables.isNight&&($(".blank").css("background-color","rgba(255,255,255,1)"),$(".toc").css("background-color","rgba(255,255,255,0.8)"))),$(".iconflat").css("width","50px").css("height","50px"),$(".openNav").css("height","50px"),$("#bg-next").click(function(){nextBG()}),$("#bg-pre").click(function(){preBG()}),smileBoxToggle(),timeSeriesReload(),add_copyright(),console.log($("#myscript").text())};function show_date_time(){BirthDay=new Date("2020-02-11 18:00:00"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),sectimeold=timeold/1e3,secondsold=Math.floor(sectimeold),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),monitorday.innerHTML=daysold}$(document).on("click",".sm",function(){1==confirm("您真的要设为私密吗？")?$(this).commentPrivate():aler("已取消")}),$.fn.commentPrivate=function(){if($(this).hasClass("private_now"))return alert("您之前已设过私密评论"),!1;$(this).addClass("private_now");var e=$(this).data("idp"),t=$(this).data("actionp"),o=$(this).children(".has_set_private");return $.post("/wp-admin/admin-ajax.php",{action:"siren_private",p_id:e,p_action:t},function(e){$(o).html(e)}),!1};try{show_date_time()}catch(e){}function motionSwitch(e){var t,o=[".bili",".menhera",".tieba"];for(t in o)$(o[t]+"-bar").removeClass("on-hover"),$(o[t]+"-container").css("display","none");$(e+"-bar").addClass("on-hover"),$(e+"-container").css("display","block")}function smileBoxToggle(){$(document).ready(function(){$("#emotion-toggle").click(function(){$(".emotion-toggle-off").toggle(0),$(".emotion-toggle-on").toggle(0),$(".emotion-box").toggle(160)})})}function grin(e,t,o,a){var n;if(e="custom"==t?o+e+a:"Img"==t?"[img]"+e+"[/img]":"Math"==t?" f(x)=∫("+e+")sec²xdx ":" :"+e+": ",!document.getElementById("comment")||"textarea"!=document.getElementById("comment").type)return!1;n=document.getElementById("comment"),document.selection?(n.focus(),sel=document.selection.createRange(),sel.text=e,n.focus()):n.selectionStart||"0"==n.selectionStart?(o=n.selectionStart,t=a=n.selectionEnd,n.value=n.value.substring(0,o)+e+n.value.substring(a,n.value.length),t+=e.length,n.focus(),n.selectionStart=t,n.selectionEnd=t):(n.value+=e,n.focus())}function add_copyright(){document.body.addEventListener("copy",function(e){!mashiro_global.is_user_logged_in&&30<window.getSelection().toString().length&&-1!=mashiro_option.copyright_enable.indexOf("false")&&window.getSelection().toString().length>mashiro_option.copyright_minCharNumber&&function(e){e.preventDefault();var t=mashiro_option.copyright_description+"<br>作者："+mashiro_option.author_name+"<br>链接："+window.location.href+"<br>来源："+mashiro_option.site_name+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),o=mashiro_option.copyright_description+"\n作者："+mashiro_option.author_name+"\n链接："+window.location.href+"\n来源："+mashiro_option.site_name+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData)e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",o),addComment.createButterbar("复制成功！<br>Copied to clipboard successfully!",1e3);else if(window.clipboardData)window.clipboardData.setData("text",o)}(e)})}function inlojv_js_getqqinfo(){var o=!1,e=/^[0-9]+$/;getCookie("user_qq")||getCookie("user_qq_email")||getCookie("user_author")||$("input#qq,input#author,input#email,input#url").val(""),getCookie("user_avatar")&&getCookie("user_qq")&&getCookie("user_qq_email")&&($("div.comment-user-avatar img").attr("src",getCookie("user_avatar")),$("input#author").val(getCookie("user_author")),$("input#email").val(getCookie("user_qq")+"@qq.com"),$("input#qq").val(getCookie("user_qq")),mashiro_option.qzone_autocomplete&&$("input#url").val("https://user.qzone.qq.com/"+getCookie("user_qq")),$("input#qq").val()&&($(".qq-check").css("display","block"),$(".gravatar-check").css("display","none")));var a=$("input#email").val();$("input#author").on("blur",function(){var t=$("input#author").val();$.ajax({type:"get",url:mashiro_option.qq_api_url+"?type=getqqnickname&qq="+t,dataType:"jsonp",jsonp:"callback",jsonpCallback:"portraitCallBack",success:function(e){$("input#author").val(e[t][6]),$("input#email").val($.trim(t)+"@qq.com"),mashiro_option.qzone_autocomplete&&$("input#url").val("https://user.qzone.qq.com/"+$.trim(t)),$("div.comment-user-avatar img").attr("src","https://q2.qlogo.cn/headimg_dl?dst_uin="+t+"&spec=100"),o=!0,$("input#qq").val($.trim(t)),$("input#qq").val()&&($(".qq-check").css("display","block"),$(".gravatar-check").css("display","none")),setCookie("user_author",e[t][6],30),setCookie("user_qq",t,30),setCookie("is_user_qq","yes",30),setCookie("user_qq_email",t+"@qq.com",30),setCookie("user_email",t+"@qq.com",30),a=$("input#email").val()},error:function(){e.test(t)&&addComment.createButterbar("QQ号不存在（建议不要使用纯数字昵称）"),$("input#qq").val(""),$(".qq-check").css("display","none"),$(".gravatar-check").css("display","block"),$("div.comment-user-avatar img").attr("src",get_gravatar($("input#email").val(),80)),setCookie("user_qq","",30),setCookie("user_email",$("input#email").val(),30),setCookie("user_avatar",get_gravatar($("input#email").val(),80),30)}}),$.ajax({type:"get",url:mashiro_option.qq_avatar_api_url+"?type=getqqavatar&qq="+t,dataType:"jsonp",jsonp:"callback",jsonpCallback:"qqavatarCallBack",beforeSend:function(){e.test(t)&&addComment.createButterbar("正在获取QQ头像...")},success:function(e){$("div.comment-user-avatar img").attr("src",e[t]),addComment.createButterbar("QQ头像获取成功"),setCookie("user_avatar",e[t],30)},error:function(){e.test(t)&&addComment.createButterbar("QQ号不存在（建议不要使用纯数字昵称）"),$("input#qq","input#email","input#url").val(""),$("input#qq").val()||($(".qq-check").css("display","none"),$(".gravatar-check").css("display","block"),setCookie("user_qq","",30),$("div.comment-user-avatar img").attr("src",get_gravatar($("input#email").val(),80)),setCookie("user_avatar",get_gravatar($("input#email").val(),80),30))}})}),getCookie("user_avatar")&&getCookie("user_email")&&"no"==getCookie("is_user_qq")&&!getCookie("user_qq_email")&&($("div.comment-user-avatar img").attr("src",getCookie("user_avatar")),$("input#email").val(getCookie("user_email")),$("input#qq").val(""),$("input#qq").val()||($(".qq-check").css("display","none"),$(".gravatar-check").css("display","block"))),$("input#email").on("blur",function(){var e=$("input#email").val();0!=o&&a==e||($("div.comment-user-avatar img").attr("src",get_gravatar(e,80)),setCookie("user_avatar",get_gravatar(e,80),30),setCookie("user_email",e,30),setCookie("user_qq_email","",30),setCookie("is_user_qq","no",30),$("input#qq").val(""),$("input#qq").val()||($(".qq-check").css("display","none"),$(".gravatar-check").css("display","block")))}),getCookie("user_url")&&$("input#url").val(getCookie("user_url")),$("input#url").on("blur",function(){var e=$("input#url").val();$("input#url").val(e),setCookie("user_url",e,30)}),getCookie("user_author")&&$("input#author").val(getCookie("user_author")),$("input#author").on("blur",function(){var e=$("input#author").val();$("input#author").val(e),setCookie("user_author",e,30)})}function get_poem(e,t){var o=document.querySelector(e),a=document.querySelector(t),n=new XMLHttpRequest;n.open("get","https://v2.jinrishici.com/one.json"),n.withCredentials=!0,n.onreadystatechange=function(){var e;4===n.readyState&&(e=JSON.parse(n.responseText),o.innerHTML=e.data.content,a.innerHTML="【"+e.data.origin.dynasty+"】"+e.data.origin.author+"《"+e.data.origin.title+"》")},n.send()}function mail_me(){var e="mailto:"+mashiro_option.email_name+"@"+mashiro_option.email_domain;window.open(e)}function hearthstone_deck_iframe(){$("iframe").hasClass("hearthstone-deck")&&($(".hearthstone-deck").each(function(){$(this).attr("height",5*$(this).width()/9+"px")}),$(".hearthstone-deck-container").each(function(){var e=5*$(this).width()/9+14;$(this).css("height",e+"px")}))}POWERMODE.colorful=!0,POWERMODE.shake=!1,document.body.addEventListener("input",POWERMODE),$(".comt-addsmilies").click(function(){$(".comt-smilies").toggle()}),$(".comt-smilies a").click(function(){$(this).parent().hide()}),smileBoxToggle(),add_copyright(),$(function(){inlojv_js_getqqinfo()});var currentFontIsUbuntu=!0;mashiro_global.ini.normalize();var home=location.href,s=$("#bgvideo")[0],Siren={BSZ:function(){$.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js")},TOC:function(){var t;0<$(".toc").length&&1200<document.body.clientWidth&&(0<$(".pattern-center").length?tocbot.init({tocSelector:".toc",contentSelector:".entry-content",scrollSmooth:!0,headingSelector:"h1, h2, h3, h4, h5",headingsOffset:-400,scrollSmoothOffset:-85}):tocbot.init({tocSelector:".toc",contentSelector:".entry-content",scrollSmooth:!0,headingSelector:"h1, h2, h3, h4, h5",headingsOffset:-85,scrollSmoothOffset:-85}),t=$(".toc").offset().top-135,window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t<=e?$(".toc").addClass("toc-fixed"):$(".toc").removeClass("toc-fixed")},$.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"))},AB:function(){-1<window.location.pathname.indexOf("about")&&$.getScript("/js/botui.js",function(){null!=("undefined"==typeof botui?"undefined":_typeof2(botui))||botui.message||bot_ui_ini()})},VA:function(){var e;e||(e=new Valine).init({el:"#vcomments",appId:mashiro_option.v_appId,appKey:mashiro_option.v_appKey,comment_count:!0,notify:!1,verify:!0,path:window.location.pathname,placeholder:"祝开开心心！",avatar:"monsterid"})},MJ:function(){"1"==mashiro_option.mathjax&&$.getScript("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML",function(){MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}});var e=document.getElementsByClassName("entry-content")[0];MathJax.Hub.Queue(["Typeset",MathJax.Hub,e])})},MN:function(){$(".iconflat").on("click",function(){$("#main-container").hasClass("open")?($(".iconflat").css("width","50px").css("height","50px"),$(".openNav").css("height","50px")):($(".iconflat").css("width","100%").css("height","100%"),$(".openNav").css("height","100%")),$("body").toggleClass("navOpen"),$("#main-container,#mo-nav,.openNav").toggleClass("open")})},MNH:function(){$("body").hasClass("navOpen")&&($("body").toggleClass("navOpen"),$("#main-container,#mo-nav,.openNav").toggleClass("open"))},splay:function(){$("#video-btn").addClass("video-pause").removeClass("video-play").show(),$(".video-stu").css({bottom:"-100px"}),$(".focusinfo").css({top:"-999px"}),$("#banner_wave_1").addClass("banner_wave_hide"),$("#banner_wave_2").addClass("banner_wave_hide"),s.play()},spause:function(){$("#video-btn").addClass("video-play").removeClass("video-pause"),$(".focusinfo").css({top:"49.3%"}),$("#banner_wave_1").removeClass("banner_wave_hide"),$("#banner_wave_2").removeClass("banner_wave_hide"),s.pause()},liveplay:function(){null!=s.oncanplay&&0<$(".haslive").length&&0<$(".videolive").length&&Siren.splay()},livepause:function(){null!=s.oncanplay&&0<$(".haslive").length&&(Siren.spause(),$(".video-stu").css({bottom:"0px"}).html("已暂停 ..."))},addsource:function(){$(".video-stu").html("正在载入视频 ...").css({bottom:"0px"});var e=Poi.movies.name.split(","),e=e[Math.floor(Math.random()*e.length)];$("#bgvideo").attr("src",Poi.movies.url+"/"+e),$("#bgvideo").attr("video-name",e)},LV:function(){var e=$("#video-btn");e.on("click",function(){$(this).hasClass("loadvideo")?($(this).addClass("video-pause").removeClass("loadvideo").hide(),Siren.addsource(),s.oncanplay=function(){Siren.splay(),$("#video-add").show(),e.addClass("videolive"),e.addClass("haslive")}):$(this).hasClass("video-pause")?(Siren.spause(),e.removeClass("videolive"),$(".video-stu").css({bottom:"0px"}).html("已暂停 ...")):(Siren.splay(),e.addClass("videolive")),s.onended=function(){$("#bgvideo").attr("src",""),$("#video-add").hide(),e.addClass("loadvideo").removeClass("video-pause"),e.removeClass("videolive"),e.removeClass("haslive"),$(".focusinfo").css({top:"49.3%"})}}),$("#video-add").on("click",function(){Siren.addsource()})},AH:function(){var e;"auto"==Poi.windowheight?0<$("h1.main-title").length&&(e=$(window).height(),$("#centerbg").css({height:e}),$("#bgvideo").css({"min-height":e}),$(window).resize(function(){Siren.AH()})):$(".headertop").addClass("headertop-bar")},PE:function(){0<$(".headertop").length&&(0<$("h1.main-title").length?($(".blank").css({"padding-top":"0px"}),$(".headertop").css({height:"auto"}).show(),"open"==Poi.movies.live&&Siren.liveplay(),$(".site-header").addClass("is-homepage")):($(".blank").css({"padding-top":"75px"}),$(".headertop").css({height:"0px"}).hide(),Siren.livepause()))},CE:function(){$(".comments-hidden").show(),$(".comments-main").hide(),$(".comments-hidden").click(function(){$(".comments-main").slideDown(500),$(".comments-hidden").hide()}),$(".archives").hide(),$(".archives:first").show(),$("#archives-temp h3").click(function(){return $(this).next().slideToggle("fast"),!1}),$(".js-toggle-search").on("click",function(){$(".js-toggle-search").toggleClass("is-active"),$(".js-search").toggleClass("is-visible")}),$(".search_close").on("click",function(){$(".js-search").hasClass("is-visible")&&($(".js-toggle-search").toggleClass("is-active"),$(".js-search").toggleClass("is-visible"))}),$("#show-nav").on("click",function(){$("#show-nav").hasClass("showNav")?($("#show-nav").removeClass("showNav").addClass("hideNav"),$(".site-top .lower nav").addClass("navbar"),$(".mobile-fit-control").removeClass("hide")):($("#show-nav").removeClass("hideNav").addClass("showNav"),$(".site-top .lower nav").removeClass("navbar"),$(".mobile-fit-control").addClass("hide")),screen&&screen.width<=1200&&$(".site-title").toggle()}),$("#loading").click(function(){$("#loading").fadeOut(500)})},NH:function(){var t=$(document).scrollTop();$(window).scroll(function(){var e=$(document).scrollTop();0==e&&$(".site-header").removeClass("yya"),0<e&&$(".site-header").addClass("yya"),50<e&&($(".site-header").addClass("gizle"),t<e?$(".site-header").removeClass("sabit"):$(".site-header").addClass("sabit"),t=e)})},XLS:function(){$body=window.opera?"CSS1Compat"==document.compatMode?$("html"):$("body"):$("html,body"),$("body").on("click","#pagination a",function(){return $(this).addClass("loading").text(""),$.ajax({type:"GET",url:$(this).attr("href")+"#main",success:function(e){result=$(e).find("#main .post"),nextHref=$(e).find("#pagination a").attr("href"),$("#main").append(result.fadeIn(500)),$("#pagination a").removeClass("loading").text("Previous"),lazyload(),mashiro_global.post_list_show_animation.ini(50),null!=nextHref?$("#pagination a").attr("href",nextHref):$("#pagination").html("<span>很高兴你翻到这里，但是真的没有了...</span>")}}),!1})},XCS:function(){var r=jQuery("#cancel-comment-reply-link"),l=r.text(),i="commentwrap";jQuery(document).on("submit","#commentform",function(){return jQuery.ajax({url:Poi.ajaxurl,data:jQuery(this).serialize()+"&action=ajax_comment",type:jQuery(this).attr("method"),beforeSend:addComment.createButterbar("提交中(Commiting)...."),error:function(e){addComment.createButterbar(e.responseText)},success:function(e){jQuery("textarea").each(function(){this.value=""});var t=addComment,o=t.I("cancel-comment-reply-link"),a=t.I("wp-temp-form-div"),n=t.I(t.respondId);t.I("comment_post_ID").value;"0"!=t.I("comment_parent").value?jQuery("#respond").before('<ol class="children">'+e+"</ol>"):jQuery("."+i).length?"asc"==Poi.order?jQuery("."+i).append(e):jQuery("."+i).prepend(e):"bottom"==Poi.formpostion?jQuery("#respond").before('<ol class="'+i+'">'+e+"</ol>"):jQuery("#respond").after('<ol class="'+i+'">'+e+"</ol>"),t.createButterbar("提交成功(Succeed)"),lazyload(),code_highlight_style(),click_to_view_image(),clean_upload_images(),o.style.display="none",o.onclick=null,t.I("comment_parent").value="0",a&&n&&(a.parentNode.insertBefore(n,a),a.parentNode.removeChild(a))}}),!1}),addComment={moveForm:function(e,t,o){var a=this,n=a.I(e),i=a.I(o),s=a.I("cancel-comment-reply-link"),e=a.I("comment_parent");a.I("comment_post_ID");r.text(l),a.respondId=o,a.I("wp-temp-form-div")||((o=document.createElement("div")).id="wp-temp-form-div",o.style.display="none",i.parentNode.insertBefore(o,i)),n?n.parentNode.insertBefore(i,n.nextSibling):(temp=a.I("wp-temp-form-div"),a.I("comment_parent").value="0",temp.parentNode.insertBefore(i,temp),temp.parentNode.removeChild(temp)),jQuery("body").animate({scrollTop:jQuery("#respond").offset().top-180},400),e.value=t,s.style.display="",s.onclick=function(){var e=addComment,t=e.I("wp-temp-form-div"),o=e.I(e.respondId);return e.I("comment_parent").value="0",t&&o&&(t.parentNode.insertBefore(o,t),t.parentNode.removeChild(t)),this.style.display="none",this.onclick=null,!1};try{a.I("comment").focus()}catch(e){}return!1},I:function(e){return document.getElementById(e)},clearButterbar:function(e){0<jQuery(".butterBar").length&&jQuery(".butterBar").remove()},createButterbar:function(e,t){this.clearButterbar(),jQuery("body").append('<div class="butterBar butterBar--center"><p class="butterBar-message">'+e+"</p></div>"),0<t?setTimeout("jQuery('.butterBar').remove()",t):setTimeout("jQuery('.butterBar').remove()",6e3)}}},XCP:function(){$body=window.opera?"CSS1Compat"==document.compatMode?$("html"):$("body"):$("html,body"),$("body").on("click","#comments-navi a",function(e){e.preventDefault(),$.ajax({type:"GET",url:$(this).attr("href"),beforeSend:function(){$("#comments-navi").remove(),$("ul.commentwrap").remove(),$("#loading-comments").slideDown(),$body.animate({scrollTop:$("#comments-list-title").offset().top-65},800)},dataType:"html",success:function(e){result=$(e).find("ul.commentwrap"),nextlink=$(e).find("#comments-navi"),$("#loading-comments").slideUp("fast"),$("#loading-comments").after(result.fadeIn(500)),$("ul.commentwrap").after(nextlink),lazyload(),code_highlight_style(),click_to_view_image()}})})},IA:function(){POWERMODE.colorful=!0,POWERMODE.shake=!1,document.body.addEventListener("input",POWERMODE)},GT:function(){var e=$(".cd-top");$(window).scroll(function(){100<$(this).scrollTop()?(e.addClass("cd-is-visible"),$(".changeSkin-gear").css("bottom","0"),950<$(window).height()?$(".cd-top.cd-is-visible").css("top","0"):$(".cd-top.cd-is-visible").css("top",$(window).height()-950+"px")):($(".changeSkin-gear").css("bottom","-999px"),$(".cd-top.cd-is-visible").css("top","-900px"),e.removeClass("cd-is-visible cd-fade-out")),1200<$(this).scrollTop()&&e.addClass("cd-fade-out")}),e.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},700)})}};$(function(){Siren.AH(),Siren.PE(),Siren.NH(),Siren.GT(),Siren.XLS(),Siren.XCS(),Siren.XCP(),Siren.CE(),Siren.MN(),Siren.IA(),Siren.LV(),window.is_app&&injectStyles("#nprogress .bar { display: none; }"),Poi.pjax&&($(document).pjax("a[target!=_top]","#page",{fragment:"#page",timeout:8e3}).on("pjax:send",function(){$("#bar").css("width","0%"),mashiro_option.NProgressON&&NProgress.start(),Siren.MNH()}).on("pjax:complete",function(){Siren.AH(),Siren.PE(),Siren.CE(),Siren.VA(),Siren.MJ(),Siren.AB(),Siren.TOC(),Siren.BSZ(),mashiro_option.NProgressON&&NProgress.done(),mashiro_global.ini.pjax(),$("#loading").fadeOut(500),"open"==Poi.codelamp&&self.Prism.highlightAll(event),0<$(".ds-thread").length&&("undefined"!=typeof DUOSHUO?DUOSHUO.EmbedThread(".ds-thread"):$.getScript("//static.duoshuo.com/embed.js"))}).on("submit",".search-form,.s-search",function(e){e.preventDefault(),$.pjax.submit(e,"#page",{fragment:"#page",timeout:8e3}),0<$(".js-search.is-visible").length&&($(".js-toggle-search").toggleClass("is-active"),$(".js-search").toggleClass("is-visible"))}),mashiro_global.lib.pjax_to_url=function(e,t){$.pjax({url:e,container:t,fragment:t,timeout:8e3})},window.addEventListener("popstate",function(e){Siren.AH(),Siren.PE(),Siren.CE(),timeSeriesReload(!0)},!1)),$.fn.postLike=function(){if($(this).hasClass("done"))return!1;$(this).addClass("done");var e=$(this).data("id"),t=$(this).data("action"),o=$(this).children(".count");return $.post(Poi.ajaxurl,{action:"specs_zan",um_id:e,um_action:t},function(e){$(o).html(e)}),!1},$(document).on("click",".specsZan",function(){$(this).postLike()})});var isWebkit=-1<navigator.userAgent.toLowerCase().indexOf("webkit"),isOpera=-1<navigator.userAgent.toLowerCase().indexOf("opera"),isIe=-1<navigator.userAgent.toLowerCase().indexOf("msie");function render(e,l){return e.replace(/(\\)?\{([^\{\}\\]+)(\\)?\}/g,function(e,t,o,a){if(t||a)return e.replace("\\","");for(var n=o.replace(/\s/g,"").split("."),i=l,s=0,r=n.length;s<r;++s)if(null==(i=i[n[s]]))return"";return i})}(isWebkit||isOpera||isIe)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1),String.prototype.render=function(e){return render(this,e)},$(document).ready(function(){setTimeout(function(){isFirstLoad=!0,860<document.body.clientWidth&&$(".changeSkin-gear").css("visibility","visible"),$("p").remove(".head-copyright")},0)});