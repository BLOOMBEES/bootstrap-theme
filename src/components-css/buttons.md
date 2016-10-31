---
layout: docs
title: Buttons
group: components-css
redirect_from: "/components-css/"
---

## Buttons

Bloombees theme includes three main type of buttons, each comming in three variants: normal and disabled.

### Buttons, that adjust width to contents

{% example html %}

<button class="button button-main" type="submit">Main CTA</button>
<button class="button button-main" type="submit" disabled>Main CTA</button>

<button class="button button-action" type="submit">Action in page</button>
<button class="button button-action" type="submit" disabled>Action in page</button>

<button class="button button-second" type="submit">Second CTA</button>
<button class="button button-second" type="submit" disabled>Second CTA</button>

{% endexample %}


### Buttons with icons

{% example html %}
<button class="button button-main" type="submit">Main CTA <i class="icon bb-icon-bee"></i></button>
<button class="button button-default" type="submit">Second CTA <i class="icon bb-icon-facebook-in-o"></i></button>
<button class="button button-second" type="submit">Logo Bee <i class="icon bb-icon-check"></i></button>
{% endexample %}


### Buttons, that adjust width to block size

{% example html %}
   <div class="text-center mt-20">
            <div class="row mb-20">
                <div class="col-xs-4">
                    <button class="button button-main btn-block" type="submit">Main Button</button>
                    <br>
                    <button class="button button-main btn-block" type="submit" disabled>Main Button disabled</button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-action button-sm btn-block" type="submit">Action Button</button>
                    <br>
                    <button class="button button-action button-sm btn-block" type="submit" disabled>Action Button disabled
                    </button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-second btn-block" type="submit">Second Button</button>
                    <br>
                    <button class="button button-second btn-block" type="submit" disabled>Second Button disabled
                    </button>
                </div>
            </div>
            <div class="row mb-20">
                <div class="col-xs-4">
                    <button class="button button-main" type="submit">Main Button</button>
                    <br>
                    <button class="button button-main" type="submit" disabled>Main Button disabled</button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-action" type="submit">Action Button</button>
                    <br>
                    <button class="button button-action" type="submit" disabled>Action Button disabled</button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-second" type="submit">Second Button</button>
                    <br>
                    <button class="button button-second" type="submit" disabled>Second Button disabled</button>
                </div>
            </div>
            <div class="row mb-20">
                <div class="col-xs-4">
                    <button class="button button-main button-with-icon" type="submit">
                        Main Button
                        <span class="icon bb-icon-chat"></span>
                    </button>
                    <br>
                    <button class="button button-main button-with-icon" type="submit" disabled>
                        Main Button disabled
                        <span class="icon bb-icon-chat"></span>
                    </button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-action button-with-icon" type="submit">
                        Chat with the seller
                        <span class="icon bb-icon-chat"></span>
                    </button>
                    <br>
                    <button class="button button-action button-with-icon" type="submit" disabled>
                        Chat with the seller
                        <i class="icon bb-icon-chat"></i>
                    </button>
                </div>
                <div class="col-xs-4">
                    <button class="button button-second button-with-icon" type="submit">
                        Second Button
                        <span class="icon bb-icon-chat"></span>
                    </button>
                    <br>
                    <button class="button button-second button-with-icon" type="submit" disabled>
                        Second Button disabled
                        <span class="icon bb-icon-chat"></span>
                    </button>
                </div>
            </div>
            <div class="row mb-20">
                <div class="col-xs-4">
                    Circle button icon <br>
                    <button class="button-action button-circle" type="submit"><span
                            class="icon bb-icon-cloud-download-o"></span></button>
                    <br>
                    <button class="button-action button-circle" type="submit" disabled><i
                            class="icon bb-icon-cloud-download-o"></i></button>
                </div>
                <div class="col-xs-4">
                    Small button <br>
                    <button class="button button-default button-xs" type="submit">Return Policy</button>
                    <br>
                	<button class="button button-default button-xs" type="submit" disabled>Return Policy</button>
                </div>
                <div class="col-xs-4">
                    Small green button <br>
                    <button class="button button-action button-xs" type="submit">Label</button>
                    <br>
                    <button class="button button-action button-xs" type="submit" disabled>Label</button>
                </div>
            </div>
        </div>
{% endexample %}


### Social Buttons on login page

{% example html %}
<div class="login-btn-group text-center">
    <button class="facebook">
        <span class="login-btn-icon icon bb-icon-facebook"></span>
        <div class="login-btn-label hide-xs">Facebook</div>
    </button>
    <button class="google">
        <span class="login-btn-icon icon bb-icon-google-plus"></span>
        <div class="login-btn-label hide-xs">Google+</div>
    </button>
    <button class="instagram">
        <span class="login-btn-icon icon bb-icon-instagram"></span>
        <div class="login-btn-label hide-xs">Instagram</div>
    </button>
</div>
{% endexample %}


