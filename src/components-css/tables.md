---
layout: docs
title: Tables
group: components-css
---

### Default tables

| Class | Description |
|-------|-------------|
| `.table` | Adds basic styling (light padding and only horizontal dividers) to any <table> |
| `.table-striped` | Adds zebra-striping to any table row within <tbody> (not available in IE8) |
| `.table-bordered` | Adds border on all sides of the table and cells |
| `.table-hover` | Enables a hover state on table rows within a <tbody> |
| `.table-condensed` | Makes table more compact by cutting cell padding in half |
{:class="table table-bordered"}

The `.table-responsive` class creates a responsive table. The table will then scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:

{% example html %}
<div class="table-responsive">
    <table class="table">
        <tr>
            <th>Title 1</th>
            <th>Title 2</th>
            <th>Title 3</th>
            <th>Title 4</th>
            <th>Title 5</th>
            <th>Title 6</th>
            <th>Title ...</th>
            <th>Title n</th>
        </tr>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
    </table>
</div>
{% endexample %}

---

### Examples

#### `.table-hover`

{% example html %}
<table class="table table-hover">
    <tr>
        <th>Title 1</th>
        <th>Title 2</th>
        <th>Title ...</th>
        <th>Title n</th>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
</table>
{% endexample %}

#### `.table-bordered`

{% example html %}
<table class="table table-bordered">
    <tr>
        <th>Title 1</th>
        <th>Title 2</th>
        <th>Title ...</th>
        <th>Title n</th>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
</table>
{% endexample %}

#### `.table-condenced`

{% example html %}
<table class="table table-condenced">
    <tr>
        <th>Title 1</th>
        <th>Title 2</th>
        <th>Title ...</th>
        <th>Title n</th>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
</table>
{% endexample %}

#### `.table-striped`

{% example html %}
<table class="table table-striped">
    <thead>
        <tr>
            <th>Title 1</th>
            <th>Title 2</th>
            <th>Title ...</th>
            <th>Title n</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
    </tbody>
</table>
{% endexample %}

---

| Class | Description |
|-------|-------------|
| `.table-flex` | Set table to flex |
| `.table-flex-*` | Set numbers of columns (`*` can be 2-10), that have equal width |
| `.col-*-**` | Set column with index number `*` (1-10) width to `**` (5-100) in `%` |
| `.col-*-ellipsis` | Set column with index number `*` (1-10) to have text overflow (add `...` in the end) |
| `.col-*-green` | Set column with index number `*` (1-10) to have text color `#2ec6c6` |
| `.col-*-success` | Set column with index number `*` (1-10) to have text color `#46841e` |
{:class="table table-bordered"}

### Example

{% example html %}
<table class="table-flex col-1-20 col-2-25 col-3-25 col-4-25 col-5-10 col-2-ellipsis col-3-ellipsis col-4-ellipsis col-3-green col-5-success">
    <tbody>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
        <tr>
            <td>14/06/2017</td>
            <td>Ricky Martin</td>
            <td>RickyMartinStore</td>
            <td>Pro Plan</td>
            <td>+50€</td>
        </tr>
    </tbody>
</table>
{% endexample %}
