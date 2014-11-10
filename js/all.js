(function($) {
    
    var stage = new Stage;
var slide_9_bl=4, stop_next_rotate=false;
    
    
/* ---------- SLIDE 1 ---------- */
     var slide_1 = new Slide({
        'element': $('#slide_1'),
        'stage': stage,
//        'previous_slide': 'slide_0',
//        'previous_slide': 'false',
        'next_slide': 'slide_2',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
			element.find(".btn_spazm").on(clickEvent, function() {
            stage.toSlide('slide_2');
	        });
			element.find(".btn_buskopan").on(clickEvent, function() {
            stage.toSlide('slide_6');
	        });
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			$logoBI.hide();
			$button_buskoan.hide();
			$button_spazm.hide();
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 1 ---------- */


/* ---------- SLIDE 2 ---------- */
     var slide_2 = new Slide({
        'element': $('#slide_2'),
        'stage': stage,
        'previous_slide': 'slide_1',
        'next_slide': 'slide_5',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));


		element.on(clickEvent,".photo_item",function(){
			$("#slide_2 .photo_item .photo_small").stop(true, true).show();
			$("#slide_2 .photo_container .photo_item .photo_big").stop(true, true).hide();

			$(this).find(".photo_small").stop(true, true).fadeOut('slow');
			$(this).find(".photo_big").stop(true, true).fadeIn(2500);
			var photo_item_index=$(this).index("#slide_2 .photo_item");
			$("#slide_2 .photo_text_container .phtext_item").stop(true, true).fadeOut('slow');
			$("#slide_2 .photo_text_container .phtext_item").eq(photo_item_index).stop(true, true).fadeIn(2500);
		});
	
},
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			$logoBI.show();
			$button_buskoan.show();
			$button_spazm.show();
			//this.get('any_div').css({'opacity': 0});
			$("#slide_2 .photo_item").eq(0).click();
        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 2 ---------- */


/* ---------- SLIDE 3 ---------- */
     var slide_3 = new Slide({
        'element': $('#slide_3'),
        'stage': stage,
        'previous_slide': 'slide_2',
        'next_slide': 'slide_4',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            BlikItem(element.find(".blinking_oval"),3000,1500);
            this.set('text_blok_pain', element.find('.text_blok_pain'));
            this.set('blinking_oval', element.find('.blinking_oval'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			this.get('text_blok_pain').css({'opacity': 0});
			this.get('blinking_oval').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                that.get('text_blok_pain').transit({'opacity': 1}, 1000);
				that.get('blinking_oval').transit({'opacity': 1}, 1000);
            });
			
        }
    });
/* ---------- /SLIDE 3 ---------- */


/* ---------- SLIDE 4 ---------- */
     var slide_4 = new Slide({
        'element': $('#slide_4'),
        'stage': stage,
        'previous_slide': 'slide_3',
        'next_slide': 'slide_5',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 4 ---------- */


/* ---------- SLIDE 5 ---------- */
     var slide_5 = new Slide({
        'element': $('#slide_5'),
        'stage': stage,
        'previous_slide': 'slide_4',
        'next_slide': 'slide_9',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            this.set('circle_button_green', element.find('.circle_button_green'));
            this.set('circle_button_red', element.find('.circle_button_red'));
			
		element.on(clickEvent,".circle_button_red",function(){
			$("#slide_5 .analgetiki_text").fadeIn(2000);
		});
		
			
		element.on(clickEvent,".circle_button_green",function(){
			$("#slide_5 .spazmolitiki_text").fadeIn(2000);
		});
		
		
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			this.get('circle_button_red').css({'opacity': 0});
			this.get('circle_button_green').css({'opacity': 0});

stop_next_rotate=false;
shine_rotate(0,'#slide_5 .shine_container',50,false);
        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                that.get('circle_button_red').transit({'opacity': 1}, 500, function(){
                that.get('circle_button_green').eq(0).transit({'opacity': 1}, 300, function(){
                that.get('circle_button_green').eq(1).transit({'opacity': 1}, 300, function(){
                that.get('circle_button_green').eq(2).transit({'opacity': 1}, 300, function(){
                that.get('circle_button_green').eq(3).transit({'opacity': 1}, 300, function(){
                that.get('circle_button_green').eq(4).transit({'opacity': 1}, 300, function(){
                that.get('circle_button_green').eq(5).transit({'opacity': 1}, 300, function(){
						that.set('can_change', true);
					});
					});
					});
					});
					});
					});
					});
            });
			
        },
        'hide': function() {
stop_next_rotate=true;
            var that = this;
            
            this.getElement().transit({
                'opacity': 0
            }, 500, function() {
                that.trigger('hide');
            });
        }
    });
/* ---------- /SLIDE 5 ---------- */


/* ---------- SLIDE 6 ---------- */
     var slide_6 = new Slide({
        'element': $('#slide_6'),
        'stage': stage,
        'previous_slide': 'slide_5',
        'next_slide': 'slide_7',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
			element.find(".btn_star_n1").on(clickEvent, function() {
            stage.toSlide('slide_8');
	        });
			element.find(".btn_green").on(clickEvent, function() {
            stage.toSlide('slide_7');
	        });
			element.find(".btn_yellow").on(clickEvent, function() {
            stage.toSlide('slide_9');
	        });
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=4;			
			$logoBI.show();
			$button_buskoan.show();
			$button_spazm.show();

			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 6 ---------- */


/* ---------- SLIDE 7 ---------- */
     var slide_7 = new Slide({
        'element': $('#slide_7'),
        'stage': stage,
        'previous_slide': 'slide_6',
        'next_slide': 'slide_8',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 7 ---------- */


/* ---------- SLIDE 8 ---------- */
     var slide_8 = new Slide({
        'element': $('#slide_8'),
        'stage': stage,
        'previous_slide': 'slide_6',
        'next_slide': 'slide_9',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            this.set('nuber_1', element.find('.nuber_1'));
            BlikItem(element.find(".nuber_1"),3000,1500);
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=4;			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 8 ---------- */

/* ---------- SLIDE 9 ---------- */
     var slide_9 = new Slide({
        'element': $('#slide_9'),
        'stage': stage,
        'previous_slide': 'slide_5',
        'next_slide': 'slide_10',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
			//this.next_slide='slide_19';
slide_9_bl=4;

			element.on(clickEvent,".btn_left_menu",function(){
				var btn_item_index=$(this).index("#slide_9 .btn_left_menu");
				slide_9_bl=btn_item_index;
switch(slide_9_bl) {
    case 3:
		that.set("next_slide",'slide_10');	
        break;
    case 2:
		that.set("next_slide",'slide_14');	
        break;
    case 1:
		that.set("next_slide",'slide_15');	
        break;
    case 0:
		that.set("next_slide",'slide_19');	
        break;
    default:
		that.set("next_slide",'slide_11');	
}	
				$("#slide_9 .menu_item").removeClass("active");
				$("#slide_9 .menu_text_item").stop(true, true).fadeOut();
	
				$("#slide_9 .menu_item").eq(btn_item_index).addClass("active");
				$("#slide_9 .menu_text_item").eq(btn_item_index).stop(true, true).fadeIn(2500);
			});
			
			element.find(".btn2_1").on(clickEvent, function() {
				stage.toSlide('slide_10');
	        });
			element.find(".btn2_2").on(clickEvent, function() {
				stage.toSlide('slide_11');
	        });
			element.find(".btn2_3").on(clickEvent, function() {
				stage.toSlide('slide_12');
	        });
			element.find(".btn2_4").on(clickEvent, function() {
				stage.toSlide('slide_13');
	        });
			element.find(".text_bystro_btn").on(clickEvent, function() {
				stage.toSlide('slide_14');
	        });
			element.find(".btn4_1").on(clickEvent, function() {
				stage.toSlide('slide_15');
	        });
			element.find(".btn4_2").on(clickEvent, function() {
				stage.toSlide('slide_15');
	        });
			element.find(".btn4_3").on(clickEvent, function() {
				stage.toSlide('slide_16');
	        });
			element.find(".btn4_4").on(clickEvent, function() {
				stage.toSlide('slide_17');
	        });
			element.find(".btn4_5").on(clickEvent, function() {
				stage.toSlide('slide_18');
	        });
			element.find(".btn5_1").on(clickEvent, function() {
				stage.toSlide('slide_19');
	        });
			element.find(".btn5_2").on(clickEvent, function() {
				stage.toSlide('slide_20');
	        });
			element.find(".btn5_3").on(clickEvent, function() {
				stage.toSlide('slide_21');
	        });
			element.find(".btn5_4").on(clickEvent, function() {
				stage.toSlide('slide_22');
	        });
			element.find(".btn5_5").on(clickEvent, function() {
				stage.toSlide('slide_23');
	        });
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			//this.get('any_div').css({'opacity': 0});



        var wanted_slide = this.getStage().get('history').getState().url.split('?');
        var swipe_direction = this.getStage().get('swipe_direction');

console.debug("wanted_slide",wanted_slide[1]);	


switch(wanted_slide[1]) {
    case 'slide_13':
		slide_9_bl=2;
		this.set("next_slide",'slide_14');	
       break;
    case 'slide_14':
		slide_9_bl=1;
		this.set("next_slide",'slide_15');	
        break;
    case 'slide_15':
		slide_9_bl=0;
		this.set("next_slide",'slide_24');	
        break;
    default:
		this.set("next_slide",'slide_10');	
}	
console.debug("slide_9.slide_9_bl:",slide_9_bl);		
console.debug("slide_9.NextSlide",this.getNextSlide());		

console.debug("swipe_direction",swipe_direction);	



				$("#slide_9 .menu_item").removeClass("active");
				$("#slide_9 .menu_text_item").stop(true, true).fadeOut();
	
				$("#slide_9 .menu_item").eq(slide_9_bl).addClass("active");
				$("#slide_9 .menu_text_item").eq(slide_9_bl).stop(true, true).fadeIn(2500);
				


			$("#slide_9 .menu_item").eq(slide_9_bl).addClass("active");
			$("#slide_9 .menu_text_item").eq(slide_9_bl).stop(true, true).fadeIn(2500);
stop_next_rotate=false;
shine_rotate(0,'#slide_9 .menu_text_item1 .circle_button_green',72,false);
        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        },
/*        'willHide': function() {
        },
*/        'hide': function() {
stop_next_rotate=true;
            var that = this;
            
            this.getElement().transit({
                'opacity': 0
            }, 500, function() {
                that.trigger('hide');
            });

        }
    });
/* ---------- /SLIDE 9 ---------- */


/* ---------- SLIDE 10 ---------- */
     var slide_10 = new Slide({
        'element': $('#slide_10'),
        'stage': stage,
        'previous_slide': 'slide_9',
        'next_slide': 'slide_11',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
		element.on(clickEvent,".btn_item",function(){
			$("#slide_10 .btn_item").removeClass("active");
			$("#slide_10 .text_item").stop(true, true).fadeOut();

			$(this).addClass("active");
			var btn_item_index=$(this).index("#slide_10 .btn_item");
			$("#slide_10 .text_item").eq(btn_item_index).stop(true, true).fadeIn(2500);
		});
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=3;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 10 ---------- */


/* ---------- SLIDE 11 ---------- */
     var slide_11 = new Slide({
        'element': $('#slide_11'),
        'stage': stage,
        'previous_slide': 'slide_10',
        'next_slide': 'slide_12',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
            BlikItem(element.find(".line_item1"),6000,5000);
            BlikItem(element.find(".line_item2"),6000,5000);
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=3;
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 11 ---------- */


/* ---------- SLIDE 12 ---------- */
     var slide_12 = new Slide({
        'element': $('#slide_12'),
        'stage': stage,
        'previous_slide': 'slide_11',
        'next_slide': 'slide_13',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();

            this.set('grafik_green1', element.find('.grafik_green1'));
            this.set('grafik_yellow1', element.find('.grafik_yellow1'));
            this.set('grafik_green2', element.find('.grafik_green2'));
            this.set('grafik_yellow2', element.find('.grafik_yellow2'));
            this.set('grafik_green3', element.find('.grafik_green3'));
            this.set('grafik_yellow3', element.find('.grafik_yellow3'));
			
            this.set('legend_green', element.find('.legend_green'));
            this.set('legend_yellow', element.find('.legend_yellow'));
			
            this.set('graf_vyvod', element.find('.graf_vyvod'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=3;
			this.get('legend_green').css({'opacity': 0});
			this.get('legend_yellow').css({'opacity': 0});
			
			this.get('grafik_green1').css({'bottom': -729});
			this.get('grafik_yellow1').css({'bottom': -118});
			this.get('grafik_green2').css({'bottom': -176});
			this.get('grafik_yellow2').css({'bottom': -118});
			this.get('grafik_green3').css({'bottom': -118});
			this.get('grafik_yellow3').css({'bottom': -118});
			
			this.get('graf_vyvod').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                that.get('legend_green').transit({'opacity': 1}, 1000, function(){
																				 
                that.get('grafik_green1').transit({'bottom': 1}, 1500, function(){
                that.get('grafik_green2').transit({'bottom': 1}, 500, function(){
                that.get('grafik_green3').transit({'bottom': 1}, 500, function(){
																		  
                that.get('legend_yellow').transit({'opacity': 1}, 1000, function(){
																		   
                that.get('grafik_yellow1').transit({'bottom': 1}, 500, function(){
                that.get('grafik_yellow2').transit({'bottom': 1}, 500, function(){
                that.get('grafik_yellow3').transit({'bottom': 1}, 500, function(){
																				 
                that.get('graf_vyvod').transit({'opacity': 1}, 2500, function(){

					that.set('can_change', true);
						
					});
				
					});
					});
					});
					});
					});
					});

					});
					});
});
			
        }
    });
/* ---------- /SLIDE 12 ---------- */


/* ---------- SLIDE 13 ---------- */
     var slide_13 = new Slide({
        'element': $('#slide_13'),
        'stage': stage,
        'previous_slide': 'slide_12',
        'next_slide': 'slide_9',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=3;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 13 ---------- */


/* ---------- SLIDE 14 ---------- */
     var slide_14 = new Slide({
        'element': $('#slide_14'),
        'stage': stage,
        'previous_slide': 'slide_9',
        'next_slide': 'slide_9',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            this.set('obvedenie_oc', element.find('.obvedenie_oc'));
            this.set('obvedenie_gr', element.find('.obvedenie_gr'));
            this.set('grafik_strelka', element.find('.grafik_strelka'));
            this.set('line_num', element.find('.line_num'));
            this.set('grafik_line', element.find('.grafik_line'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=2;
			this.get('obvedenie_oc').css({'opacity': 0});
			this.get('obvedenie_gr').css({'opacity': 0});
			this.get('grafik_strelka').css({'opacity': 0,top:-200});
			this.get('line_num').css({'opacity': 0});
			this.get('grafik_line').css({'width': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                that.get('grafik_line').eq(0).transit({'width': 1289}, 1500, function(){
                that.get('grafik_line').eq(1).transit({'width': 1289}, 1500, function(){
                that.get('obvedenie_gr').transit({'opacity': 1}, 2000, function(){
                that.get('obvedenie_oc').transit({'opacity': 1}, 1000, function(){
                that.get('grafik_strelka').transit({'opacity': 1,top:149}, 1000, function(){
                that.get('line_num').transit({'opacity': 1}, 500, function(){
						that.set('can_change', true);
						
					});
					});
					});
					});
					});
					});
            });
			
        }
    });
/* ---------- /SLIDE 14 ---------- */


/* ---------- SLIDE 15 ---------- */
     var slide_15 = new Slide({
        'element': $('#slide_15'),
        'stage': stage,
        'previous_slide': 'slide_9',
        'next_slide': 'slide_24',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=1;
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 15 ---------- */


/* ---------- SLIDE 16 ---------- */
     var slide_16 = new Slide({
        'element': $('#slide_16'),
        'stage': stage,
        'previous_slide': 'slide_15',
        'next_slide': 'slide_17',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
		var view_vyvod_text=0;
		element.on(clickEvent,".button",function(){
			$(this).next(".text").slideDown(1500,function(){
			view_vyvod_text++;
				if(view_vyvod_text==2)
				{
					element.find(".vyvod.vyvod_text").fadeIn('slow');
				}
			});	
		});
			
			
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=1;
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 16 ---------- */


/* ---------- SLIDE 17 ---------- */
     var slide_17 = new Slide({
        'element': $('#slide_17'),
        'stage': stage,
        'previous_slide': 'slide_16',
        'next_slide': 'slide_18',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=1;
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 17 ---------- */


/* ---------- SLIDE 18 ---------- */
     var slide_18 = new Slide({
        'element': $('#slide_18'),
        'stage': stage,
        'previous_slide': 'slide_17',
        'next_slide': 'slide_9',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=1;
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 18 ---------- */


/* ---------- SLIDE 19 ---------- */
     var slide_19 = new Slide({
        'element': $('#slide_19'),
        'stage': stage,
        'previous_slide': 'slide_9',
        'next_slide': 'slide_20',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			//this.get('any_div').css({'opacity': 0});
slide_9_bl=0;
        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 19 ---------- */


/* ---------- SLIDE 20 ---------- */
     var slide_20 = new Slide({
        'element': $('#slide_20'),
        'stage': stage,
        'previous_slide': 'slide_19',
        'next_slide': 'slide_21',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=0;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 20 ---------- */


/* ---------- SLIDE 21 ---------- */
     var slide_21 = new Slide({
        'element': $('#slide_21'),
        'stage': stage,
        'previous_slide': 'slide_20',
        'next_slide': 'slide_22',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
         BlikItem(element.find(".at6oclock_num"),6000,5000);   
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=0;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 21 ---------- */


/* ---------- SLIDE 22 ---------- */
     var slide_22 = new Slide({
        'element': $('#slide_22'),
        'stage': stage,
        'previous_slide': 'slide_21',
        'next_slide': 'slide_23',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=0;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 22 ---------- */


/* ---------- SLIDE 23 ---------- */
     var slide_23 = new Slide({
        'element': $('#slide_23'),
        'stage': stage,
        'previous_slide': 'slide_22',
        'next_slide': 'slide_24',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=0;
			
			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 23 ---------- */


/* ---------- SLIDE 24 ---------- */
     var slide_24 = new Slide({
        'element': $('#slide_24'),
        'stage': stage,
        'previous_slide': 'slide_9',
        'next_slide': false,
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
		element.on(clickEvent,".photo_item",function(){
			$("#slide_24 .photo_item .photo_small").stop(true, true).show();
			$("#slide_24 .photo_container .photo_item .photo_big").stop(true, true).hide();

			$(this).find(".photo_small").stop(true, true).fadeOut('slow');
			$(this).find(".photo_big").stop(true, true).fadeIn(2500);
			var photo_item_index=$(this).index("#slide_24 .photo_item");
			$("#slide_24 .photo_text_container .phtext_item").stop(true, true).fadeOut('slow');
			$("#slide_24 .photo_text_container .phtext_item").eq(photo_item_index).stop(true, true).fadeIn(2500);
		});
		
        },
		
        'willShow': function() {
            var that = this,
                element = this.getElement();
slide_9_bl=4;
			
			//this.get('any_div').css({'opacity': 0});

			$("#slide_24 .photo_item").eq(0).click();
        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
/* ---------- /SLIDE 24 ---------- */


/* ---------- SLIDE 25 ---------- */
/*     var slide_25 = new Slide({
        'element': $('#slide_25'),
        'stage': stage,
        'previous_slide': 'slide_24',
        'next_slide': 'slide_26',
        
        'title': 'Бускопан®. ',
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			
			//this.get('any_div').css({'opacity': 0});


        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});
            });
			
        }
    });
*/
/* ---------- /SLIDE 25 ---------- */
/*    var slide_26 = new Slide({
        'element': $('#slide_26'),
        'stage': stage,
        'previous_slide': 'slide_25',
        'next_slide': false,
        
        'title': 'Бускопан®. ',
        
        
        'init': function() {
            var that = this,
                element = this.getElement();
            
            //this.set('any_div', element.find('.any_div'));
        },
        'willShow': function() {
            var that = this,
                element = this.getElement();
			

			//this.get('any_div').css({'opacity': 0});

        },
        'show': function() {
            var that = this;
            
            this.set('can_change', true);//false
			
            this.getElement().transit({
                'opacity': 1
            }, 200, function() {
                that.trigger('show');
				
				
                //that.get('any_div').eq(0).transit({'opacity': 1}, 1000, function(){
						that.set('can_change', true);
						
				//	});

            });
			
        },
        
        // before slide will be hidden
        'willHide': function() {
			//$navi_right.show();
        }
    });
*/
    
    stage.addSlide(slide_1);
    stage.addSlide(slide_2);
//    stage.addSlide(slide_3);
//    stage.addSlide(slide_4);
    stage.addSlide(slide_5);
//    stage.addSlide(slide_6);
//    stage.addSlide(slide_7);
//    stage.addSlide(slide_8);
    stage.addSlide(slide_9);
    stage.addSlide(slide_10);
    stage.addSlide(slide_11);
    stage.addSlide(slide_12);
    stage.addSlide(slide_13);
    stage.addSlide(slide_14);
    stage.addSlide(slide_15);
/*
    stage.addSlide(slide_16);
    stage.addSlide(slide_17);
    stage.addSlide(slide_18);
    stage.addSlide(slide_19);
    stage.addSlide(slide_20);
    stage.addSlide(slide_21);
    stage.addSlide(slide_22);
    stage.addSlide(slide_23);
*/
    stage.addSlide(slide_24);
/*
    stage.addSlide(slide_25);
    stage.addSlide(slide_26);
*/
    
    var ie7 = document.all && navigator.appVersion.indexOf('MSIE 7.') != -1;
    var ie8 = document.all && navigator.appVersion.indexOf('MSIE 8.') != -1;
    
    var $logoBI = $('.logoBI');
    var $button_spazm = $('.button_spazm');
    var $button_buskoan = $('.button_buskoan');
    var $btn_title = $('.btn_title');

	var $navi_left = $('a.navi-link.m-left');
    var $navi_right = $('a.navi-link.m-right');
    
		    /*$btn_vazomatornyj_rinit,$btn_rinit_beremenyx,$btn_alergicheskij_rinit,$btn_polipoznyj_rinit;*/
    var $navigate_btn = $('.navigate_btn');
	
    var $snoska_btn = $('.snoska_btn');
    var $shine_r72 = $('.shine_r72');
    var $btns_passive = $('.btn_container .btn_105');
    
	var $all_nav_btns=$(".navi-link, .btn_home");


	$shine_r72.hover(function(index)
	{  
		var that=$(this);
//console.debug("shine_r83.length:",$(this).find(".shine_r83").length);
		if(that.find(".shine_r72").length==0)
			that.append('<div class="shining_r72"><i class="shine_r72"></i></div>');  
			
		that.find(".shine_r72").show().rotate({
			  angle:0, 
			  animateTo:360, 
			  duration: 3000,
			  callback: function(){that.eq().find(".shine_r72").fadeOut("fast");}
		   });/**/
		   
		/*that.find(".shine_r83").show().rotate({
			  angle:0, 
			  animateTo:360, 
			  duration: 3000,
			  callback: function(){that.find(".shine_r83").fadeOut("fast");}
		   });*//*setInterval(function(){ shine_r72_rotate(next_index,elem_collect);},50);*/
	
	}); 
/*
function shine_r72_rotate(index,elem_collect)
{
	var that=$(elem_collect).eq(index);
	var that_length=$(elem_collect).length;
//console.debug("that_length:",that_length);
	next_index=index+1;
	if(next_index==that_length)
	next_index=0;
//console.debug("next_index:",next_index);
	if(that.find(".shine_r72").length==0)
		that.append('<div class="shining_r72"><i class="shine_r72"></i></div>');  
		
	that.find(".shine_r72").show().rotate({
		  angle:0, 
		  animateTo:360, 
		  duration: 4000,
		  callback: function(){setTimeout(function(){ shine_r72_rotate(next_index,elem_collect);},100);}
	   });
}
*/
function shine_rotate(index,elem_collect,radius)
{
	var that=$(elem_collect).eq(index);
	var that_length=$(elem_collect).length;
//console.debug("that_length:",that_length);
	next_index=index+1;
	if(next_index==that_length)
	next_index=0;
//console.debug("next_index:",next_index);
	if(that.find(".shine_r"+radius).length==0)
		that.append('<div class="shining_r'+radius+'"><i class="shine_r'+radius+'"></i></div>');  
		
	that.find(".shine_r"+radius).show().rotate({
		  angle:0, 
		  animateTo:360, 
		  duration: 4000,
		  callback: function(){if(!stop_next_rotate)shine_rotate_timer=setTimeout(function(){ shine_rotate(next_index,elem_collect,radius);},10);}/**/
	   });
	   
	
}


function BlikSmallPakc(elem)
{
	var element_width=elem.width();
	var element_blik;
	if(elem.find(".blik_pack").length>0)
		element_blik=elem.find(".blik_pack");
	else
	{
		element_blik=$('<div class="blik_pack" />');
		elem.prepend(element_blik);
	}
	element_blik.css({left:-element_width,opacity:1});
//console.debug("element_blik_pos:",element_blik_pos); 
element_blik.animate({left:Math.abs(element_width)},1500,function(){element_blik.css({left:-element_width});}); 
	setInterval( function() { element_blik.animate({left:Math.abs(element_width)},1500,function(){element_blik.css({left:-element_width});}); } , 5000)
}

function BlikTitle(elem)
{
	elem.css({overflow:"hidden"});
	var element_width=elem.width();
	var element_blik;
	if(elem.find(".blik_title").length>0)
		element_blik=elem.find(".blik_title");
	else
	{
		element_blik=$('<div class="blik_title" />');
		elem.prepend(element_blik);
	}
	element_blik.css({left:-element_width});
//console.debug("element_blik_pos:",element_blik_pos); 
element_blik.animate({left:Math.abs(element_width)},1500,function(){element_blik.css({left:-element_width});}); 
	setInterval( function() { element_blik.animate({left:Math.abs(element_width)},2500,function(){element_blik.css({left:-element_width});}); } , 10000)
}

	
function BlikItemOne(elem)
{
	var element_width=elem.width();
	var element_blik;
	if(elem.find(".blik").length>0)
		element_blik=elem.find(".blik").css({left:-element_width});
	else
	{
		element_blik=$('<div class="blik" />').css({left:-element_width});
		elem.prepend(element_blik);
	}
	element_blik.animate({left:Math.abs(element_width)},1500); 
}

	
function BlikItem(elem,timer_time,blik_time)
{
	elem.css({overflow:'hidden'});
	if(!timer_time)timer_time=5000;
	if(!blik_time)blik_time=1500;
	var element_width=elem.width()<540?540:elem.width();
	var element_height=elem.height();
	var element_blik;
	if(element_width<element_height)element_width=element_height;
	if(elem.find(".blik").length>0)
		element_blik=elem.find(".blik");
	else
	{
		element_blik=$('<div class="blik" />');
		elem.prepend(element_blik);
	}
	element_blik.css({left:-element_width});
//console.debug("element_blik_pos:",element_blik_pos); 
	element_blik.animate({left:Math.abs(element_width)},blik_time,function(){element_blik.css({left:-element_width});}); 
	setInterval( function() { element_blik.animate({left:Math.abs(element_width)},blik_time,function(){element_blik.css({left:-element_width});}); } , timer_time)
}


	
	$snoska_btn.on(clickEvent, function() {
			var that=$(this);
			var snoska=that.closest(".snoska_container");
			var snoska_tcont=snoska.find(".snoska_text_container");
			var snoska_text=snoska.find(".snoska_text_content");
			
			var to_left=0;

			var snoska_width=-(snoska.width()+10);
//console.debug("snoska_width:",snoska_width);
//console.debug("snoska_tcont.position().left:",snoska_tcont.position().left);

			to_left=(snoska_tcont.position().left==0?snoska_width:0);
			to_opasity=(snoska_tcont.position().left==0?0:1);
//console.debug("to_left:",to_left);
			snoska_tcont.animate({left:to_left,opacity:to_opasity}, {
				duration: 1000
			})
		});
			
	$button_spazm.on(clickEvent, function() {
			stage.toSlide('slide_2');
		});
	$button_buskoan.on(clickEvent, function() {
			stage.toSlide('slide_6');
		});
	$btn_title.on(clickEvent, function() {
			stage.toSlide('slide_9');
		});
			
    $navi_left.on(clickEvent, function() {
			stage.navigatePrevious();
		});
    $navi_right.on(clickEvent, function() {
			stage.navigateNext();
		});
    
    // слайды сменились
    stage.bind('slide_did_change', function(e) {
        var previous_slide = e.previous_slide;
        var current_slide = e.next_slide;
        
        stage.getContainer().removeClass('no-bg');
        if (current_slide && current_slide.getName() !== 'slide_0') {
            // перешли в любой слайд, кроме первого
            // показываем навигацию
            
           if (current_slide.getPreviousSlide() === false) {
                $navi_left.removeClass('m-active');
            } else {
                $navi_left.addClass('m-active');
            }
			
            if (current_slide.getNextSlide() === false) {
                $navi_right.removeClass('m-active');
            } else {
                $navi_right.addClass('m-active');
            }
			            
            stage.get('body').removeClass('no-bg');
            
            flag_navi_visible = true;
        };
		
        if (current_slide && current_slide.getName() == 'slide_1')
		{
//console.debug("current_slide.getName():",current_slide.getName());
			//$navigate_btn.hide();
		}
		else
			$(".boehriner_logo").removeClass("boehriner_logo_white").addClass("boehriner_logo_blue");
		
    });
    
    stage.bind('slide_will_change', function(e) {
        var current_slide = e.current_slide;
        
        if (current_slide && current_slide.getName() === 'slide_1') {
            stage.get('body').removeClass('no-bg');
        };
    });
    $("body").on(clickEvent, '.btn_instuction', function(){
			$(".instruction_container").removeClass('hide');
		});
    $(".instruction_container").on(clickEvent, '.instruction_close', function(){
			$(".instruction_container").addClass('hide');
		});
    // подключаем тултипчики
    (function() {
        $('.js-tip').each(function() {
            new Tooltip($(this));
        });
    })();
    
    // подключаем лайтбокс
    (function() {
        $('.js-popup').each(function() {
            var $el = $(this);
        
            $el.on(clickEvent, function() {
                if (ie7 === true) {
                    $.arcticmodal({
                        'content': '<div class="b-popup-img"><div class="b-popup-img__title">' + $el.data('title') + '</div></div>',
                        'afterOpen': function() {
                            var i = new Image,
                                that = this,
                                src = $el.attr('href');
                                
                            i.onload = function() {
                                var cont = that.body.find('.b-popup-img');
                                var title = cont.find('.b-popup-img__title');
                                
                                cont
                                .prepend($('<img src="' + src + '" alt="">'))
                                .css({
                                    'width': i.width,
                                    'height': i.height
                                });
                                
                                var add_height = title.outerHeight();
                                cont.css('height', i.height + add_height);
                            };
                            i.src = src;
                        }
                    });
                } else {
                    $.arcticmodal({
                        'content': '<div class="b-popup-img"><img src="' + $el.attr('href') + '"><div class="b-popup-img__title">' + $el.data('title') + '</div></div>'
                    });
                };
            });
        });
    })();
    
    // подключаем внутреннюю навигацию в исследованиях
    (function() {
        $('.js-pages').each(function() {
            new Pages($(this));
        });
        $('.js-navi').each(function() {
            new Navi($(this));
        });
    })();
    
    // при изменении ориентации меняется бг
    (function() {
        var b_rotate = $('#js-rotate');
        
        var onOrientationChange = function() {
            if (window.orientation === 0 || window.orientation === 180) {
                stage.getContainer().addClass('wrong-orientation');
                b_rotate.removeClass('hide');
            } else {
                stage.getContainer().removeClass('wrong-orientation');
                b_rotate.addClass('hide');
            };
        };
        
        stage.get('window').on('orientationchange', onOrientationChange);
    })();
    
    // подменяем иконки ссылок для ie7, ie8
    (function() {
        if (ie7 === true || ie8 === true) {
            var m_tip = $('.m-tip');
            
            m_tip.each(function() {
                var t = $(this);
                var lineHeight = parseInt(t.css('lineHeight'));
                var icon = $('<i>').css({
                    'display': 'block',
                    'width': 24,
                    'height': 25,
                    'position': 'absolute',
                    'background': 'url(images/default/tip-sign.png)',
                    'top': (lineHeight / 2) - 12,
                    'right': 0
                });
                t.append(icon);
            });
        };
    })();
    
    // попапчики с информацией по исследованию
    (function() {
        $('.js-research-tip').each(function() {
            var link = $(this);
            var content = link.parent().next().html();
            
            link.on(clickEvent, function() {
                $.arcticmodal({
                    'content': '<div class="b-popup-html">' + content + '</div>'
                });
            });
        });
    })();
    
    // временные draggable элементы
    (function() {
        var mouse = (function() {
            var m = {
                'left': 0,
                'top': 0
            };
            
            $(window).on('mousemove', function(e) {
                m.left = e.pageX;
                m.top = e.pageY;
            });
            
            return m;
        })();

function checktop(){
	dragtop_top=[false,false,false,false,false,false];
	$("#slide_7 .pokazatel_item").each(function(){
		var top_position=$(this).position();
			switch (top_position.top) {
			  case 88:
				dragtop_top[0]=true;
				break
			  case 163:
				dragtop_top[1]=true;
				break
			  case 237:
				dragtop_top[2]=true;
				break
			  case 210:
				dragtop_top[3]=true;
				break
			  case 285:
				dragtop_top[4]=true;
				break
			  case 355:
				dragtop_top[5]=true;
				break
			}
		});
}
        $('.draggable').each(function() {
            var $el = $(this);
            var $parent = $el.closest('div.draggable_content');
            
            $el.on({
                'mousedown': function(e) {
                    e.preventDefault();
                    
                    var parent_offset = $parent.offset();
                    var my_offset = $el.offset();
                    
                    my_offset.left = e.pageX - my_offset.left;
                    my_offset.top = e.pageY - my_offset.top;
                    
                    parent_offset.left += my_offset.left;
                    parent_offset.top += my_offset.top;
                    
                    $el.data('offset', parent_offset);
                }
            });
            
            $parent.on({
                'mousemove': function(e) {
                    if ($el.data('offset')) {
                        $el.css({
                            'left': e.pageX - $el.data('offset').left,
                            'top': e.pageY - $el.data('offset').top
                        });
                    };
                },
                'mouseup': function(e) {
                    if ($el.data('offset')) {
                        $el.data('offset', null);
						
//console.debug("$(this):",$(this));
						
//var dragtop_position=[88,163,237,210,285,355];
//console.debug("dragtop_top:",dragtop_top);

					if($(this).is("#slide_7 .slide7_container.container_right .container_content"))
                    {
					checktop();
//var dragtop_position=[88,163,237,210,285,355];
						var el_position=$el.position();
						var left_position,top_position;
						
						if(el_position.left>310)
							left_position=358;
						if(el_position.left>-27 && el_position.left<310)
							left_position=17;
							
						if(left_position==17)	
						{
							if(!dragtop_top[0])
							{
								top_position=88;
								dragtop_top[0]=true;
							}
							else
							{
								if(!dragtop_top[1])
								{
									top_position=163;
									dragtop_top[1]=true;
								}
								else
								{
									if(!dragtop_top[2])
									{
										top_position=237;
										dragtop_top[2]=true;
									}
								}
							}
						}
						if(left_position==358)	
						{
							if(!dragtop_top[3])
							{
								top_position=210;
								dragtop_top[3]=true;
							}
							else
							{
								if(!dragtop_top[4])
								{
									top_position=285;
									dragtop_top[4]=true;
								}
								else
								{
									if(!dragtop_top[5])
									{
										top_position=355;
										dragtop_top[5]=true;
									}
								}
							}
						}
//console.debug("dragtop_top:",dragtop_top);
//console.debug("left_position:",left_position,", top_position:",top_position);
						$el.animate({left:left_position,top:top_position},500);
					}
//console.debug("el_position:",el_position);
//console.debug($el.css('left'), $el.css('top'), $el);
                    };
                }
            });
        });
    })();
    
    $(window).on('load', function() {
        stage.ready();
        
        setTimeout(function() {
            window.ready = true;
        }, 1500);
    });
    
})(jQuery);