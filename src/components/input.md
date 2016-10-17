---
layout: docs
title: Input
group: components
---

## Custom input structure

{% example html %}
<form name="testForm" class="bb-form bb-form__dark">
    <div class="input-block bb-input" ng-class="{'has-value': {{ name }}.{{ input.name }}.$valid, 'has-error': !testForm.name.$valid && !testForm.name.$pristine}">
        <label for="name">Your name</label>
        <input id="name"
               name="name"
               type="text"
               ng-model="randModel.name"
               ng-maxlength="255"
               required 
               aria-required="true"
               validate-name
               tabindex="1">
        <div ng-show="testForm.name.$touched" ng-messages="testForm.name.$error" class="form-alert" role="alert">
            <div ng-message="required">This field cannot be empty!</div>
            <div ng-message="fullName">Fill your name and surname. Letters only permitted.</div>
            <div ng-message="maxlength">Maximum number of characters for this field is 255</div>
        </div>
    </div>
</form>
{% endexample %}

<hr>

Available validation attributes for the inputs:

`validate-email`
<br/>`validate-name`
<br/>`password-check="formModel.password"`