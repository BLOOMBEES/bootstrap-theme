---
layout: docs
title: Flex grid
group: common
---

Custom CSS classes to use full power of the flexbox with cross-browser's prefixes:

| Class             | Description |
|-------------------|-------------|
| `.fx`             | `display: flex` |
| `.fx-x-center`    | `justify-content: center` |
| `.fx-x-right`     | `justify-content: flex-end` |
| `.fx-x-sb`        | `justify-content: space-between` |
| `.fx-x-sa`        | `justify-content: space-around` |
| `.fx-y-center`    | `align-items: center` |
| `.fx-y-baseline`  | `align-items: baseline` |
| `.fx-row`         | `flex-direction: row` |
| `.fx-row-rw`      | `flex-direction: row-reverse` |
| `.fx-col`         | `flex-direction: column` |
| `.fx-col-rw`      | `flex-direction: column-reverse` |
| `.fx-*`           | `flex: 0 1 *%` (where `*` 1-100) |
| `.fx-wrap`        | `flex-wrap: wrap` |
| `.fx-nowrap`      | `flex-wrap: nowrap` |
{:class="table table-condenced table-hover table-bordered"}

If you're not familiar with flexbox - read this [guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Example

{% example html %}
<div class="fx fx-row w-100 hsize-200 bg-grey color-white">
    <div class="fx fx-50 fx-x-sb fx-y-center bg-buyer">
        <div>
            Left content
        </div>
        <div>
            Right content
        </div>
    </div>  
    <div class="fx fx-col fx-x-sb bg-promoter">
        <div>
            Top content
        </div>
        <div>
            Bottom content
        </div>
    </div>
</div>
{% endexample %}