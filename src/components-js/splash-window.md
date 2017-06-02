---
layout: docs
title: Splash window
group: components-js
---

### Overview

When viewport < 992px we're can enable responsive cap window. 

We're using jQuery to activate it:

```js
var smallDevices = window.matchMedia('(max-width: 991px)');

function activateSplash(mq) {
  var splashWindow = $('.splash-apps'),
   body = $('body');
  
  if (mq.matches) {
    splashWindow.removeClass('hidden');
    body.addClass('no-scroll ngdialog-open');
  } else {
    splashWindow.addClass('hidden');
    body.removeClass('no-scroll ngdialog-open');
  }
}

smallDevices.addListener(activateSplash);

$(document).ready(function () {
  activateSplash(smallDevices);
});
```

Just put code below inside element you wish to cover on mobile devices.

---

### Example

{% example html %}
<div class="splash-apps fx fx-x-center fx-y-center fx-col text-center hidden">
    <img class="phone-image img-responsive" src="https://cdn.bloombees.com/static/img/homebees/mobile_version.png">
    <p class="plr-50 plr-xx-20">Some text above</p>
    <ul class="list-aside-btn">
        <li class="list-app-elem">
            <a class="link-download-app button button-main button-main__small" target="_blank"
               href="https://itunes.apple.com/us/app/bloombees-post-sell-get-paid/id1071517004?ls=1&mt=8">
                <img class="logo-app" src="https://cdn.bloombees.com/static/img/homebees/app_store_vec.svg">
            </a>
        </li>
        <li class="list-app-elem">
            <a class="link-download-app button button-main button-main__small" target="_blank"
               href="https://play.google.com/store/apps/details?id=com.bloombees.android">
                <img class="logo-app" src="https://cdn.bloombees.com/static/img/homebees/google_play_vec.svg">
            </a>
        </li>
    </ul>
    <p class="plr-50 plr-xx-20">Some text below</p>
</div>
{% endexample html %}