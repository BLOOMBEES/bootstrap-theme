---
layout: docs
title: Loaders
group: components-css
---

## Default loader

Inactive loader looks like:

```html
<div class="loader-container">
    <div class="loader"></div>
</div>
```

To activate it just add class `.active` to the `.loader-container`.

Parent element of the `.loader-containet` must have `position: relative`, width (min-width) and height (min-height).

In example below click on the loader to toggle it:

{% example html %}
<div class="fx fx-x-center fx-y-center w-100 height-140">
    <div class="position-r minw-140" onclick="this.getElementsByClassName('loader-container')[0].classList.toggle('active')">
        Some content
        <div class="loader-container active">
            <div class="loader"></div>
        </div>
    </div>
    <div>
        Content
    </div>
    <div>
        Content
    </div>
</div>
{% endexample html %}

You can override `font-size` of the `.loader` class to change size of the loader:

{% example html %}
<div class="fx fx-x-sb fx-y-center w-100 text-center">
    <span>font-size: 10px (default)</span>
    <span>font-size: 14px</span>
    <span>font-size: 6px</span>
</div>
<div class="fx fx-x-sb fx-y-center w-100 height-140">
    <div class="position-r minw-140">
        <div class="loader-container active">
            <div class="loader"></div>
        </div>
    </div>
    <div class="position-r minw-140">
        <div class="loader-container active">
            <div class="loader" style="font-size:14px"></div>
        </div>
    </div>
    <div class="position-r minw-140">
        <div class="loader-container active">
            <div class="loader" style="font-size:6px"></div>
        </div>
    </div>
</div>
{% endexample html %}

## Fullscreen loader

Add class `.loader-private` to the default `.loader-container` class to make it fullscreen. Activation with `.active` class as in default.

Press <kbd>esc</kbd> button to close loader in example below:

{% example html %}

<button class="button button-action" onclick="document.getElementsByClassName('loader-private')[0].className += ' active'">
    Activate fullscreen loader
</button>

<div class="loader-container loader-private">
    <i class="icon bb-icon-bee"></i>
</div>

<script>
document.onkeyup = function(e) {
    var fsLoader = document.getElementsByClassName('loader-private')[0];

    if (e.keyCode == 27) {
        fsLoader.classList.remove('active')
    }
};
</script>

{% endexample html %}

## Button loader

While executing some code after clicking the button - remove `.hidden` class from `.loader-container` and add `hidden` class to the `span` inside the button.
When finished - just get them all back to the initial state.

{% example html %}
<button onclick="loadMore(this)" class="button button-action button-loadmore">
    <div class="loader-container active hidden">
        <div class="loader"></div>
    </div>
    <span class="fs-16">Load more</span>
</button>

<script>   
function loadMore(buttonElement) {
    var container = buttonElement.getElementsByClassName('loader-container')[0],
        text = buttonElement.getElementsByTagName('span')[0];
    
    container.classList.remove('hidden');
    text.className += ' hidden';
    
    // here is your http request
    setTimeout(function() {
        container.className += ' hidden';
        text.classList.remove('hidden');
    }, 2000);
}
</script>
{% endexample html %}