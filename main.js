//function removeClassActive(){
    //"use strict";
    //if($('#tab-title').length){
        //var pricingTabTitle = $('#tab-title').click(function(){
            //$("div.price-box-premium-2").show()
       //});
    //}
//}

(function($){
    "use strict";
    if($('#tab-title').length) {
        var priceTabTitle = $('#tab-title').find('a');
        var pricebox = $('.price-box-premium-2').find('content-price-annually');
        pricingTabTitle.each(function(){
            var Self = $(this);
            var tabelID = Self.attr('href');
            Self.on('click', function() {
                pricingTabTitle.removeClass('active');
                Self.addClass('active');
                pricebox.removeClass('active');
                $(tabelID).addClass('active');
                return false;
            })
        })
    }
})(jQuery);