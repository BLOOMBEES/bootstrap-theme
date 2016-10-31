---
layout: docs
title: Tabs
group: components-js
---

{% example html %}
<div class="tabs" tabs tabs-theme="dark">
    <ul class="nav nav-justified" role="tablist">
        <li class="sliding sliding__right" tab-open="seller" role="tab">As a seller</li>
        <li class="sliding" tab-open="buyer" role="tab">As a buyer</li>
    </ul>
    <div class="tabs--flex">
        <div class="tab" tab-name="seller" role="tabpanel">
            <div class="empty">
                <p class="icon bb-icon-notifications"></p>
                <p>You haven't received any notifications!</p>
            </div>
        </div>
        <div class="tab" tab-name="buyer" role="tabpanel">
            <div class="empty">
                <p class="icon bb-icon-notifications"></p>
                <p>You have no active conversations available</p>
            </div>
        </div>
    </div>
</div>
{% endexample %}