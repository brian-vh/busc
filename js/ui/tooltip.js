function Tooltip(container) {
    
    this.is_visible = false;
    
    this.container = container;
    this.tooltip   = null;
    this.window    = $(window);
    
    this._build();
    this._wire();
}

Tooltip.prototype._build = function() {
    this.tooltip = $('<div class="ui-tooltip"></div>');
    this.tooltip.html(this.container.next().html());
    this.tooltip.css({
        'top': 0,
        'left': 0,
        'opacity': 0,
        'zIndex': '-1'
    }).appendTo('.slide-container');
    this.container.removeAttr('title');
    
    this.is_built = true;
    
    this._position();
};

Tooltip.prototype._position = function() {
    
//console.log("container.next:",this.container.next());
//console.log("this:",this.container.next().css("height"));

	var css_Height= parseInt(this.container.next().css("height"), 10) || 0;
	var css_Width= parseInt(this.container.next().css("width"), 10) || 0;
	var css_Top= parseInt(this.container.next().css("top"), 10) || 0;
	var css_Left= parseInt(this.container.next().css("left"), 10) || 0;
	
/*	if(css_Height>0)
		//console.log("css_Height:",css_Height);
	if(css_Width>0)
		//console.log("css_Width:",css_Width);
	if(css_Top>0)
		//console.log("css_Top:",css_Top);
	if(css_Left>0)
		//console.log("css_Left:",css_Left);
*/		
    var pos_left,pos_top;
		
	if(css_Height>0 && css_Width>0 && css_Top>0 && css_Left>0)
	{
//console.log("container:",this.container);
		pos_left=css_Left;
		pos_top=css_Top;
		this.tooltip
    .css({
        'width': css_Width,
        'height': css_Height
    })
	}
	else
	{
    var ww = this.window.width();
    
    if (ww < tow * 1.5) {
        this.tooltip.css('max-width', ww / 2 );
    } else {
        this.tooltip.css('max-width', 340);
    };
    
    var tow = this.tooltip.outerWidth();
    var toh = this.tooltip.outerHeight();
    var co = this.container.offset();
    var cow = this.container.outerWidth();
    var coh = this.container.outerHeight();
    
    pos_left = co.left + (cow / 2) - (tow / 2),
        pos_top  = co.top - toh - 20;
    
    if (pos_left < 0) {
        pos_left = co.left + cow / 2 - 20;
        this.tooltip.addClass('left');
    } else {
        this.tooltip.removeClass('left');
    };
    
    if (pos_left + tow > ww) {
        pos_left = co.left - tow + cow / 2 + 20;
        this.tooltip.addClass('right');
    } else {
        this.tooltip.removeClass('right');
    };
    
    if (pos_top < 0) {
        var pos_top = co.top + coh;
        this.tooltip.addClass('top');
    } else {
        this.tooltip.removeClass('top');
    };
	}
    return [pos_left, pos_top];
};

Tooltip.prototype._wire = function() {
    
    var that = this;
    
    this.container
    .on(clickEvent, function(e) {
        that.show();
    });
    
    this.window
    .on('resize', function() {
        that.hide();
    })
    .on('touchstart', function() {
        that.hide();
    });
    
    $(document.body).on(clickEvent, function(e) {
        var target = $(e.originalEvent.target || e.originalEvent.srcElement);
        
        if (target.is(that.container) === false && target.closest(that.container).length === 0) {
            that.hide();
        };
        
    });
    
};

Tooltip.prototype.show = function() {
    if (this.is_visible === true) return;
    
    var that = this,
        pos  = this._position();
    
    this.tooltip
    .css({
        'left': pos[0],
        'top': pos[1],
        'zIndex': ''
    })
    .transit({
        // 'top': '+=10',
        'opacity': 1
    }, 50, function() {
        that.is_visible = true;
    });
};

Tooltip.prototype.hide = function() {
    if (this.is_visible === false) return;
    
    var that = this;
    
    this.tooltip
    .transit({
        // 'top': '-=10',
        'opacity': 0
    }, 250, function() {
        that.tooltip.css('zIndex', '-1');
        that.is_visible = false;
    });
};