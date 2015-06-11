;(function($){
    
    // Plugins init here
    var element = $('.container');
    
    element.each(function(index){
        if(!$(this).hasClass('header') && !$(this).hasClass('article') && !$(this).hasClass('footer') && !$(this).hasClass('brands')){
            $(this).removeClass('container');
        }
    });

})(jQuery);