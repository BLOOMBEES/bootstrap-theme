---
layout: docs
title: Helpers
group: common
--- 

---

## Text formatting

| Class              | Description |
|--------------------|-------------|
| `.pull-left`       | Floats an element to the left |
| `.pull-right`      | Floats an element to the right |
| `.text-left`       | Aligns an element's text to the left |
| `.text-right`      | Aligns an element's text to the right |
| `.text-center`     | Aligns an element's text to the center |
| `.text-justified`  | Aligns an element's text to be justified |
| `.text-uppercase`  | Capitalize element's text |
| `.center-block`    | Sets an element to display:block with margin-right:auto and margin-left:auto |
| `.clearfix`        | Clears floats |
| `.show`, `visible` | Forces an element to be shown |
| `.hidden`	         | Forces an element to be hidden |
{:class="table table-condenced table-hover table-bordered"}

## Shorthand helpers

You can quickly add some properties with nifty shorthanded classes.

### Margin

`*` - integer values multiple of 5 (0, 5, 10 .. 300)

| Class             | Description |
|-------------------|-------------|
| `.mt-*`           | Add margin-top with value of `* px` |
| `.mr-*`           | Add margin-right with value of `* px` |
| `.mb-*`           | Add margin-bottom with value of `* px` |
| `.ml-*`           | Add margin-left with value of `* px` |
| `.mnt-*`           | Add margin-top with value of `-* px` (negative) |
| `.mnr-*`           | Add margin-right with value of `-* px` (negative) |
| `.mnb-*`           | Add margin-bottom with value of `-* px` (negative) |
| `.mnl-*`           | Add margin-left with value of `-* px` (negative) |
| `.mlr-*`           | Add margin-left and margin-right with value of `* px` |
| `.mtb-*`           | Add margin-top and margin-bottom with value of `* px` |
{:class="table table-condenced table-hover table-bordered"}

### Padding

`*` - integer values multiple of 5 (0, 5, 10 .. 300)

| Class             | Description |
|-------------------|-------------|
| `.pt-*`           | Add padding-top with value of `* px` |
| `.pr-*`           | Add padding-right with value of `* px` |
| `.pb-*`           | Add padding-bottom with value of `* px` |
| `.pl-*`           | Add padding-left with value of `* px` |
| `.plr-*`           | Add padding-left and paffing-right with value of `* px` |
| `.ptb-*`           | Add padding-top and padding-bottom with value of `* px` |
{:class="table table-condenced table-hover table-bordered"}

### Colors

| Class             | Description |
|-------------------|-------------|
| `.bg-white`           | Add `background-color: #fff` |
| `.bg-red`           | Add `background-color: #fc4a64` |
| `.bg-green`           | Add `background-color: #2ec6c6` |
| `.bg-green-dark`           | Add `background-color: #002626` |
| `.color-white`           | Add `color: #fff` |
| `.color-green`           | Add `color: #2ec6c6` |
| `.color-red`           | Add `color: #fc4a64` |
{:class="table table-condenced table-hover table-bordered"}

{% example html %}
<div class="bg-white col-md-4">Text test</div> 
<div class="bg-green-dark color-white col-md-4">Text test</div> 
<div class="bg-red color-white col-md-4">Text test</div>
{% endexample html %}

### Font-size

`*` - integer values from 12 to 90

| Class             | Description |
|-------------------|-------------|
| `.fs-*`           | Add font-size with value of `* px` |
{:class="table table-condenced table-hover table-bordered"}

{% example html %}
<span class="fs-13">font-size:13px</span>, 
<span class="fs-24">font-size:24px</span>, 
<span class="fs-44">font-size:44px</span>
{% endexample html %}

### Line-height

`*` - integer values from 10 to 20

| Class             | Description |
|-------------------|-------------|
| `.lh-*`           | Add line-height with value of `*/10 px` |
{:class="table table-condenced table-hover table-bordered"}

{% example html %}
<div class="bg-green-dark color-white col-md-4 lh-10">line-height:1</div> 
<div class="bg-green-dark color-white col-md-4 lh-14">line-height:1.4</div> 
<div class="bg-green-dark color-white col-md-4 lh-19">line-height:1.9</div>
{% endexample html %}