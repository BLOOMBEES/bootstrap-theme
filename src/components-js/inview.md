---
layout: docs
title: Inview
group: components-js
---

### Overview

If you want add to the element appearance animation during scroll, just add `bb-inview` attribute to the element and specify `bb-inview-class`. 
To see list of all classes from animate.css you can visit: [animate.css GitHub](https://github.com/daneden/animate.css)
Or you can write your own CSS3 animations.

---

### Parameters

| Parameter                     | Type             | Default | Description |
|:------------------------------|:-----------------|:--------|:------------|
| `bb-inview-class` *(required)*  | *(String)*       | ''      | Animate.css class scrolling in `ms`|
| `bb-inview-delay` *(optional)*  | *(Integer)* `ms` | 0       | Delay in ms before class will be applied|
| `bb-inview-offset` *(optional)* | *(Integer)* `px` | 0       | Top offset in `px`. Positive value will force element appear closer to the top.|
{:class="table table-hover table-bordered"}

---

### Example

{%example html%}
    <div class="container">
        <div class="row">
            <div class="col-md-4" bb-inview bb-inview-class="fadeIn">
                test1
            </div>
            <div class="col-md-4 bg-red" bb-inview bb-inview-class="fadeIn" bb-inview-delay="500">
                test2
            </div>
            <div class="col-md-4 bg-green-dark color-white" bb-inview bb-inview-class="fadeIn" bb-inview-delay="1000">
                test3
            </div>
        </div>
    </div>
{%endexample html%}