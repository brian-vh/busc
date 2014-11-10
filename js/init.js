var clickEvent = 'click';
var hoverEvent = 'mouseenter';

(function() {
    if (Modernizr.touch) {
        clickEvent = 'touchclick';
        hoverEvent = 'touchend';
        
        var $w = $(window)
        .data('touchmove', false)
        .on({
            'touchstart': function(e) {
                $w.data('touchmove', false);
                $w.data('touchtarget', $(e.originalEvent.target));
            },
            'touchmove': function() {
                $w.data('touchmove', true);
            },
            'touchend': function() {
                if ($w.data('touchmove') === false) {
                    $w.data('touchtarget').trigger(clickEvent);
                };
                $w.data('touchmove', false);
            }
        });
    };

    $('a').on('click', function(e) { //:not(.pdf_link)
//console.log("this href:",$(this).attr("href"));
        if (e) {
            e.preventDefault();
        };
        this.blur();
    });
})();