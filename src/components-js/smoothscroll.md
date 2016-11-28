---
layout: docs
title: SmoothScroll
group: components-js
---

### Overview

To get your links scroll to the anchor ID, you can just add `smooth-scroll` attribute to the container of the link(-s). You can set scroll duration by adding `scroll-duration="3000"` attribute, which means that scrolling will last 3000ms.  

---

### Parameters

| Parameter         | Default  | Description |
|:------------------|:---------|:-------------|
| `scroll-duration` | 1500     | Duration of the scrolling in ms|
{:class="table table-hover table-bordered"}

---

### Example

{% example html %}
<div class="test-container" id="test-top">
    <div class="test-nav" sticky>Top Navigation</div>
    <div class="test-item" smooth-scroll><a href="#test">Click to see smooth scroll</a></div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item" id="test">Target element</div>
    <div class="test-item"><a href="#test-top">To top without animation</a></div>
</div>
{% endexample %}