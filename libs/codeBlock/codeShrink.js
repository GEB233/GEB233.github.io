"use strict";$(function(){var e=$('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');$(".code-area").prepend(e),$(".code-expand").on("click",function(){$(this).parent().hasClass("code-closed")?($(this).siblings("pre").find("code").show(),$(this).parent().removeClass("code-closed")):($(this).siblings("pre").find("code").hide(),$(this).parent().addClass("code-closed"))})});