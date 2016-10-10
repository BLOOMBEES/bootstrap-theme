/**
 * Created by vadim on 9/28/16.
 */
$(function () {
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
            if ($input.attr('required') && !($input.val())) {
                $element.addClass('has-error');
                $info.html('<p>This field cannot be empty</p>');
            } else if ($input.attr('type') === 'email') {
                if ($input.attr('aria-invalid')) {
                    $element.addClass('has-error');
                    $info.html('<p>Invalid email format</p>');
                } else if ($input.val().length > 255) {
                    $element.addClass('has-error');
                    $info.html('<p>Maximum number of characters for this field is  255</p>');
                }
            }
        });
        if ($input.attr('placeholder') != ('' || undefined )) {
            $label.addClass('placeholder');
        }
    });

    function addEvent(node, type, callback)
    {
        if(node.addEventListener)
        {
            node.addEventListener(type, function(e)
            {
                callback(e, e.target);

            }, false);
        }
        else if(node.attachEvent)
        {
            node.attachEvent('on' + type, function(e)
            {
                callback(e, e.srcElement);
            });
        }
    }

    function shouldBeValidated(field)
    {
        return (
            !(field.getAttribute('readonly') || field.readonly)
            &&
            !(field.getAttribute('disabled') || field.disabled)
            &&
            (field.getAttribute('pattern') || field.getAttribute('required'))
        );
    }

    function instantValidation(field)
    {
        if(shouldBeValidated(field))
        {
            var invalid =
                (
                    (field.getAttribute('required') && !field.value)
                    ||
                    (
                        field.getAttribute('pattern')
                        &&
                        field.value
                        &&
                        !new RegExp(field.getAttribute('pattern')).test(field.value)
                    )
                );

            if(!invalid && field.getAttribute('aria-invalid'))
            {
                field.removeAttribute('aria-invalid');
            }
            else if(invalid && !field.getAttribute('aria-invalid'))
            {
                field.setAttribute('aria-invalid', 'true');
            }
        }
    }

    addEvent(document, 'change', function(e, target)
    {
        instantValidation(target);
    });

    var fields = [
        document.getElementsByTagName('input'),
        document.getElementsByTagName('textarea')
    ];
    for(var a = fields.length, i = 0; i < a; i ++)
    {
        for(var b = fields[i].length, j = 0; j < b; j ++)
        {
            addEvent(fields[i][j], 'change', function(e, target)
            {
                instantValidation(target);
            });
        }
    }
});
