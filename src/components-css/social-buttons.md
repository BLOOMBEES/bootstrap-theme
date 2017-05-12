---
layout: docs
title: Social buttons
group: components-css
redirect_from: "/components-css/"
---

Bloombees theme includes three main type of buttons, each comming in three variants: normal and disabled.

### Horizontal buttons

{% example html %}
<div class="login-btn-group login-socialnetwork-buttons login-form-mode-only text-center">
    <a href="#" class="social-network-link">
        <button class="facebook">
            <span class="login-btn-icon icon bb-icon-facebook"></span>
            <div class="login-btn-label hide-xs">Facebook</div>
        </button>
    </a>
    <a href="#" class="social-network-link">
        <button class="google">
            <span class="login-btn-icon icon bb-icon-google-plus"></span>
            <div class="login-btn-label hide-xs">Google+</div>
        </button>
    </a>
    <a href="#" class="social-network-link">
        <button class="instagram">
            <span class="login-btn-icon icon bb-icon-instagram"></span>
            <div class="login-btn-label hide-xs">Instagram</div>
        </button>
    </a>
</div>
{% endexample %}


### Round buttons

{% example html %}
<div class="shared-networks">
    <ul class="list-unstyled fx fx-row fx-x-sb fx-y-center">
        <li class="facebook">
           <span class="icon bb-icon-facebook"></span>
        </li>
        <li class="twitter">
            <span class="icon bb-icon-twitter"></span>
        </li>
        <li class="google">
            <span class="icon bb-icon-google-plus"></span>
        </li>
        <li class="linkedin">
            <span class="icon bb-icon-linkedin"></span>
        </li>
        <li class="pinterest hidden-xxs">
            <span class="icon bb-icon-pinterest"></span>
        </li>
        <li class="copy-link hidden-xxs">
            <span class="icon bb-icon-link"></span>
        </li>
        <li class="email hidden-xxs">
            <span class="icon bb-icon-email"></span>
        </li>
    </ul>
    <div class="visible-xxs">
        <ul class="list-unstyled fx fx-row fx-x-sb fx-y-center">
            <li class="pinterest">
                <span class="icon bb-icon-pinterest"></span>
            </li>
            <li class="copy-link">
                <span class="icon bb-icon-link"></span>
            </li>
            <li class="email">
                <span class="icon bb-icon-email"></span>
            </li>
        </ul>
    </div>
</div>
{% endexample %}