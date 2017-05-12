---
layout: docs
title: Modals
group: components-js
---

## Modal 

It was taken as a basis [bootstrap modals](http://getbootstrap.com/javascript/#modals "The bootstrap modal info")


modal.js
<hr>
Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.
<hr>
**Multiple open modals not supported**
Be sure not to open a modal while another is still visible. Showing more than one modal at a time requires custom code.

**Modal markup placement**
Always try to place a modal's HTML code in a top-level position in your document to avoid other components affecting the modal's appearance and/or functionality.

**Mobile device caveats**
There are some caveats regarding using modals on mobile devices. See our browser support docs for details.
<hr>
**Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals.** To achieve the same effect, use some custom JavaScript:

```javascript
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
})
```

<hr>

## Examples

### Minimum markup

Your modal template skeleton:

```html
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <i class="icon bb-icon-close"></i>
            </button>
        </div>
        <div class="modal-content">
            Your content here!
        </div>
        <div class="modal-footer">
            Control buttons
        </div>
    </div>
</div>
```

To close modal add:

```html
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <i class="icon bb-icon-close"></i>
</button>
```

To initialize modal use javascript:

```javascript
$('#loginModal1').modal('show');
```

### Default example

A rendered modal with header, body, and set of actions in the footer.

{% example html %}
<button class="button button-main mb-20" onclick="$('#myModal1').modal('show');">Show Modal</button>

<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h3 class="modal-title" id="myModalLabel">Modal title</h3>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum earum eligendi eum expedita
                    nam nesciunt voluptatibus voluptatum? Aliquid architecto fuga id nam necessitatibus odio officiis,
                    placeat quasi sapiente totam!</p>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="button button-second" data-dismiss="modal">Close</button>
                <button type="button" class="button button-main">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endexample %}

---

## Sign in modal example

{% example html %}
<button class="button button-main" onclick="$('#loginModal').modal('show')">Sing in</button>

<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="hide-xs mb-20">
            <div class="pull-right text-small login-form-mode-only">
                <span class="text-white">Don't have an account?</span>
                <a onclick="showSignup()">Sign up</a>
            </div>
            <div class="pull-right text-small signup-form-mode-only hidden">
                <span class="text-white">Already have an account?</span>
                <a onclick="showLogin()">Sign in</a>
            </div>
            <a href="/" class="logo logo--login">
                <img src="https://es.bloombees.com/wp-content/uploads/2017/03/logo_bloombees_white.svg" class="ml-0" alt="bloombees">
            </a>
        </div>
        <div class="modal-content">
            <section id="login">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon bb-icon-close"></i></button>
                    <h3 class="modal-title login-form-mode-only" id="myModalLabel">Sign in with</h3>
                    <h3 class="modal-title signup-form-mode-only hidden" id="myModalLabel">Create an account</h3>
                </div>
                <div class="modal-body">
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
                    <section class="signup-buttons-and-tc-section signup-form-mode-only hidden">
                        <div class="login-btn-group signup-buttons text-center">                            
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
                        <section class="terms-and-conditions-section">
                            <p class="tc-acceptance">
                                I accept
                                <a href="#">
                                    terms and conditions
                                </a>
                                and
                                <a href="#">
                                    privacy policy
                                </a>
                            </p>
                        </section>
                    </section>
                    <div class="divider-or">
                        <div class="separator"></div>
                        <p>or</p>
                        <div class="separator"></div>
                    </div>
                    <div class="login-form-container login-form-mode-only">
                        <form autocomplete="off" class="bb-form bb-form__line" id="loginForm" name="loginForm" novalidate="" onsubmit="loginFormSubmit()" role="form">
                            <div class="input-block bb-input">
                                <label for="email140649">Email address</label> <input aria-required="true" id="email140649" name="email" pattern="^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required="" tabindex="1406491" type="email">
                                <div class="form-alert" role="alert">
                                    <div data-error="required">
                                        This field cannot be empty
                                    </div>
                                    <div data-error="email">
                                        Invalid email format
                                    </div>
                                </div>
                            </div>
                            <div class="input-block bb-input">
                                <label for="password140649">Password</label> <input aria-required="true" id="password140649" maxlength="50" name="password" required="" tabindex="1406492" type="password"> <a class="button button-forgot-password" href="javascript:void(0)" onclick="forgotPassword()">Forgot?</a>
                                <div class="form-alert" role="alert">
                                    <div data-error="required">
                                        This field cannot be empty
                                    </div>
                                    <div data-error="minlength">
                                        Password is too short (minimum is 8 characters)
                                    </div>
                                    <div data-error="maxlength">
                                        Maximum characters is 50
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <button class="button button-main button-sm btn-block mt-40" disabled tabindex="140649" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div class="signup-form-container signup-form-mode-only hidden">
                        form here
                    </div>
                </div>
            </section>
            <section id="forgot" class="hidden">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon bb-icon-close"></i></button>
                    <h1 class="modal-title" id="myModalLabel">Forgot password?</h1>
                </div>
                <div class="modal-body">
                    <h3>Sometimes we all forget something</h3>
                    form here
                </div>
            </section>
        </div>
    </div>
</div>
{% endexample %}

## Share and earn modal example

{% example html %}
<button class="button button-main" onclick="$('#testModal').modal('show')">Share & earn</button>

<div class="modal fade ngdialog ngdialog-theme-plain share-and-earn-modal" id="testModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog ngdialog-content" role="document">
        <div class="login-modal-container">
            <section class="bg-green share-vote bottom-triangle plr-30 ptb-30" id="ngdialog2-aria-describedby">
                <div ng-hide="$ctrl.voted">
                    <h3 class="fs-24 mtb-0 lh-12 lh-xx-10 ff-regular color-white" id="ngdialog2-aria-labelledby">Promoting <span >baby music lover</span></h3>
                    <p class="fs-16 fs-xx-12 lh-12">
                        Sold by <span>beeRacheltest0212b</span> <a target="_blank" href="#"><span class="icon-bb icon-link-straight color-white fs-20 va-middle"></span></a>
                    </p>
                    <div class="fx fx-row fx-x-sb fx-y-center share-and-earn-vote">
                        <div class="fx-40 prices-block fs-13 fs-xx-14">
                            <div class="fx fx-x-sb lh-14">
                                <span>Price</span>
                                <div>
                                    <span>€</span>
                                    <span>7.5</span>
                                </div>
                            </div>
                            <div class="fx fx-x-sb lh-14 color-white">
                                <span>You earn</span>
                                <div>
                                    <span>€</span>
                                    <span>0.75</span>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-line hidden-xxs"></div>
                        <div class="voting-container">
                            <div class="fx fx-x-sb fx-y-center color-white fx-45 voting-block visible">
                                <button class="button button-vote button-vote-like icon-bb icon-like fs-20 fx-40"></button>
                                <button class="button button-vote button-vote-dislike icon-bb icon-dislike fs-20 fx-40"></button>
                                <div class="fx fx-x-center fx-y-center color-white fs-16 icon-bb icon-help" data-toggle="tooltip" title="Voting helps Bloombees to evaluate the quality of promotable products."></div>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="share-post-preview bg-white plr-30 ptb-30">
                <span class="fs-12 color-private-filter mb-15">
                    <p class="mb-0 lh-10">Post preview</p>
                    <p class="mt-5 mb-10 lh-12">You can add your custom message depending on the network you select below</p>
                </span>
                <div class="post-preview-inner fx fx-x-sb">
                    <div class="post-img fx-30" style="background-image: url(&quot;https://bloombees-googlestorage-7pxvh1vxhs.netdna-ssl.com/bloombees-public/upload2017/dev/stores/1957_beeracheltest0212b/products/228SJ/beeracheltest0212b-228SJ-baby_music_lover-td-16385.jpeg&quot;);"></div>
                    <div class="post-desc fx-65">
                        <p class="fs-16 fs-xx-12 lh-11 color-discover-font">
                            <span>beeracheltest0212b</span> | <span>baby music lover</span>
                        </p>
                        <p class="fs-13 fs-xx-12 preview-description color-discover-font">baby music lover</p>
                        <p class="fs-13 fs-xx-12 lh-10">
                            <a class="color-private-filter" target="_blank" href="#">Bloombees.com</a>
                        </p>
                    </div>
                </div>
            </section>
            <section class="text-center bg-white plr-30">
                <p class="fs-16 fs-xx-14 color-discover-font">Make your choiсe...</p>
                <div class="shared-networks pt-15 pb-50">
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
            </section>
        </div>
        <div class="ngdialog-close" data-dismiss="modal" aria-label="Close"></div>
    </div>
</div>
{% endexample %}

---

### AngularJS modals

To create modal window use service `modalSrv`, which is based on AngularJS library [ngDialog](https://github.com/likeastore/ngDialog). 

Available methods that you can use:

*`.notice(text, okLabel)`*

Opens notice modal window with message and one button.

| Parameter | Type     | Description |
|-----------|----------|-------------|
| `text`    | (String) | Message |
| `okLabel` | (String) | Label of the button |
{:class="table table-condenced table-hover table-bordered"}

*`.confirm(text, yesLabel, noLabel)`*

Opens confirm modal window with message and two buttons.

| Parameter  | Type | Description |
|------------|------|-------------|
| `text`     | (String) | Message |
| `yesLabel` | (String) | Accept button label |
| `noLabel` | (String) | Cancel button label |
{:class="table table-condenced table-hover table-bordered"}

*`.open(template, controller, controllerAs, className, resolve, plain, data, preCloseCallback, disableClose)`*

Opens modal window (custom parameters set). Full description of the parameters you can find [here](https://github.com/likeastore/ngDialog#options)

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | (String) | Dialog template can be loaded through path to external html template or `<script>` tag with `text/ng-template`. [docs](https://github.com/likeastore/ngDialog#template-string) |
| `controller` | (String) or (Array) or (Object) | Controller that will be used for the dialog window if necessary. The controller can be specified either by referring it by name or directly inline. [docs](https://github.com/likeastore/ngDialog#controller-string--array--object) |
| `controllerAs` | (String) | You could optionally specify `controllerAs` parameter for your controller. [docs](https://github.com/likeastore/ngDialog#controlleras-string) |
| `className` | (String) | This option allows you to control the dialog's look, you can use built-in themes or create your own styled modals. [docs](https://github.com/likeastore/ngDialog#classname-string) |
| `resolve` | (Object.<String, Function>) | An optional map of dependencies which should be injected into the controller. [docs](https://github.com/likeastore/ngDialog#resolve-objectstring-function) |
| `plain` | (Boolean) | If `true` allows to use plain string as template, default `false`. [docs](https://github.com/likeastore/ngDialog#plain-boolean) |
| `data` | (String) or (Object) or (Array) | Any serializable data that you want to be stored in the controller's dialog scope (`$scope.ngDialogData`). [docs](https://github.com/likeastore/ngDialog#data-string--object--array) |
| `preCloseCallback` | (String) or (Function) | Provide either the name of a function or a function to be called before the dialog is closed. [docs](https://github.com/likeastore/ngDialog#preclosecallback-string--function) |
| `disableClose` | (Boolean) | If `true` sets parameters `showClose`, `closeByEscape` and `closeByDocument` to `false`. [docs](https://github.com/likeastore/ngDialog#showclose-boolean) |
{:class="table table-condenced table-hover table-bordered"}

*`.openWithOptions(options)`*

Opens modal window (with full parameters set)

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | (Object) | [ngDialog options](https://github.com/likeastore/ngDialog#options) object |
{:class="table table-condenced table-hover table-bordered"}

*`.closeAll()`*

Closes all opened windows. 

*`.defaultNotice()`*

Opens notice modal window with predefined text 'Something went wrong' and button label 'Ok';

*`.signup(bbCode)`*

| Parameter | Type | Description |
|-----------|------|-------------|
| `bbCode` | (String) | `bbCode` of the product, which we'll use after sign up |
{:class="table table-condenced table-hover table-bordered"}

*`.login(bbCode)`*

| Parameter | Type | Description |
|-----------|------|-------------|
| `bbCode` | (String) | `bbCode` of the product, which we'll use after sign in |
{:class="table table-condenced table-hover table-bordered"}

*`.onboarding()`*

Opens onboarding modal window.

*`.shareAndEarn(product)`*

| Parameter | Type | Description |
|-----------|------|-------------|
| `product` | (Object) | Product object recieved from API |
{:class="table table-condenced table-hover table-bordered"}

*`.getOpenDialogs()`*

Get ID's of all opened dialogs. 

<br>

### **How to start**

Add `ngDialog` dependency to your application, add `modalSrv` code and inject `modalSrv` into your controller:

```javascript
var app = angular.app('dialog', ['ngDialog']);
    
app.controller('DialogController', ['modalSrv', function(modalSrv) {
    modalSrv.open({
      template: 'path-to-template.html',
      plain: false
    });
}]);
```