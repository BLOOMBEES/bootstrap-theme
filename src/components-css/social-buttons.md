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
<div class="shared-networks pt-15 pb-50">
    <ul class="list-unstyled fx fx-row fx-x-sb fx-y-center">
        <li class="facebook" socialshare="" socialshare-provider="facebook" socialshare-popup-width="500" socialshare-popup-height="500" ng-click="$ctrl.share('facebook')">
           <span class="icon bb-icon-facebook"></span>
        </li>
        <li class="twitter" socialshare="" socialshare-provider="twitter" socialshare-popup-width="500" socialshare-popup-height="500" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341" ng-click="$ctrl.share('twitter')">
            <span class="icon bb-icon-twitter"></span>
        </li>
        <li class="google" socialshare="" socialshare-provider="google" socialshare-popup-width="500" socialshare-popup-height="500" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341" ng-click="$ctrl.share('google')">
            <span class="icon bb-icon-google-plus"></span>
        </li>
        <li class="linkedin" socialshare="" socialshare-provider="linkedin" socialshare-popup-width="700" socialshare-popup-height="500" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341" ng-click="$ctrl.share('lingedin')">
            <span class="icon bb-icon-linkedin"></span>
        </li>
        <li class="pinterest hidden-xxs" socialshare="" socialshare-provider="pinterest" socialshare-popup-width="700" socialshare-popup-height="500" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341" ng-click="$ctrl.share('pinterest')">
            <span class="icon bb-icon-pinterest"></span>
        </li>
        <li class="copy-link hidden-xxs" ng-click="$ctrl.copyLink(ngDialogData.product.Product_Url)">
            <span class="icon bb-icon-link"></span>
        </li>
        <li class="email hidden-xxs" socialshare="" socialshare-provider="email" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341">
            <span class="icon bb-icon-email"></span>
        </li>
    </ul>
    <div class="visible-xxs">
        <ul class="list-unstyled fx fx-row fx-x-sb fx-y-center">
            <li class="pinterest" socialshare="" socialshare-provider="pinterest" socialshare-popup-width="700" socialshare-popup-height="500" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341" ng-click="$ctrl.share('pinterest')">
                <span class="icon bb-icon-pinterest"></span>
            </li>
            <li class="copy-link" ng-click="$ctrl.copyLink(ngDialogData.product.Product_Url)">
                <span class="icon bb-icon-link"></span>
            </li>
            <li class="email" socialshare="" socialshare-provider="email" socialshare-url="https://dev.bloombees.com/shopping/beeracheltest0212b/228SJ?promoCode=7341&amp;utm_source=socialnetwork&amp;utm_medium=referral&amp;utm_campaign=shareandearn7341">
                <span class="icon bb-icon-email"></span>
            </li>
        </ul>
    </div>
</div>
{% endexample %}