---
layout: docs
title: Tabs
group: components-js
---

We have several types of tabs.

### Sliding tabs

Used in sidebars and popups. Implemented as jQuery extension. 

Parameters should be added to the elements with `data-` prefix.
 
| Attribute  | Element | Description |
|------------|---------|-------------|
| tabs       | .tabs   | Custom tabs name |
| tabs-theme | .tabs   | Tabs general styling. Available themes: `light` and `dark` |
| tab-open   | li      | Target tab's name |
| tab-name   | .tab    | Tab's name.  |
{:class="table table-condenced table-hover table-bordered"}

#### Example

{% example html %}
<div class="tabs bg-green-dark" data-tabs="custom-name" data-tabs-theme="light">
    <ul class="nav nav-justified" role="tablist">
        <li data-tab-open="seller" role="tab">seller</li>
        <li data-tab-open="promoter" role="tab">promoter</li>
        <li data-tab-open="buyer" role="tab">buyer</li>
        <hr>
    </ul>
    <div class="tabs--flex">
        <div class="tab" data-tab-name="seller" role="tabpanel">
            <div class="empty">
                <p class="icon bb-icon-notifications"></p>
                <p>You haven't received any notifications!</p>
            </div>
        </div>
        <div class="tab" data-tab-name="promoter" role="tabpanel">
            <div class="empty">
                <p class="icon bb-icon-notifications"></p>
                <p>Promoter's tab</p>
            </div>
        </div>
        <div class="tab" data-tab-name="buyer" role="tabpanel">
            <div class="empty">
                <p class="icon bb-icon-notifications"></p>
                <p>You have no active conversations available</p>
            </div>
        </div>
    </div>
</div>
{% endexample %}


### __Horizontal tabs__

Used in private area and implemented as AngularJS component `<bb-primary-tabs>`. All you need is to set `base-path` attribute with route name.
It will fetch child routes of the `base-path` and generate tabs with routes. 

#### Example

```hmtl
<div class="bg-green-dark">
    <bb-primary-tabs base-path="private.merchant.orders"></bb-primary-tabs>
</div>
```

**Generated markup:**

{% example html %}
<div class="bg-green-dark">
    <bb-primary-tabs base-path="private.influencer.settings" class="ng-isolate-scope">
        <section class="bb-tabs-section" ng-show="!bbPrimaryTabsController.hideTabs">
        <!-- ngRepeat: tab in bbPrimaryTabsController.tabs -->
        <a ng-repeat="tab in bbPrimaryTabsController.tabs" ng-class="{'active': $first &amp;&amp; $root.$state.is(bbPrimaryTabsController.basePath)}" ui-sref="private.influencer.settings.storefront_details" ui-sref-active="active" class="tab active" href="/app/influencer/settings/storefront_details">
            <i class="tab-icon icon "></i>
            <span ng-bind="tab.name" class="tab-name ng-binding">storefront details</span>
            <span ng-bind="tab.text" class="tab-detail "></span>
        </a>
        <!-- end ngRepeat: tab in bbPrimaryTabsController.tabs -->
        <a ng-repeat="tab in bbPrimaryTabsController.tabs" ng-class="{'active': $first &amp;&amp; $root.$state.is(bbPrimaryTabsController.basePath)}" ui-sref="private.influencer.settings.personal_details" ui-sref-active="active" class="tab" href="/app/influencer/settings/personal_details">
            <i class="tab-icon icon "></i>
            <span ng-bind="tab.name" class="tab-name ng-binding">personal details</span>
            <span ng-bind="tab.text" class="tab-detail "></span>
        </a>
        <!-- end ngRepeat: tab in bbPrimaryTabsController.tabs -->
        </section>
    </bb-primary-tabs>
</div>
{% endexample %}

Without angular markup HTML code will look like:

{% example html %}
<div class="bg-green-dark">
    <section class="bb-tabs-section">
        <a class="tab">
            <i class="tab-icon icon"></i>
            <span class="tab-name"> Tab name
            </span>
            <span class="tab-detail"> Tab detaild
            </span>
        </a>
        <a class="tab">
            <i class="tab-icon icon"></i>
            <span class="tab-name"> Tab name
            </span>
            <span class="tab-detail"> Tab details
            </span>
        </a>
        <a class="tab active">
            <i class="tab-icon icon"></i>
            <span class="tab-name"> Tab name
            </span>
            <span class="tab-detail"> Tab details
            </span>
        </a>
    </section>
</div>

<script>
$('bb-tabs-section').tabs();
</script>
{% endexample %}

### __Vertical tabs__

Used in private area and implemented as AngularJS component `<bb-secondary-tabs>`. All you need is to set `base-path` attribute with route name.
It will fetch child routes of the `base-path` and generate tabs with routes. 

#### Example

```hmtl
<div class="bg-green-dark">
    <bb-primary-tabs base-path="private.merchant.orders"></bb-primary-tabs>
</div>
```

**Generated markup:**

{% example html %}
<div class="bg-grey">
    <section class="settings-storefront-section ng-scope">
        <bb-secondary-tabs base-path="private.influencer.settings.storefront_details" class="ng-isolate-scope">
            <section class="section-with-tabs">
                <div class="tabs-section">
                    <!-- ngRepeat: tab in bbSecondaryTabsController.tabs -->
                    <div class="tab ng-scope active" ng-repeat="tab in bbSecondaryTabsController.tabs" ng-class="{'active': tab.isActive}" ui-sref="private.influencer.settings.storefront_details.storefront_details" ui-sref-active="active" href="/app/influencer/settings/storefront_details/storefront_details">
                        <span ng-bind="tab.name" class="ng-binding">storefront details</span>
                    </div>
                    <!-- end ngRepeat: tab in bbSecondaryTabsController.tabs -->
                    <div class="tab ng-scope" ng-repeat="tab in bbSecondaryTabsController.tabs" ng-class="{'active': tab.isActive}" ui-sref="private.influencer.settings.storefront_details.payment_info" ui-sref-active="active" href="/app/influencer/settings/storefront_details/payment_info">
                        <span ng-bind="tab.name" class="ng-binding">how to get paid</span>
                    </div>
                    <!-- end ngRepeat: tab in bbSecondaryTabsController.tabs -->
                </div>
                <div class="content-section">
                    <!-- uiView: -->
                    <div ui-view="" class="ng-scope">
                        <section class="storefront-details-section ng-scope">
                            <h1 class="title-section">
                                Storefront details
                            </h1>
                            <h5 class="text-dark">
                                In this section you'll find all the basic information related to your Bloombees Storefront
                            </h5>
                            <form class="bb-form bb-form__line storefront-details-form ng-pristine ng-valid-pattern ng-valid ng-valid-required" ng-hide="storefrontDetails.loading || storefrontDetails.error" bb-validate-form="" name="storefront_details_form" style="">
                                <div class="input-block about-your-storefront">
                                    <label class="field-label">
                                        About your storefront
                                    </label>
                                    <textarea ng-model="storefrontDetails.storefrontInfo.Store_description" class="store-description-field ng-pristine ng-untouched ng-valid ng-empty">            </textarea>
                                </div>
                                <div class="input-block bb-input dirty" ng-class="{'dirty': storefrontDetails.storefrontInfo.Store_name
                                        || storefront_details_form.storefront_name.$dirty}" style="">
                                    <label for="storefront_name" class="field-label">
                                        Storefront name
                                    </label>
                                    <input id="storefront_name" name="storefront_name" required="" pattern="[a-zA-Z0-9ñÑ\s]{1,50}$" type="text" tabindex="1" ng-model="storefrontDetails.storefrontInfo.Store_name" class="ng-pristine ng-untouched ng-valid-pattern ng-not-empty ng-valid ng-valid-required" style="">
                                    <div class="form-alert" role="alert">
                                        <div data-error="required">
                                        </div>
                                        <div data-error="pattern">
                                            Incorrect format
                                        </div>
                                    </div>
                                </div>
                                <div class="web-address-section">
                                    <label class="field-label">
                                        Web address:
                                    </label>
                                    <a ng-bind="storefrontDetails.storefrontInfo.Store_url" ng-href="https://dev.bloombees.com/selectionby/beeviral_7341" class="web-address ng-binding" href="https://dev.bloombees.com/selectionby/beeviral_7341">https://dev.bloombees.com/selectionby/beeviral_7341</a>
                                </div>
                                <div class="storefront-language bb-select">
                                    <label class="field-label">
                                        Storefront language
                                    </label>
                                    <select ng-model="storefrontDetails.storefrontInfo.Store_languageIsoCode" class="select-primary ng-pristine ng-untouched ng-valid ng-not-empty" tabindex="3" name="storefront_language" style=""><option value="? string:en ?"></option>
                                        <!-- ngRepeat: language in storefrontDetails.languages --><option ng-repeat="language in storefrontDetails.languages" ng-selected="storefrontDetails.storefrontInfo.Store_languageIsoCode === language.code" ng-value="language.code" ng-bind="language.name" value="en" class="ng-binding ng-scope" selected="selected">English</option><!-- end ngRepeat: language in storefrontDetails.languages --><option ng-repeat="language in storefrontDetails.languages" ng-selected="storefrontDetails.storefrontInfo.Store_languageIsoCode === language.code" ng-value="language.code" ng-bind="language.name" value="es" class="ng-binding ng-scope">Español</option><!-- end ngRepeat: language in storefrontDetails.languages --><option ng-repeat="language in storefrontDetails.languages" ng-selected="storefrontDetails.storefrontInfo.Store_languageIsoCode === language.code" ng-value="language.code" ng-bind="language.name" value="ru" class="ng-binding ng-scope">Русский</option><!-- end ngRepeat: language in storefrontDetails.languages --><option ng-repeat="language in storefrontDetails.languages" ng-selected="storefrontDetails.storefrontInfo.Store_languageIsoCode === language.code" ng-value="language.code" ng-bind="language.name" value="pl" class="ng-binding ng-scope">Polski</option><!-- end ngRepeat: language in storefrontDetails.languages -->
                                    </select>
                                    <span class="icon bb-icon-dropdown"></span>
                                </div>
                                <div class="save-button-container align-center-container">
                                    <button class="button button-main save-button" ng-disabled="!storefront_details_form.$valid" ng-click="storefrontDetails.save()">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                            <div class="loader-container storefront-details-loader position-r" ng-class="{'active': storefrontDetails.loading}" style="">
                                <div class="loader"></div>
                            </div>
                        </section>    
                    </div>
                </div>
            </section>
        </bb-secondary-tabs>
    </section>
</div>
{% endexample %}

Blank tabs markup will look like:

{% example html %}
<section class="section-with-tabs">
    <div class="tabs-section">
        <div class="tab">
            <span>Tab name</span>
        </div>
        <div class="tab">
            <span>Second tab name</span>
        </div>
    </div>
    <div class="content-section">
        <div ui-view></div>
    </div>
</section>
{% endexample %}