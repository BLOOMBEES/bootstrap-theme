---
layout: docs
title: Responsive Utilities
group: common
---

For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. Also included are utility classes for toggling content when printed.

Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation.

##  Available classes

<div class="table-responsive">
    <table class="table table-bordered table-striped responsive-utilities">
        <thead>
            <tr>
                <th></th>
                <th>Extra small devices <small>Phones (&lt;768px)</small></th>
                <th>Small devices <small>Tablets (≥768px)</small></th>
                <th>Medium devices <small>Desktops (≥992px)</small></th>
                <th>Large devices <small>Desktops (≥1200px)</small></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>.visible-xs-*</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
            </tr>
            <tr>
                <th scope="row"><code>.visible-sm-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
            </tr>
            <tr>
                <th scope="row"><code>.visible-md-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
            </tr>
            <tr>
                <th scope="row"><code>.visible-lg-*</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th scope="row"><code>.hidden-xs</code></th>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
            </tr>
            <tr>
                <th scope="row"><code>.hidden-sm</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
            </tr>
            <tr>
                <th scope="row"><code>.hidden-md</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
                <td class="is-visible">Visible</td>
            </tr>
            <tr>
                <th scope="row"><code>.hidden-lg</code></th>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-visible">Visible</td>
                <td class="is-hidden">Hidden</td>
            </tr>
        </tbody>
    </table>
</div>
	
<div class="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Group of classes</th>
                <th>CSS <code>display</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><code>.visible-*-block</code></th>
                <td><code>display: block;</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.visible-*-inline</code></th>
                <td><code>display: inline;</code></td>
            </tr>
            <tr>
                <th scope="row"><code>.visible-*-inline-block</code></th>
                <td><code>display: inline-block;</code></td>
            </tr>
        </tbody>
    </table>
</div>	
		
	
<h2 id="responsive-utilities-print">Print classes</h2>
<p>Similar to the regular responsive classes, use these for toggling content for print.</p>
<div class="table-responsive">
  <table class="table table-bordered table-striped responsive-utilities">
    <thead>
      <tr>
        <th>Class</th>
        <th>Browser</th>
        <th>Print</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><code>.visible-print-block</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible<br>(as <code>display: block</code>)</td>
      </tr>
      <tr>
        <th><code>.visible-print-inline</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible<br>(as <code>display: inline</code>)</td>
      </tr>
      <tr>
        <th><code>.visible-print-inline-block</code></th>
        <td class="is-hidden">Hidden</td>
        <td class="is-visible">Visible<br>(as <code>display: inline-block</code>)</td>
      </tr>
      <tr>
        <th><code>.hidden-print</code></th>
        <td class="is-visible">Visible</td>
        <td class="is-hidden">Hidden</td>
      </tr>
    </tbody>
  </table>
</div>

The class `.visible-print` also exists but it is approximately equivalent to `.visible-print-block`, except with additional special cases for `<table>`-related elements.

## Test cases

Resize your browser or load on different devices to test the responsive utility classes.

### Visible on...

Green checkmarks indicate the element **is visible** in your current viewport.
    
<div class="row responsive-utilities-test visible-on">
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-xs">Extra small</span> <span class="visible-xs-block is-visible">✔ Visible on x-small</span>
    </div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-sm">Small</span> <span class="visible-sm-block is-visible">✔ Visible on small</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-md">Medium</span> <span class="visible-md-block is-visible">✔ Visible on medium</span>
    </div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-lg">Large</span> <span class="visible-lg-block is-visible">✔ Visible on large</span>
    </div>
</div>
<div class="row responsive-utilities-test visible-on">
    <div class="col-xs-6">
        <span class="hidden-xs hidden-sm">Extra small and small</span> <span class="visible-xs-block visible-sm-block is-visible">✔ Visible on x-small and small</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-md hidden-lg">Medium and large</span> <span class="visible-md-block visible-lg-block is-visible">✔ Visible on medium and large</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
        <span class="hidden-xs hidden-md">Extra small and medium</span> <span class="visible-xs-block visible-md-block is-visible">✔ Visible on x-small and medium</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-sm hidden-lg">Small and large</span> <span class="visible-sm-block visible-lg-block is-visible">✔ Visible on small and large</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
        <span class="hidden-xs hidden-lg">Extra small and large</span> <span class="visible-xs-block visible-lg-block is-visible">✔ Visible on x-small and large</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-sm hidden-md">Small and medium</span> <span class="visible-sm-block visible-md-block is-visible">✔ Visible on small and medium</span>
    </div>
</div>
<h3 id="hidden-on"><a aria-label="Anchor link for: hidden on" class="anchorjs-link" data-anchorjs-icon="" href="#hidden-on" style="font-family: anchorjs-icons; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Hidden on...</h3>
<p>Here, green checkmarks also indicate the element <strong>is hidden</strong> in your current viewport.</p>
<div class="row responsive-utilities-test hidden-on">
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-xs">Extra small</span> <span class="visible-xs-block is-visible">✔ Hidden on x-small</span>
    </div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-sm">Small</span> <span class="visible-sm-block is-visible">✔ Hidden on small</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-md">Medium</span> <span class="visible-md-block is-visible">✔ Hidden on medium</span>
    </div>
    <div class="col-xs-6 col-sm-3">
        <span class="hidden-lg">Large</span> <span class="visible-lg-block is-visible">✔ Hidden on large</span>
    </div>
</div>
<div class="row responsive-utilities-test hidden-on">
    <div class="col-xs-6">
        <span class="hidden-xs hidden-sm">Extra small and small</span> <span class="visible-xs-block visible-sm-block is-visible">✔ Hidden on x-small and small</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-md hidden-lg">Medium and large</span> <span class="visible-md-block visible-lg-block is-visible">✔ Hidden on medium and large</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
        <span class="hidden-xs hidden-md">Extra small and medium</span> <span class="visible-xs-block visible-md-block is-visible">✔ Hidden on x-small and medium</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-sm hidden-lg">Small and large</span> <span class="visible-sm-block visible-lg-block is-visible">✔ Hidden on small and large</span>
    </div>
    <div class="clearfix visible-xs-block"></div>
    <div class="col-xs-6">
        <span class="hidden-xs hidden-lg">Extra small and large</span> <span class="visible-xs-block visible-lg-block is-visible">✔ Hidden on x-small and large</span>
    </div>
    <div class="col-xs-6">
        <span class="hidden-sm hidden-md">Small and medium</span> <span class="visible-sm-block visible-md-block is-visible">✔ Hidden on small and medium</span>
    </div>
</div>
