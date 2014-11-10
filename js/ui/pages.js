var Pages = function(container) {
    
    this.container = container;
    this.links = container.find('a');
    this.pages = container.nextAll('.page');
    
    this._wire();
    
};

Pages.prototype._wire = function() {
    var that = this;
    
    this.links.on(clickEvent, function() {
        var $el = $(this),
            index = $el.prevAll().length;
        
        if (index === 0 || $el.hasClass('m-selected')) return;
        
        that.links.removeClass('m-selected');
        
        $el.addClass('m-selected');
        
        that.pages.addClass('hide');
        
        that.pages.eq(index - 1).removeClass('hide');
    });
};