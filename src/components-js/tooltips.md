---
layout: docs
title: Tooltips
group: components-js
---

## Small tooltip

tooltip.js

<hr>
Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.

Tooltips with zero-length titles are never displayed.
<hr>

### Opt-in functionality

For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning **you must initialize them yourself**.

One way to initialize all tooltips on a page would be to select them by their **data-toggle** attribute:

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

# Examples


<div class="mb-20">
	<button class="button-action button-circle" type="submit" data-toggle="tooltip" data-placement="bottom" title="Send Shipping Label">
		<span class="icon bb-icon-cloud-download-o"></span>
	</button>
</div>

### Static tooltip

Four options are available: top, right, bottom, and left aligned.

<br>
<div class="row">
    <div class="col-sm-3">
        <div class="tooltip left in" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">
                Tooltip on the left
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="tooltip top in" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">
                Tooltip on the top
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="tooltip bottom in" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">
                Tooltip on the bottom
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="tooltip right in" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">
                Tooltip on the right
            </div>
        </div>
    </div>
</div>
<br>
<br>

### Four directions

{% example html %}
<div class="mb-20">
<button type="button" class="button button-main" data-toggle="tooltip" data-placement="left" title="Tooltip on left" >Tooltip on left</button>

<button type="button" class="button button-main" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

<button type="button" class="button button-main" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

<button type="button" class="button button-main" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
</div>
{% endexample %}


### Usage

The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.

Trigger the tooltip via JavaScript:

	$('#example').tooltip(options)

## Markup

The required markup for a tooltip is only a **data** attribute and **title** on the HTML element you wish to have a tooltip. The generated markup of a tooltip is rather simple, though it does require a position (by default, set to **top** by the plugin).

	<!-- HTML to write -->
	<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

	<!-- Generated markup by the plugin -->
	<div class="tooltip top" role="tooltip">
	  <div class="tooltip-arrow"></div>
	  <div class="tooltip-inner">
	    Some tooltip text!
	  </div>
	</div>

### Multiple-line links

Sometimes you want to add a tooltip to a hyperlink that wraps multiple lines. The default behavior of the tooltip plugin is to center it horizontally and vertically. Add **white-space: nowrap;** to your anchors to avoid this.

### Tooltips in button groups, input groups, and tables require special setting

When using tooltips on elements within a **.btn-group** or an **.input-group**, or on table-related elements (**<td>**, **<th>**, **<tr>**, **<thead>**, **<tbody>**, **<tfoot>**), you'll have to specify the option **container: 'body'** (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip is triggered).

### Don't try to show tooltips on hidden elements

Invoking **$(...).tooltip('show')** when the target element is **display: none;** will cause the tooltip to be incorrectly positioned.

### Accessible tooltips for keyboard and assistive technology users

For users navigating with a keyboard, and in particular users of assistive technologies, you should only add tooltips to keyboard-focusable elements such as links, form controls, or any arbitrary element with a **tabindex="0"** attribute.

### Tooltips on disabled elements require wrapper elements

To add a tooltip to a **disabled** or **.disabled** element, put the element inside of a **<div>** and apply the tooltip to that **<div>** instead.


See options and more information on [bootstrap tooltips](http://getbootstrap.com/javascript/#tooltips "The bootstrap tooltip info")