(function($) {
    var $content = $('.jq-content');
    var $button = $('.jq-button');
    var $backdrop = $('.navigation__sidebar--backdrop');

    $(document).ready(function() {
        $button.click(function() {
            var button = $(this);
            button.toggleClass('activate2');
            $backdrop.toggleClass('activate1');
            $backdrop.on('click', function() {
                $(this).removeClass('activate1');
                button.removeClass('activate2');
            })
        });
    });
})($);