// Make a div from the same textarea
(function($){
    "use strict";

    console.log('stuff1');

    // Highlighter CLASS DEFINITON
    // ===============================
    $.fn.highlightIt = function(option) {
        var args = arguments;

        options = typeof option == 'object' && option;
        console.log('stuff2:'+options);

        // build HTML
        this.$el = this;

        this.$el.wrap('<div class=highlightTextarea></div>');
        this.$main = this.$el.parent();

        this.$main.prepend('<div class=container><div class=highlighter></div></div>');
    };

// Copy the text

// highlight specific text


}(jQuery));