/**
 * Created by vadim on 9/15/16.
 */
$(function () {

    $(window).scroll(function () {
        var $header = $('.nav-top');
        var $type = $header.data('type');
        if ($type === 'transparent') {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $header.removeClass('nav-top--transparent')
            } else {
                $header.addClass('nav-top--transparent');
            }
        }
    });

    jQuery(window).trigger('resize').trigger('scroll');

    $('.parallax-window').parallax(
        {
            imageSrc: './img/bloombees_background.jpg',
            parallax: 'scroll',
            zIndex: 0
        });

    inView('.homedevices-inner')
        .once('enter', el => {
            $('img', el).each(function () {
                $(this).css({'visibility': 'hidden'});
                var $delay = $(this).data('delay');
                if ($delay !== undefined) {
                    setTimeout(() => {
                        $(this).css({'visibility': 'visible'});
                        $(this).addClass($(this).data('animate') + ' animated');
                    }, $delay);
                } else {
                    $(this).css({'visibility': 'visible'});
                    $(this).addClass($(this).data('animate') + ' animated');
                }
            })
        });

    $('.go-up-btn').click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    var $inputWrap = $('.input-block');
    $inputWrap.each(function (index,element) {
        var $element = $(element);
        var $label = $('label', $element);
        var $input = $('input', $element);
        var $info = $('.input-info', $element);
        if ($input.attr('disabled')) {
            $inputWrap.addClass('disabled');
        }
        $input.on('focus', function () {
            $element.addClass('dirty');
        });
        $input.on('blur input', function () {
            $element.removeClass('has-error');
            $('#call_me_submit').attr('disabled', true);
            if ($input.attr('required') && !($input.val())) {
                $element.addClass('has-error');
                $info.html('<p>This field cannot be empty</p>');
            } else if ($input.attr('type') === 'tel') {
                if ($input.attr('aria-invalid')) {
                    $element.addClass('has-error');
                    $info.html('<p>Invalid phone format</p>');
                } else {
                    $('#call_me_submit').attr('disabled', false);
                }
            }
        });
        if ($input.attr('placeholder') != ('' || undefined )) {
            $label.addClass('placeholder');
        }
    });

});