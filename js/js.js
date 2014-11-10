// JavaScript Document

var myScroll;

function loaded() {
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: true,
		onScrollEnd: function () {
			//document.querySelector('#indicator > li.active').className = '';
			//document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
		}
	 });
}

document.addEventListener('DOMContentLoaded', loaded, false);


$(document).ready(function()
{ 

	$('.pora_dyshat').hover(function()
	{  
		$(this).find(".shine_h").stop();
		$(this).find(".shine_h").css("left","-100%");  
		$(this).find(".shine_h").animate({left:"100%" }, {
				duration: 2000,
				step: function( now, fx ){
//console.log("shine_h:",$(".shine_h").css("top"));
				}
			});
	
	}, function()
	{
//		$(this).find(".large_thumb").stop().animate({marginLeft:0, marginTop:0},200);
	}); 
	
	$('.btn_105').hover(function()
	{  
		var that=$(this);
//console.debug("shine_r83.length:",$(this).find(".shine_r83").length);
		if(that.find(".shine_r83").length==0)
			that.append('<div class="shining"><i class="shine_r83"></i></div>');  
		that.find(".shine_r83").show().rotate({
			  angle:0, 
			  animateTo:360, 
			  duration: 3000,
			  callback: function(){that.find(".shine_r83").fadeOut("fast");}/**/
		   });
	
	}, function()
	{ $(this).find(".shine_r83").fadeOut("fast");
//		$(this).find(".large_thumb").stop().animate({marginLeft:0, marginTop:0},200);
	}); 
	

	var rotation = function (){
	   $(".btn_tafen_nazal .shine_radial").rotate({
		  angle:0, 
		  animateTo:360, 
		  duration: 8000,
		  callback: rotation
	   });
	}
	
	rotation();
	
	$(".btn_inform_small").on("click",function(){
			
			var that=$(this);
			var to_right=0;
			var inform_small_content=that.closest(".inform_small").find(".inform_small_content");
//console.log("inform_small_content:",inform_small_content.css("right"));
			if(inform_small_content.css("right")=='0px')
				to_right=-325;
				
			inform_small_content.animate({right:to_right }, {
				duration: 1000
			})
		
		});

	
	
// SLIDE 3
	$("#slide_3 .slide_title").on("click",function(){
//console.log("$(this):",$(this));
			var line_messages1=$(this).closest(".slide").find(".lmessage_1");
			var line_messages2=$(this).closest(".slide").find(".lmessage_2");
			var line_messages3=$(this).closest(".slide").find(".lmessage_3");
//console.log("line_messages:",line_messages);
//			line_messages.each(function(){
	
				var message_content1=line_messages1.find(".message_content");
				var ml_line1=line_messages1.find(".ml_line");
				var ml_knopka1=line_messages1.find(".ml_knopka");
				var ml_tchk1=line_messages1.find(".ml_tchk");
				var ml_line_width1=line_messages1.find(".ml_line").css("width");
				ml_knopka1.hide();
				ml_tchk1.hide();
				ml_line1.css({width:0});
				message_content1.hide();
				
				
	
				var message_content2=line_messages2.find(".message_content");
				var ml_line2=line_messages2.find(".ml_line");
				var ml_knopka2=line_messages2.find(".ml_knopka");
				var ml_tchk2=line_messages2.find(".ml_tchk");
				var ml_line_width2=line_messages2.find(".ml_line").css("width");
				ml_knopka2.hide();
				ml_tchk2.hide();
				ml_line2.css({width:0});
				message_content2.hide();
				
				
	
				var message_content3=line_messages3.find(".message_content");
				var ml_line3=line_messages3.find(".ml_line");
				var ml_knopka3=line_messages3.find(".ml_knopka");
				var ml_tchk3=line_messages3.find(".ml_tchk");
				var ml_line_width3=line_messages3.find(".ml_line").css("width");
				ml_knopka3.hide();
				ml_tchk3.hide();
				ml_line3.css({width:0});
				message_content3.hide();
				
				
				
				ml_knopka1.fadeIn(1000, function(){
								ml_line1.animate({width: ml_line_width1}, {
								duration: 3000,
								complete: function() {
									ml_tchk1.fadeIn(1000, function(){
											message_content1.fadeIn("slow",function(){
												//----------------------
												ml_knopka2.fadeIn(1000, function(){
															ml_line2.animate({width: ml_line_width2}, {
															duration: 3000,
															complete: function() {
																ml_tchk2.fadeIn(1000, function(){
																		message_content2.fadeIn("slow",function(){
												//----------------------
																			ml_knopka3.fadeIn(1000, function(){
																						ml_line3.animate({width: ml_line_width3}, {
																						duration: 3000,
																						complete: function() {
																							ml_tchk3.fadeIn(1000, function(){
																									message_content3.fadeIn("slow");
																							});
																						}
																					});
																			});
												//----------------------
																			});
																});
															}
														});
												});
												//----------------------
												});
									});
								}
							});
					});
				

//				});
		});
// /SLIDE 3
	
	
// SLIDE 4
	
	$("#slide_4 .slide_title").on("click",function(){
		
		var slide4_plashka1=$("#slide_4 .plashka1");
		var slide4_knopka1=$("#slide_4 .knopka1");
		var slide4_line1=$("#slide_4 .line1");
		var slide4_knopka=$("#slide_4 .knopka");
		var slide4_plashka=$("#slide_4 .plashka");
		var slide4_message=$("#slide_4 .message");
		var slide4_line=$("#slide_4 .line");
		var slide4_diagonal_line=$("#slide_4 .diagonal_line");
		
		slide4_plashka1.hide();
		slide4_knopka1.hide();
		slide4_line1.height(0);
		slide4_knopka.hide();
		slide4_plashka.hide();
		slide4_message.hide();
		slide4_line.hide();
		slide4_diagonal_line.height(0).width(0);
		
		slide4_plashka1.fadeIn("slow",function(){
				slide4_knopka1.fadeIn("slow",function(){
						
					});		
			});
		slide4_knopka1.on("click",function(){
			slide4_line1.animate({height:237},{
					duration: 1000,
					complete: function(){
						slide4_plashka.eq(0).fadeIn("slow",function(){
							slide4_plashka.eq(1).fadeIn("slow",function(){
								slide4_plashka.eq(2).fadeIn("slow",function(){
									slide4_plashka.eq(3).fadeIn("slow",function(){
										slide4_plashka.eq(4).fadeIn("slow",function(){
											slide4_diagonal_line.animate({height:570,width:880},{
													duration: 3000,
													complete: function(){
															slide4_knopka.eq(0).fadeIn("slow",function(){
																slide4_knopka.eq(1).fadeIn("slow",function(){
																	slide4_knopka.eq(2).fadeIn("slow",function(){
																		slide4_knopka.eq(3).fadeIn("slow",function(){
																			slide4_knopka.eq(4).fadeIn("slow",function(){
																			});
																		});
																	});
																});
															});
															
														}
												});
										
											});
										});
									});
								});
							});		
						}
				});
			});
		
//console.log("slide4_knopka:",slide4_knopka);
		slide4_knopka.on("click",function(){
//console.log("$(this):",$(this));
			
				var cur_knopka_line=$(this).closest(".knopka_mes").find(".line");
				var cur_knopka_mes=$(this).closest(".knopka_mes").find(".message");
				cur_knopka_line.fadeToggle();
				cur_knopka_mes.fadeToggle();
			});	
			
	});
	
	
	
// /SLIDE 4


// SLIDE 5
			
	$("#slide_5 .slide_title").on("click",function(){

			var slide5_krug1=$("#slide_5 .krug1");
			var slide5_krug2=$("#slide_5 .krug2");
			var slide5_krug3=$("#slide_5 .krug3");
			var slide5_krug4=$("#slide_5 .krug4");
			var slide5_krug5=$("#slide_5 .krug5");
			
			var slide5_content1=$("#slide_5 .krug1 .content");
			var slide5_content2=$("#slide_5 .krug2 .content");
			var slide5_content3=$("#slide_5 .krug3 .content");
			var slide5_content4=$("#slide_5 .krug4 .content");
			var slide5_content5=$("#slide_5 .krug5 .content");

			slide5_krug1.hide();
			slide5_krug2.hide();
			slide5_krug3.hide();
			slide5_krug4.hide();
			slide5_krug5.hide();
			
			slide5_krug5.css({left:59,top:290});
			
			slide5_krug5.fadeIn(2000,function(){
				slide5_krug1.fadeIn();
				slide5_krug5.animate({left:501,top:78}, {
						duration: 2500,
						complete: function() {
							slide5_krug2.fadeIn();
							slide5_krug5.animate({left:734,top:419}, {
									duration: 2500,
									complete: function() {
										slide5_krug3.fadeIn();
										slide5_krug5.animate({left:889,top:-58}, {
												duration: 2500,
												complete: function() {
													slide5_krug4.fadeIn();
													slide5_krug5.animate({left:1263,top:278}, {
															duration: 2500/*,
															complete: function() {}*/
														});
												}
											});
									}
								});
						}
					});
				});
			
			
			/*
			slide5_krug1.css({left:66,top:335});
			slide5_krug2.css({left:507,top:175});
			slide5_krug3.css({left:746,top:429});
			slide5_krug4.css({left:920,top:172});
			slide5_krug5.css({left:1263,top:280});
			*/
			
			
			
			
				
		});
		
// /SLIDE 5

// SLIDE 6

	var slide6_knopka=$("#slide_6 .messages_container .message .knopka");
	slide6_knopka.on("click",function(){
			$(this).siblings(".content").slideToggle(3000);
		})
// /SLIDE 6
	
}); 
