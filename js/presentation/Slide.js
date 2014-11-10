var Slide = Backbone.Model.extend({

    'type': 'Slide',
    
    'defaults': {
    
        'stage': null,
        'element': null,
        
        'title': '',
        
        'next_at_once': true, // tells stage to show next slide right after this one begins to hide
        'can_change': true, // can we change the slide?
        
        'next_slide': null,
        'previous_slide': null,
        
        // let the slide init itself
        'init': function() {
        },
        
        // before slide will be shown
        'willShow': function() {
            this.getElement().css('opacity', 0);
        },
        'show': function() {
            var that = this;
            
            this.getElement().transit({
                'opacity': 1
            }, 500, function() {
                that.trigger('show');
            });
        },
        
        // before slide will be hidden
        'willHide': function() {
        },
        'hide': function() {
            var that = this;
            
            this.getElement().transit({
                'opacity': 0
            }, 500, function() {
                that.trigger('hide');
            });
        }
        
    },
    
    'getElement': function() {
        return this.get('element');
    },
    
    'getName': function() {
//console.log("this.getElement().attr('id'):",this.getElement().attr('id'));
        return this.getElement().attr('id');
    },
    
    'getStage': function() {
        return this.get('stage');
    },
    
    'getTitle': function() {
        return this.get('title');
    },
    
    'getNextSlide': function() {
        return this.get('next_slide');
    },
    
    'getPreviousSlide': function() {
        return this.get('previous_slide');
    },
    
    'canChange': function() {
        return this.get('can_change');
    }
    
});