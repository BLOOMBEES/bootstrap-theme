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

### Sign in modal example

{% example html %}
<button class="button button-action" onclick="$('#loginModal').modal('show')">Sing in</button>

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
            <div class="loader-container">
                <div class="loader"></div>
                <div class="login-error">
                    User not found!
                </div>
            </div>
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
                                        bloombees;webapp;error;warning_min_characters
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
            <section id="forgot-error" class="hidden">
                <div class="modal-body">
                    <img src="https://cdn.bloombees.com/static/directives/public/forgotpassword/img/error.png" class="center-block">
                    <p>User not found</p>
                    <button>Please, try again</button>
                </div>
            </section>
        </div>
    </div>
</div>
{% endexample %}