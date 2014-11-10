var Navi = function(container) {
    
    this.container = container;
    this.links = container.find('a');
    this.pages = container.parent().find('.div');
    
    this._wire();
};

Navi.prototype._wire = function() {
    var that = this;
    
    this.links.on(clickEvent, function() {
        var $el = $(this),
            index = $el.prevAll().length;
        
        if ($el.hasClass('m-selected')) return;
        
        that.links.removeClass('m-selected');
        
        $el.addClass('m-selected');
        
        that.pages.addClass('hide');
        
        that.pages.eq(index).removeClass('hide');
    });
};