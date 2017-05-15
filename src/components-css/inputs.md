---
layout: docs
title: Inputs
group: components-css
---

## Form element

To apply Bloombees general styling add class `.bb-form` to the `<form>` element.
To apply Bloombees custom styling add additional theme class to the `<form>` element.

There are available such themes:
 
| Theme name | Class name       |
|------------|------------------|
| Dark       | `bb-form__dark`  |
| White      | `bb-form__white` |
| Line       | `bb-form__line`  |
{:class="table table-condenced table-hover table-bordered"}

### Example

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form name="testFormDark" class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="nameDark">Your name</label>
            <input id="nameDark"
                   name="name"
                   type="text"
                   required 
                   aria-required="true">
        </div>
    </form>
</div>

<div class="bg-discover ptb-15 plr-15">
    <form name="testFormLight" class="bb-form bb-form__white">
        <div class="bb-input">
            <label for="nameWhite">Your name</label>
            <input id="nameWhite"
                   name="name"
                   type="text"
                   required 
                   aria-required="true">
        </div>
    </form>
</div>

<div class="bg-discover ptb-15 plr-15">
    <form name="testFormLined" class="bb-form bb-form__line">
        <div class="bb-input">
            <label for="nameLine">Your name</label>
            <input id="nameLine"
                   name="nameLine"
                   type="text"
                   required 
                   aria-required="true">
        </div>
    </form>
</div>
{% endexample %}

## Inputs

To make `<input>` element as required, add attributes `required aria-required="true"`.

To show errors add `<div class="form-alert" role="alert">` block, that contains all error messages.

### Examples

#### Name field

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="nameTest">Full name</label>
            <input id="nameTest"
                   name="name"
                   type="text"
                   maxlength="255"
                   required 
                   aria-required="true">
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="fullName">Enter your full name</div>
                <div data-error="maxlength">Max length is 255</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

#### Email field

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="emailTest">Email</label>
            <input id="emailTest"
                   name="email"
                   type="email"
                   pattern="^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                   required
                   aria-required="true">
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="email">Invalid email format</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

#### Password field

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="password">Password</label>
            <input id="password"
                   name="password"
                   type="password"
                   minlength="8"
                   maxlength="50"
                   required 
                   aria-required="true">
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="minlength">Minimum length is 10</div>
                <div data-error="maxlength">Maximum length is 50</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

#### Country code field

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="country">Country code</label>
            <input id="country"
                   name="country"
                   type="text"
                   pattern="^\+?(?:[0-9]?){1,6}$"
                   required 
                   aria-required="true">
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="country">Invalid country code format</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

#### Phone number field

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="phone">Phone number</label>
            <input id="phone"
                   name="phone"
                   type="tel"
                   pattern="^\d*(?:\d[+-. ()]*){7,}$"
                   required 
                   aria-required="true">
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="phone">Invalid phone number format</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

## Textarea

Here is markup:

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-input">
            <label for="message">Message</label>
            <textarea id="message"
                      name="message"
                      type="text"
                      rows="3"
                      minlength="10"
                      required 
                      aria-required="true">
            </textarea>
            <div class="form-alert" role="alert">
                <div data-error="required">This field is required</div>
                <div data-error="minlength">Minimum length is 10 characters</div>
            </div>
        </div>
    </form>
</div>
{% endexample %}

## Radio button

{% example html %}
<div class="bg-discover personal-details-section ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <section class="gender-section">
            <label>
                <input type="radio" name="male" value="0">
                <div class="bb-checkbox-box active">
                    <div class="tick"></div>
                </div>
                <span>Male</span>
            </label>
            <label>
                <input type="radio" name="female" value="1">
                <div class="bb-checkbox-box">
                    <div class="tick"></div>
                </div>
                <span>Female</span>
            </label>
        </section>
    </form>
</div>
{% endexample %}

## Select

{% example html %}
<div class="bg-discover ptb-15 plr-15">
    <form class="bb-form bb-form__dark">
        <div class="bb-select">
            <select>
                <option value="" disabled>Choose value</option>
                <option value="1">Value 1</option>
                <option value="2">Value 2</option>
                <option value="3">Value 3</option>
                <option value="4">Value 4</option>
            </select>
            <span class="icon bb-icon-dropdown"></span>
        </div>
    </form>
</div>
{% endexample %}