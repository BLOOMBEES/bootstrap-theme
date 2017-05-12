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

To activate your custom tabs use jQuery:

```js
$('custom-selector').tabs();
```


### __Horizontal tabs__

Here is an example markup:

{% example html %}
<div class="tabs-simple bg-green-dark" data-tabs="horizontal-tabs" data-tabs-theme="light">
    <section class="bb-tabs-section" role="tablist">
        <div class="tab" data-tab-open="Tab1" role="tab">
            <i class="tab-icon icon"></i>
            <span class="tab-name">Tab name 1</span>
            <span class="tab-detail">Tab details</span>
        </div>
        <div class="tab" data-tab-open="Tab2" role="tab">
            <i class="tab-icon icon"></i>
            <span class="tab-name">Tab name 2</span>
            <span class="tab-detail">Tab details</span>
        </div>
        <div class="tab" data-tab-open="Tab3" role="tab">
            <i class="tab-icon icon"></i>
            <span class="tab-name">Tab name 3</span>
            <span class="tab-detail">Tab details</span>
        </div>
    </section>
    <div class="content-section">
        <div class="tab-content color-white" data-tab-name="Tab1" role="tabpanel">
            Tab1
        </div>
        <div class="tab-content color-white" data-tab-name="Tab2" role="tabpanel">
            Tab2
        </div>
        <div class="tab-content color-white" data-tab-name="Tab3" role="tabpanel">
            Tab3
        </div>
    </div>
</div>
{% endexample %}

You can activate your custom tabs element using jQuery:

```javascript
$('.my-custom-selector').tabsSimple();
```

---

### __Vertical tabs__

Here is an example markup:

{% example html %}
<section class="tabs-simple section-with-tabs" data-tabs="horizontal-tabs" data-tabs-theme="light">
    <div class="tabs-section" role="tablist">
        <div class="tab" data-tab-open="Tab1" role="tab">
            Tab name
        </div>
        <div class="tab" data-tab-open="Tab2" role="tab">
            Second tab name
        </div>
    </div>
    <div class="content-section">
        <div class="tab-content" data-tab-name="Tab1" role="tabpanel">
            <section class="storefront-details-section">
                <h1 class="title-section">
                    Storefront details
                </h1>
                <h5 class="text-dark">
                    In this section you'll find all the basic information related to your Bloombees Storefront
                </h5>
                <form class="bb-form bb-form__line storefront-details-form" name="storefront_details_form">
                    <div class="input-block about-your-storefront">
                        <label class="field-label">
                            About your storefront
                        </label>
                        <textarea class="store-description-field">            
                        </textarea>
                    </div>
                    <div class="input-block bb-input">
                        <label for="storefront_name" class="field-label">
                            Storefront name
                        </label>
                        <input id="storefront_name" name="storefront_name" required="" pattern="[a-zA-Z0-9ñÑ\s]{1,50}$" type="text" tabindex="1">
                        <div class="form-alert" role="alert">
                            <div data-error="required">
                                This filel is required
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
                        <a class="web-address" href="https://dev.bloombees.com/selectionby/beeviral_7341">https://dev.bloombees.com/selectionby/beeviral_7341</a>
                    </div>
                    <div class="storefront-language bb-select">
                        <label class="field-label">
                            Storefront language
                        </label>
                        <select class="select-primary" tabindex="3" name="storefront_language">
                            <option value="en">EN</option>
                            <option value="es">ES</option>  
                            <option value="ru">RU</option>  
                        </select>
                        <span class="icon bb-icon-dropdown"></span>
                    </div>
                    <div class="save-button-container align-center-container">
                        <button class="button button-main save-button">
                            Save changes
                        </button>
                    </div>
                </form>
            </section>
        </div>
        <div class="tab-content" data-tab-name="Tab2" role="tabpanel">
            Tab2 content
        </div>
    </div>
</section>
{% endexample %}

You can activate your custom tabs element using jQuery:

```javascript
$('.my-custom-selector').tabsSimple();
```