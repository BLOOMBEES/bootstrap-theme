---
layout: docs
title: SmoothScroll
group: components-js
---

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