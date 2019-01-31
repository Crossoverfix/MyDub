$(document).ready(function () {
    var $allFromEvent = $("[data-toggle-f-my]");
    var $allToEvent = $("[data-toggle-t-my]");
    var $allClose = $('[data-close-my]');
    $allClose.on('click', function () {
        $allToEvent.removeClass('active');
    })
    $allFromEvent.on('click', function () {
        let $tempItem = $(this);
        let $tempData = $(this).attr('data-toggle-f-my');
        let $tempFind = $("[data-toggle-t-my='" + $tempData + "']");
        let $tempEvent = $allToEvent.filter($tempFind);
        if ($tempEvent.hasClass('active')){
            $allToEvent.removeClass('active');
        } else {
            $allToEvent.removeClass('active');
            $tempEvent.addClass('active');
        }
        return false;
    })
    $(document).on('click', function (event) {
        if (!$allToEvent.is(event.target) && $allToEvent.has(event.target).length === 0){
            $allToEvent.removeClass('active');
        }
    })
})