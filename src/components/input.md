---
layout: docs
title: Input
group: components
---

## Custom input structure

{% example html %}
<div class="input-block">
    <label for="login_modal_email">Email address</label>
    <input id="login_modal_email" type="email" class=""
           required="required" aria-required="true"
           pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{1,5}|[\d]{1,3})){1,2})$">
    <div class="input-info"></div>
</div>
{% endexample %}

<hr>
To test validation work required to connect the next file

[frontend/js/bloombees-bootstrap-theme.js](https://github.com/ADNRY/BLOOMBEES_2017/blob/master/2016/frontend/js/bloombees-bootstrap-theme.js)