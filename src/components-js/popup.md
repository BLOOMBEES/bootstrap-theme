---
layout: docs
title: Popup
group: components-js
---

### Overview

If you want add popup window, just add `bb-popup` attribute to the relative element and specify `popup-show` and `popup-hide` animation classes. 
To see list of all classes you can visit: [animate.css GitHub](https://github.com/daneden/animate.css)
Or you can write your own CSS3 animations.

---

### Parameters

| Parameter                 | Type       | Default | Description |
|:--------------------------|:-----------|:--------|:------------|
| `bb-popup` *(required)*   | *(String)* | ''      | Popup element selector|
| `popup-show` *(required)* | *(String)* | ''      | Popup animation class on view|
| `popup-hide` *(required)* | *(String)* | ''      | Popup animation class on hide|
{:class="table table-hover table-bordered"}

---

### Example

{%example html%}
<div class="content">
    <span class="login-btn" id="profile-button" bb-popup="#profile-popup" popup-show="slideInDown" popup-hide="slideOutUp">
        <button class="button button-main">Open popup</button>
    </span>
    <div class="profile-popup hide animated bg-green-dark" id="profile-popup">
        <div class="tabs" tabs="profile-popup" tabs-theme="light">
            <ul class="nav nav-justified" role="tablist">
                <li class="sliding sliding__right" tab-open="seller" role="tab">As a seller</li>
                <li class="sliding" tab-open="buyer" role="tab">As a buyer</li>
            </ul>
            <div class="tabs--flex">
                <div class="tab" tab-name="seller" role="tabpanel">
                    <div class="border-wrap pb-30">
                        <div class="logged-avatar">
                            <img src="https://cdn.bloombees.com/static/img/default/store_default.png" class="img img-circle center-block" alt="">
                        </div>
                        <div class="logged-info">
                            <p class="logged-name">nickname</p>
                            <p class="logged-url"><a href="#">bloombees.com/nickname</a></p>
                        </div>
                    </div>
                </div>
                <div class="tab" tab-name="buyer" role="tabpanel">
                    <div class="border-wrap pb-30">
                        <div class="logged-avatar">
                            <img src="https://cdn.bloombees.com/static/img/default/store_default.png" class="img img-circle center-block" alt="">
                        </div>
                        <div class="logged-info">
                            <p class="logged-name">Seller</p>
                            <p class="logged-url"><a href="#">bloombees.com/seller</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{%endexample html%}