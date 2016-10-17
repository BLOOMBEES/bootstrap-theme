---
layout: docs
title: Tabs
group: components
---

{% example html %}
<div class="tabs tabs-dark" ng-controller="TabController as tab">
    <ul class="nav nav-justified" role="tablist">
        <li class="tab-seller-head sliding sliding__right"  ng-class="{'active': tab.seller}" ng-click="tab.seller = true;" role="tab">As a seller</li>
        <li class="tab-buyer-head sliding" ng-class="{'active': !tab.seller}" ng-click="tab.seller = false;" role="tab">As a buyer</li>
    </ul>
    <div class="tab-seller" ng-if="tab.seller" role="tabpanel">
        <div class="empty">
            <p class="icon bb-icon-notifications"></p>
            <p>You haven't received any notifications!</p>
        </div>
    </div>
    <div class="tab-buyer" ng-if="!tab.seller" role="tabpanel">
        <div class="empty">
            <p class="icon bb-icon-notifications"></p>
            <p>You have no active conversations available</p>
        </div>
    </div>
</div>
{% endexample %}