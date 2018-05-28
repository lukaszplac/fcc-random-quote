(function($) {
    var $content = $('.jq-content');
    var $button = $('.jq-button');
    var $backdrop = $('.navigation__sidebar--backdrop');
    //console.log($button);
    $(document).ready(function() {
        $button.click(function() {
            $(this).toggleClass('activate');
            $backdrop.toggleClass('activate');
        });
    });
})($);