---
layout: docs
title: Select Input
group: components-js
---

## Select Input

`JQuery` based select input. This select element is a dropdown which can be easily natively handled by php or by js. The main idea that 
instead of using html select element we have to construct styled and structured group of radio buttons.

The value of dropdown can be easily taken as a value of `radio button` on backend, or we can use prepared 
`JQuery` function for the JavaScript things.

```javascript
$('#testSelect').bbSelect(); // will return a value of checked radio button
```
 

## Examples

{% example html %}
<div class="row">
        <div class="col-sm-4">
            <div class="bb-native-select" id="testSelect"> <!-- Select element -->
                <label for="select-test">
                    <span>Choose your option</span> <!-- Select placeholder -->
                    <strong></strong>
                </label>
                <input type="checkbox" id="select-test"> <!-- checkbox for the check if select is "dirty" -->
                <span class="bb-title">Choose your option</span> <!-- Select label -->
                <ul class="radio">
                    <li>
                        <input type="radio" value="1" name="test" id="test-0"> <!-- Group of radio-buttons -->
                        <label for="test-0">A Option 1</label>
                    </li>
                    <li>
                        <input type="radio" value="2" name="test" id="test-1"> <!-- Group of radio-buttons -->
                        <label for="test-1">B Option 2</label>
                    </li>
                    <li>
                        <input type="radio" value="3" name="test" id="test-2"> <!-- Group of radio-buttons -->
                        <label for="test-2">C Option 3</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
{% endexample %}
