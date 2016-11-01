---
layout: docs
title: Sticky
group: components-js
---

Add `sticky` attribute to the element, that you want to be sticked to the top on scroll. 

---

### Example

{% example html %}
<div class="test-container sticky-container" style="position: relative;overflow: hidden; overflow-y: scroll; background: white;">
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="sticky-privacy-menu" sticky>Sticked element</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
    <div class="test-item">Sample</div>
</div>
{% endexample %}