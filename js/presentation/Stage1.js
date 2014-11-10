var Stage = Backbone.Model.extend({

    'type': 'Stage',

    'defaults': {
    
        'history': null,
    
        'window': null,
        'document': null,
        'body': null,
        'container': null,
        'slides': [],
        'slide_names': [],
        
        'current_slide': null,
        'next_slide': null,
        
        'is_changing_slides': false,
        'is_ready': false,
        
        'swipe_tolerance': 100
        
    },
    
    'initialize': function() {
        
        // set global container
        this.set('container', jQuery('.slide-container'));
        this.set('document', jQuery(document));
        this.set('window', jQuery(window));
        this.set('body', jQuery(document.body));
        
        // init history
        var history = window.History; history.Adapter.bind(window, 'statechange', _.bind(this.historyStateChange, this));
        this.set('history', history);
        
        // prevent window bouncing
        this.get('document').on('touchmove', function(e) {
            e.preventDefault();
        });
                
        // init navigation
        this.initNavigation();
        
        // init ios scrolling
        this.initScrollers();
    },
    
    'initNavigation': function() {
        var that = this;
        
        if (Modernizr.touch === true) {
            this.get('document').swipe({
                'threshold': that.get('swipe_tolerance'),
                'swipeLeft': function() {
                    that.navigateNext();
                },
                'swipeRight': function() {
                    that.navigatePrevious();
                }
            });
        } else {
            this.get('document').on('keyup', function(e) {
                // ->
                if (e.keyCode === 39) {
                    that.navigateNext();
                };
                if (e.keyCode === 37) {
                    that.navigatePrevious();
                };
            });
        };
        
    },
    
    'initScrollers': function() {
        if (Modernizr.touch) {
            var scrollables = jQuery('.scrollable');
            var count = scrollables.length;
            var s = null;
            
            for (var i = 0, el = null; i < count; i++) {
                el = scrollables.eq(i);
                s = new iScroll(el[0]);
                el.data('scroll', s);
            };
        };
    },
        
    // call when done
    'ready': function() {
        
        // hide and init all slides
        _.each(this.get('slides'), function(slide) {
            slide.getElement().addClass('m-hidden');
            slide.get('init').call(slide);
        });
        
        // stage is ready
        this.get('container').removeClass('pre-init');
        
        // set ready flag to true
        this.set('is_ready', true);
        
        // show required slide
        var wanted_slide = this.get('history').getState().url.split('?');
        if (wanted_slide.length > 1) {
            this.toSlide(wanted_slide[1]);
        } else {
            this.toSlide(this.get('slide_names')[0]);
        };
    },
    
    'getContainer': function() {
        return this.get('container');
    },
    
    // add Slide instance
    'addSlide': function(slide) {
        var that = this;
    
        // events for slide
        slide.on('hide', function() {
            slide.getElement().addClass('m-hidden');
            
            if (slide.get('next_at_once') === false) {
                var next_slide = that.get('next_slide');
                
                next_slide.getElement().removeClass('m-hidden');
                next_slide.get('show').call(next_slide);
            };
        });
        slide.on('show', function() {
            that.changeDone();
        });
        
        // remember slide
        this.get('slide_names').push(slide.getName());
        this.get('slides').push(slide);
        
        return this;
    },
    
    'getSlide': function(name) {
        return _.find(this.get('slides'), function(slide) {
            return slide.getName() == name;
        });
    },
    
    // get current slide
    'getCurrentSlide': function() {
        return this.get('current_slide');
    },
    
    // let's move to the slide
    'toSlide': function(name) {
        
        if (this.canChangeSlide() === false) return;
        if (this.get('current_slide') !== null && this.get('current_slide').getName() === name) return;
    
        // moving slides
        var next_slide = this.getSlide(name);
        var current_slide = this.get('current_slide');
        var is_current_slide = !(current_slide === null);
        
        // let's ask current slide if it's ready to hide
        if (is_current_slide === true && current_slide.canChange() === false) return;
        
        // slide will change
        this.trigger('slide_will_change', {
            'current_slide': current_slide,
            'next_slide': next_slide
        });
        
        // set changing flag
        this.set('is_changing_slides', true);
        
        this.set('next_slide', next_slide);
        
        next_slide.get('willShow').call(next_slide);
        if (is_current_slide === true) {
            current_slide.get('willHide').call(current_slide);
        };
        
        if (is_current_slide === true) {
            if (current_slide.get('next_at_once') === true) {
                next_slide.getElement().removeClass('m-hidden');
                next_slide.get('show').call(next_slide);
            };
            current_slide.get('hide').call(current_slide);
        } else {
            next_slide.getElement().removeClass('m-hidden');
            next_slide.get('show').call(next_slide);
        };
        
    },
    
    // can we change slides now?
    'canChangeSlide': function() {
        return (this.get('is_changing_slides') === false && this.get('is_ready') === true);
    },

    // called when all slide-changing actions are finished
    'changeDone': function() {
        var current_slide = this.get('current_slide');
        var next_slide = this.get('next_slide');
        
        this.set('current_slide', next_slide);
        this.set('next_slide', null);
        this.set('is_changing_slides', false);
        
        try {
        	this.get('history').pushState({
    	        'slide': next_slide.getName()
	        }, next_slide.getTitle(), '?' + next_slide.getName());
    	} catch (e) { }
        // slide did change
        this.trigger('slide_did_change', {
            'current_slide': current_slide,
            'next_slide': next_slide
        });
    },

    // let's move to the next slide
    'navigateNext': function() {
        if (this.canChangeSlide() === false) return;
        
        var current_slide = this.get('current_slide'); if (current_slide.canChange() === false) return;
        var next_slide = current_slide.getNextSlide(); if (next_slide === false) return;
        
        if (next_slide !== null) {
            this.toSlide(next_slide);
        } else {
            var current_name = current_slide.getName();
            var slide_names = this.get('slide_names');

            var index = _.indexOf(slide_names, current_name);

            if (index !== slide_names.length - 1) {
                this.toSlide(slide_names[index + 1]);
            };
        };
    },
    
    // let's move to the previous slide
    'navigatePrevious': function() {
        if (this.canChangeSlide() === false) return;
        
        var current_slide = this.get('current_slide'); if (current_slide.canChange() === false) return;
        var previous_slide = current_slide.getPreviousSlide(); if (previous_slide === false) return;
        
        if (previous_slide !== null) {
            this.toSlide(previous_slide);
        } else {
            var current_name = current_slide.getName();
            var slide_names = this.get('slide_names');

            var index = _.indexOf(slide_names, current_name);

            if (index !== 0) {
                this.toSlide(slide_names[index - 1]);
            };
        };
    },

    // when history is changed
    'historyStateChange': function() {
        var new_state = this.get('history').getState();
        
        if (new_state.data['slide'] != null) {
            if (new_state.data.slide !== this.get('current_slide').getName()) {
                this.toSlide(new_state.data.slide);
            };
        } else {
            this.toSlide(this.get('slides')[0].getName());
        };
    }
});